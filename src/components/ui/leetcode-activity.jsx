import * as React from "react";
import { ExternalLink } from "lucide-react";

const API_URL = "https://alfa-leetcode-api.onrender.com";
const calendarRequests = new Map();
const CELL_GAP = 2;
const ACTIVITY_COLORS = ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"];
const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DATE_FORMAT = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});

function getCalendar(payload) {
  let calendar = payload?.submissionCalendar ?? payload?.calendar ?? payload;
  if (typeof calendar === "string") {
    try {
      calendar = JSON.parse(calendar);
    } catch {
      return {};
    }
  }

  if (!calendar || typeof calendar !== "object" || Array.isArray(calendar)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(calendar).map(([timestamp, count]) => {
      const numericTimestamp = Number(timestamp);
      const date = Number.isNaN(numericTimestamp)
        ? timestamp.slice(0, 10)
        : new Date(
            numericTimestamp < 1e12 ? numericTimestamp * 1000 : numericTimestamp,
          )
              .toISOString()
              .slice(0, 10);
      return [date, Number(count) || 0];
    }),
  );
}

function fetchCalendar(username, year) {
  const key = `${username}:${year}`;
  if (!calendarRequests.has(key)) {
    const request = fetch(
      `${API_URL}/${encodeURIComponent(username)}/calendar?year=${year}`,
    )
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load LeetCode activity");
        return response.json();
      })
      .then(getCalendar)
      .catch((error) => {
        calendarRequests.delete(key);
        throw error;
      });
    calendarRequests.set(key, request);
  }

  return calendarRequests.get(key);
}

function makeWeeks(calendar) {
  const today = new Date();
  const end = new Date(
    Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate()),
  );
  const firstDay = new Date(end);
  firstDay.setUTCDate(firstDay.getUTCDate() - 364);
  firstDay.setUTCDate(firstDay.getUTCDate() - firstDay.getUTCDay());

  const weeks = [];
  for (let date = new Date(firstDay); date <= end; date.setUTCDate(date.getUTCDate() + 1)) {
    if (date.getUTCDay() === 0) weeks.push([]);
    const key = date.toISOString().slice(0, 10);
    weeks.at(-1).push({ date: key, count: calendar[key] ?? 0 });
  }

  return weeks;
}

function getLevel(count) {
  if (!count) return 0;
  if (count < 2) return 1;
  if (count < 4) return 2;
  if (count < 7) return 3;
  return 4;
}

export default function LeetCodeActivity({ username, className = "" }) {
  const [activity, setActivity] = React.useState(null);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!username) return;
    let active = true;
    const currentYear = new Date().getFullYear();

    Promise.all(
      [currentYear - 1, currentYear].map((year) =>
        fetchCalendar(username, year),
      ),
    )
      .then(([previousYear, currentYearCalendar]) => {
        if (!active) return;
        setActivity({ ...previousYear, ...currentYearCalendar });
      })
      .catch(() => {
        if (active) setFailed(true);
      });

    return () => {
      active = false;
    };
  }, [username]);

  const weeks = React.useMemo(() => makeWeeks(activity ?? {}), [activity]);
  const days = weeks.flat();
  const total = days.reduce((sum, day) => sum + day.count, 0);
  const activeDays = days.filter((day) => day.count > 0).length;
  const months = weeks.map((week) => {
    const first = week.find((day) => day.date.slice(8) === "01");
    return first ? first.date.slice(5, 7) : null;
  });

  return (
    <section
      aria-label="LeetCode submission activity"
      className={`w-full max-w-[1040px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d1117]/70 p-5 text-left ${className}`}
    >
      <div className="mb-4 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-medium text-white">
            {activity ? `${total} submissions in the last year` : "LeetCode submissions"}
          </h2>
          <p className="mt-1 text-sm text-white/50">
            {failed
              ? "Activity is temporarily unavailable"
              : activity
                ? `${activeDays} active days`
                : "Loading activity..."}
          </p>
        </div>
        <a
          href={`https://leetcode.com/u/${encodeURIComponent(username)}/`}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 text-sm text-white/65 transition-colors hover:text-[#39d353]"
        >
          Profile <ExternalLink size={14} aria-hidden="true" />
        </a>
      </div>

      {activity ? (
        <>
          <div>
            <div
              aria-hidden="true"
              className="mb-1 grid h-3 text-[10px] leading-none text-white/40"
              style={{
                gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
                columnGap: CELL_GAP,
              }}
            >
              {months.map((month, index) => (
                <span key={index} className="whitespace-nowrap">
                  {month && MONTH_NAMES[Number(month) - 1]}
                </span>
              ))}
            </div>

            <div
              className="grid"
              style={{
                gridTemplateColumns: `repeat(${weeks.length}, minmax(0, 1fr))`,
                gap: CELL_GAP,
              }}
            >
              {weeks.map((week, weekIndex) => (
                <div key={weekIndex} className="flex min-w-0 flex-col" style={{ gap: CELL_GAP }}>
                    {week.map((day) => {
                      const level = getLevel(day.count);
                      const formattedDate = DATE_FORMAT.format(
                        new Date(`${day.date}T00:00:00Z`),
                      );
                      return (
                        <div
                          key={day.date}
                          title={`${day.count} ${day.count === 1 ? "submission" : "submissions"} on ${formattedDate}`}
                          aria-label={`${day.count} submissions on ${formattedDate}`}
                          className="aspect-square w-full rounded-[3px]"
                          style={{
                            backgroundColor: ACTIVITY_COLORS[level],
                          }}
                        />
                      );
                    })}
                  </div>
              ))}
            </div>
          </div>

          <div className="mt-4 flex items-center justify-end gap-2 text-[10px] text-white/45">
            <span>Less</span>
            {ACTIVITY_COLORS.map((color) => (
              <span
                key={color}
                aria-hidden="true"
                className="size-[13px] rounded-[3px]"
                style={{ backgroundColor: color }}
              />
            ))}
            <span>More</span>
          </div>
        </>
      ) : (
        <p className="flex min-h-28 items-center justify-center text-sm text-white/45">
          {failed ? "The contribution calendar could not be loaded." : "Loading calendar..."}
        </p>
      )}
    </section>
  );
}