import { motion } from "motion/react";
import { Clapperboard, MapPin, Tv } from "lucide-react";
import gotImage from "../assets/series/got.jpg";
import breakingBadImage from "../assets/series/bb.jpg";
import darkImage from "../assets/series/images (15).jpg";
import theBoysImage from "../assets/series/the-boys-collage-featuring-starlight-homelander-and-billy-butcher.avif";
import peakyBlindersImage from "../assets/series/pb.jpg";
import bajrangiBhaijaanImage from "../assets/movies/bbj.jpg";
import chhaavaImage from "../assets/movies/chaava.jpg";
import chhichhoreImage from "../assets/movies/chich.jpg";
import dhurandharImage from "../assets/movies/dhu.jpg";
import theMartianImage from "../assets/movies/martian.jpg";
import pandharpurImage from "../assets/places/pvr.webp";
import puneImage from "../assets/places/PUNE-blog.jpg";
import murudeshwarImage from "../assets/places/mur.webp";
import mahableshwarImage from "../assets/places/mahabh.jpg";
import karwarImage from "../assets/places/Karwar-City.webp";
import dudhsagarImage from "../assets/places/images (16).jpg";

const collections = [
  {
    icon: Tv,
    title: "Recommended Series",
    items: [
      {
        title: "Breaking Bad",
        image: breakingBadImage,
        description:
          "Loved Walter and Jesse’s chemistry. A man pushed to extremes, telling himself it’s all for his family.",
      },
      {
        title: "Game of Thrones",
        image: gotImage,
        description:
          "A peak, unpredictable fantasy experience. You don’t get to see something like it every day.",
      },
      {
        title: "Dark",
        image: darkImage,
        description:
          "I wish I could forget it and watch again. Keep a pen and paper nearby; the relationships are a puzzle. Peak series.",
      },
      {
        title: "The Boys",
        image: theBoysImage,
        description:
          "Testosterone-fueled chaos meets chemically engineered superheroes. Strong character development and standout performances from Antony Starr and Jensen Ackles. Mature content; definitely not a family watch.",
      },
      {
        title: "Peaky Blinders",
        image: peakyBlindersImage,
        description:
          "Thomas Shelby carries an unmistakable aura. A stylish, old-school crime series.",
      },
    ],
  },
  {
    icon: Clapperboard,
    title: "Recommended Movies",
    items: [
      {
        title: "Bajrangi Bhaijaan",
        image: bajrangiBhaijaanImage,
        description:
          "A heartfelt reminder that humanity is alive and can cross borders. I watched it when I was 10 or 12, and it still gets to me.",
      },
      {
        title: "Chhaava",
        image: chhaavaImage,
        description:
          "A powerful portrayal of Chhatrapati Sambhaji Maharaj and his courage. His legacy makes today's political noise feel small. Once a fighter, always a Maratha fighter.",
      },
      {
        title: "Chhichhore",
        image: chhichhoreImage,
        description:
          "One of Sushant Singh Rajput's best performances: funny, heartfelt, and a reminder that setbacks do not define you.",
      },
      {
        title: "Dhurandhar",
        image: dhurandharImage,
        description:
          "One of the best films I've seen recently, with a gripping story and a terrific music album. The political reading is debated, but I found it thoroughly compelling.",
      },
      {
        title: "The Martian",
        image: theMartianImage,
        description:
          "An uplifting survival story about science, persistence, and solving one problem at a time. A great celebration of human ingenuity.",
      },
    ],
  },
  {
    icon: MapPin,
    title: "Places I Love",
    items: [
      {
        title: "Pandharpur",
        image: pandharpurImage,
        description:
          "A deeply spiritual place. Every visit fills my heart with devotion to Lord Vitthal and the emotion of this special place.",
      },
      {
        title: "Pune",
        image: puneImage,
        description:
          "I spent only a little time here, but loved the weather and the city's big-city infrastructure. Dagdusheth Ganpati left a lasting impression, along with one memory I’ll keep private.",
      },
      {
        title: "Murudeshwar",
        image: murudeshwarImage,
        description:
          "A place to slow down, sit by the shore, and have a quiet conversation with Mahadev. The temple and sea make it feel truly special.",
      },
      {
        title: "Mahabaleshwar",
        image: mahableshwarImage,
        description:
          "Cool air, green hills, and beautiful viewpoints make this a lovely place to pause, wander, and take in the scenery.",
      },
      {
        title: "Karwar",
        image: karwarImage,
        description:
          "I spent a good amount of time here and loved the food, peaceful pace, and especially the friends I made.",
      },
      {
        title: "Dudhsagar Falls",
        image: dudhsagarImage,
        description:
          "On the way to Goa, I made sure not to miss this view. In the monsoon, Dudhsagar really does look like a sea of milk. Unbelievable natural beauty.",
      },
    ],
  },
];

const RecommendationCard = ({ title, description, image }) => (
  <article className="flex h-[620px] w-[min(88vw,440px)] shrink-0 self-start flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0d1117] sm:w-[440px]">
    {image ? (
      <img
        src={image}
        alt={`${title} poster`}
        className="h-[390px] w-full shrink-0 border-b border-white/10 bg-black object-contain"
      />
    ) : (
      <div className="grid h-[390px] shrink-0 place-items-center border-b border-white/10 bg-white/[0.025] text-xs uppercase tracking-[0.14em] text-white/30">
        Image coming later
      </div>
    )}
    <div className="min-h-0 flex-1 overflow-y-auto p-5">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {description && <p className="mt-2 text-sm leading-6 text-white/60">{description}</p>}
    </div>
  </article>
);

export const MyStuff = () => {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#12130f] px-4 pb-24 pt-32 text-white sm:px-6">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(220,215,195,0.2)_0.7px,transparent_0.7px)] [background-size:24px_24px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-5xl">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">Beyond the work</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">My Stuff</h1>
          <p className="mt-5 text-base leading-7 text-white/60 sm:text-lg">
            A collection of the series, movies, and places I enjoy.
          </p>
        </motion.header>

        <div className="mt-14 space-y-12">
          {collections.map(({ icon: Icon, title, items }, index) => (
            <motion.section
              key={title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              aria-labelledby={`collection-${index}`}
            >
              <div className="mb-5 flex items-center gap-3 border-t border-white/15 pt-5">
                <Icon size={18} className="shrink-0 text-emerald-200" aria-hidden="true" />
                <h2 id={`collection-${index}`} className="text-xl font-semibold text-white">
                  {title}
                </h2>
              </div>
              <div className="flex items-start gap-4 overflow-x-auto pb-3">
                {items.length > 0 ? items.map((item) => (
                  <RecommendationCard key={item.title} {...item} />
                )) : (
                  <RecommendationCard
                    title="More coming soon"
                    description="I’ll add recommendations here soon."
                  />
                )}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  );
};