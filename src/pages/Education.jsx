import { GraduationCap, School } from "lucide-react";

export const Education = () => {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          My <span className="text-primary">Education</span>
        </h2>

        <div className="relative pl-8 md:pl-12">

          {/* Vertical Line */}
          <div className="absolute left-3 md:left-5 top-0 w-[3px] h-full bg-primary/40 rounded-full"></div>

          {/* COLLEGE */}
          <TimelineItem
            icon={<GraduationCap className="h-8 w-8 text-primary" />}
            title="B.Tech in Computer Science & Engineering"
            institution="Dr. D. Y. Patil Pratishthan’s College of Engineering, Kolhapur"
            duration="2023 – 2027"
            status="Pursuing"
            details="CGPA: 8.8 (till 4th sem)"
          />

          {/* 12TH */}
          <TimelineItem
            icon={<School className="h-8 w-8 text-primary" />}
            title="Higher Secondary Education (HSC)"
            institution="Jai Hind Junior College, Pimpri"
            duration="2022 – 2023"
            details="Maharashtra State Board • MHT-CET: 70 Percentile"
          />

        </div>
      </div>
    </section>
  );
};

/* === TIMELINE COMPONENT === */
const TimelineItem = ({ icon, title, institution, duration, status, details }) => {
  return (
    <div className="relative mb-14">
      {/* DOT */}
      <div className="absolute -left-[1.55rem] md:-left-[2.15rem] top-2 h-4 w-4 rounded-full bg-primary shadow-md ring-4 ring-primary/20"></div>

      {/* CARD */}
      <div className="gradient-border p-6 rounded-xl card-hover bg-card">
        <div className="flex items-start gap-4">
          {icon}
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground text-sm mt-1">{institution}</p>

            <div className="mt-3 space-y-1 text-sm">
              <p>
                <span className="font-medium text-primary">Duration:</span> {duration}
              </p>
              {status && (
                <p>
                  <span className="font-medium text-primary">Status:</span> {status}
                </p>
              )}
              <p className="text-primary">{details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
