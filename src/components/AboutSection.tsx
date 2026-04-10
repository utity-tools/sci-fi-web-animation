import { motion } from "motion/react";

export default function AboutSection() {
  return (
    <section className="relative z-10 bg-brand-black py-40 px-6">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.1] text-balance mb-16 tracking-tight">
          From our stage to your social feed, we turn tentpole moments into audience obsession, inspiring headlines, driving ratings, and fueling conversation.
        </h2>
        <button className="px-10 py-5 border border-white/20 rounded-full text-xs font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-brand-black transition-all duration-500">
          More About Us
        </button>
      </motion.div>
    </section>
  );
}
