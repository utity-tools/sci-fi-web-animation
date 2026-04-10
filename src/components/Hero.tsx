import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, animate, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    id: 1,
    video: "/zero_station_video_1.mp4",
    title: "Defining <br /> Entertainment",
    description: "Dick Clark Productions is the world's largest producer and proprietor of televised live entertainment programming."
  },
  {
    id: 2,
    video: "/zero_station_video_2.mp4",
    title: "Live <br /> Into Legendary",
    description: "We turn live moments into legendary experiences, creating cultural impact that resonates across generations."
  }
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const handleDragEnd = (e: any, { offset, velocity }: any) => {
    const swipe = Math.abs(offset.x) > 50 && Math.abs(velocity.x) > 500;
    if (swipe) {
      if (offset.x > 0) prevSlide();
      else nextSlide();
    }
  };

  // Auto-scroll logic to snap the animation
  useEffect(() => {
    let isSnapping = false;
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (isSnapping) return;
      
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY;
      const threshold = 20; 
      const snapTarget = window.innerHeight * 2.16; // 0.6 * 360vh

      // If scrolling down from the very top
      if (currentScrollY > threshold && currentScrollY < snapTarget && scrollDelta > 0) {
        isSnapping = true;
        
        animate(window.scrollY, snapTarget, {
          duration: 1.4, // Slower duration (approx 20% more than standard smooth scroll)
          ease: [0.33, 1, 0.68, 1], // Custom cubic-bezier for a more premium feel
          onUpdate: (latest) => window.scrollTo(0, latest),
          onComplete: () => {
            setTimeout(() => { isSnapping = false; }, 100);
          }
        });
      }
      
      // If scrolling up and near the snap target
      if (currentScrollY < snapTarget - threshold && currentScrollY > threshold && scrollDelta < 0) {
        isSnapping = true;
        
        animate(window.scrollY, 0, {
          duration: 1.4,
          ease: [0.33, 1, 0.68, 1],
          onUpdate: (latest) => window.scrollTo(0, latest),
          onComplete: () => {
            setTimeout(() => { isSnapping = false; }, 100);
          }
        });
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scale from 1 to 0.4 (smaller square)
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.45]);
  // Border radius from 0 to 40px
  const borderRadius = useTransform(scrollYProgress, [0, 0.6], [0, 40]);
  // Move the video container down slightly as it shrinks
  const containerY = useTransform(scrollYProgress, [0, 0.6], [0, 80]);
  
  // Text "DEFINING ENTERTAINMENT" animation
  // It starts centered and moves up slightly but stays below the header
  const titleY = useTransform(scrollYProgress, [0, 0.4], [0, -140]);
  const titleScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.6]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.5], [1, 1, 0.8]);

  // Video zoom effect
  const videoScale = useTransform(scrollYProgress, [0, 0.6], [1.2, 1]);

  return (
    <section ref={containerRef} className="relative h-[360vh] bg-brand-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Main Animated Container */}
        <motion.div 
          style={{ 
            scale,
            borderRadius,
            y: containerY,
          }}
          className="relative w-full h-full overflow-hidden shadow-2xl shadow-black/50 will-change-transform flex items-center justify-center cursor-grab active:cursor-grabbing"
        >
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              initial={{ x: direction > 0 ? "100%" : "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? "-100%" : "100%", opacity: 0 }}
              transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 w-full h-full"
            >
              <motion.video 
                style={{ scale: videoScale }}
                autoPlay 
                muted 
                loop 
                playsInline
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
                referrerPolicy="no-referrer"
                key={SLIDES[currentIndex].video}
              >
                <source src={SLIDES[currentIndex].video} type="video/mp4" />
              </motion.video>
            </motion.div>
          </AnimatePresence>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 z-[1] pointer-events-none" />
        </motion.div>

        {/* Carousel Controls - Bottom Center like reference */}
        <motion.div 
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]),
            y: useTransform(scrollYProgress, [0, 0.1], [0, 20])
          }}
          className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-8 z-30"
        >
          <button 
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>
          
          <div className="flex flex-col items-center gap-1 min-w-[120px]">
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] opacity-40">Slide</span>
            <span className="text-xs font-bold tracking-widest">0{currentIndex + 1} / 0{SLIDES.length}</span>
          </div>

          <button 
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300 group"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Title and Description Split Layout */}
        <motion.div 
          style={{ 
            y: titleY, 
            scale: titleScale,
            opacity: titleOpacity
          }}
          className="absolute inset-0 flex items-center justify-center px-6 md:px-12 lg:px-24 pointer-events-none z-10"
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 w-full max-w-7xl items-center gap-12"
            >
              {/* Left: Main Title */}
              <div className="text-left">
                <h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tighter leading-[0.9] text-balance"
                  dangerouslySetInnerHTML={{ __html: SLIDES[currentIndex].title }}
                />
              </div>
              
              {/* Right: Secondary Text */}
              <div className="flex justify-end">
                <p className="max-w-xs text-sm md:text-base lg:text-lg font-medium leading-relaxed opacity-80 text-right md:text-left md:ml-auto">
                  {SLIDES[currentIndex].description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div 
          initial={{ opacity: 1 }}
          style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-40">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
