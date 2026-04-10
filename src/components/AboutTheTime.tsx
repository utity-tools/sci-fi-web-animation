import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const MILESTONES = [
  {
    year: "1954",
    title: "The Foundation",
    description: "The early days of Zero Station, establishing the core principles of broadcast excellence.",
    image: "/1954_zero_station_history_11.png"
  },
  {
    year: "1960",
    title: "Technological Leap",
    description: "Embracing new transmission technologies that redefined the reach of our signals.",
    image: "/1960_zero_station_history_12.png"
  },
  {
    year: "1964",
    title: "Global Vision",
    description: "Expanding our perspective to capture events that shaped the mid-60s cultural landscape.",
    image: "/1964_zero_station_history_13.png"
  },
  {
    year: "1965",
    title: "Color Revolution",
    description: "The transition to color broadcasting brought a new dimension to our storytelling.",
    image: "/1965_zero_station_history_14.png"
  },
  {
    year: "1966",
    title: "Live Innovation",
    description: "Pushing the boundaries of live reporting with unprecedented on-the-ground coverage.",
    image: "/1966_zero_station_history_15.png"
  },
  {
    year: "1969",
    title: "Space Age Coverage",
    description: "Capturing the historic moments of human exploration that captivated the entire world.",
    image: "/1969_zero_station_history_16.png"
  },
  {
    year: "1976",
    title: "Bicentennial Spirit",
    description: "Documenting the celebrations and shifts in the mid-70s social fabric.",
    image: "/1976_zero_station_history_17.png"
  },
  {
    year: "1980",
    title: "Digital Dawn",
    description: "The first steps into digital processing, setting the stage for the modern era.",
    image: "/1980_zero_station_history_18.png"
  },
  {
    year: "1987",
    title: "Network Expansion",
    description: "Broadening our network infrastructure to connect more people than ever before.",
    image: "/1987_zero_station_history_19.png"
  },
  {
    year: "1991",
    title: "Modern Transition",
    description: "Entering the 90s with a renewed focus on high-fidelity production and global reach.",
    image: "/1991_zero_station_history_20.png"
  }
];

export default function AboutTheTime() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // We use scrollYProgress to determine the active index
  // Since there are 10 items, we divide the scroll into 10 segments
  const activeIndex = useTransform(scrollYProgress, [0, 1], [0, MILESTONES.length - 1], {
    clamp: true
  });

  return (
    <section ref={containerRef} className="relative h-[1000vh] bg-brand-black border-t border-white/5">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Background / Content Container */}
        <div className="relative w-full h-full max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left Side: Text Content */}
          <div className="w-1/3 z-20">
            {MILESTONES.map((milestone, index) => {
              // Continuous cross-fade and movement
              const range = [index - 1, index, index + 1];
              const opacity = useTransform(activeIndex, range, [0, 1, 0]);
              const y = useTransform(activeIndex, range, [20, 0, -20]);

              return (
                <motion.div
                  key={milestone.year}
                  style={{ 
                    opacity,
                    y,
                    zIndex: 20
                  }}
                  className="absolute inset-y-0 left-0 flex flex-col justify-center w-full md:w-[250px] px-6 md:px-12 pointer-events-none"
                >
                  <h2 className="text-3xl md:text-4xl font-display font-black mb-2">{milestone.year}</h2>
                  <p className="text-xs md:text-sm font-medium leading-relaxed opacity-50 max-w-[200px]">
                    {milestone.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Center: Image Container */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            {MILESTONES.map((milestone, index) => {
              const range = [index - 1, index, index + 1];
              const opacity = useTransform(activeIndex, range, [0, 1, 0]);
              const scale = useTransform(activeIndex, range, [0.35, 0.4, 0.35]);

              return (
                <motion.div
                  key={milestone.year}
                  style={{ 
                    opacity,
                    scale,
                    borderRadius: 20,
                    zIndex: 10
                  }}
                  className="absolute w-full h-full overflow-hidden shadow-2xl shadow-black/50"
                >
                  <img 
                    src={milestone.image} 
                    alt={milestone.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </motion.div>
              );
            })}
          </div>

          {/* Right Side: Timeline */}
          <div className="w-1/4 flex flex-col items-end z-20">
            <div className="relative flex flex-col gap-6 items-end">
              {/* Vertical Line */}
              <div className="absolute right-[-20px] top-0 bottom-0 w-[1px] bg-white/10" />
              
              {MILESTONES.map((milestone, index) => {
                const color = useTransform(activeIndex, (v) => (Math.round(v) === index ? "#ff0000" : "#ffffff"));
                const opacity = useTransform(activeIndex, (v) => (Math.round(v) === index ? 1 : 0.4));
                const scale = useTransform(activeIndex, (v) => (Math.round(v) === index ? 1.1 : 0.8));
                const dotBg = useTransform(activeIndex, (v) => (Math.round(v) === index ? "#ff0000" : "rgba(255,255,255,0.2)"));
                const dotScale = useTransform(activeIndex, (v) => (Math.round(v) === index ? 1.5 : 1));

                return (
                  <div key={milestone.year} className="relative group flex items-center gap-4">
                    <motion.span 
                      style={{ 
                        opacity,
                        scale,
                        color
                      }}
                      className="text-sm font-bold tracking-widest"
                    >
                      {milestone.year}
                    </motion.span>
                    <motion.div 
                      style={{ 
                        backgroundColor: dotBg,
                        scale: dotScale
                      }}
                      className="w-1.5 h-1.5 rounded-full"
                    />
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Section Title */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 z-30">
          <h3 className="text-[10px] font-bold uppercase tracking-[0.5em] opacity-40">About the Time</h3>
        </div>

      </div>
    </section>
  );
}
