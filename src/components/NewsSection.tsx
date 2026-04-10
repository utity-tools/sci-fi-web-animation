import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const ARTICLES = [
  {
    id: 1,
    date: "Oct 24, 2025",
    title: "Dick Clark Productions Announces New Partnership with Major Streaming Platform",
    image: "https://picsum.photos/seed/news1/600/400",
  },
  {
    id: 2,
    date: "Sep 12, 2025",
    title: "The 82nd Annual Golden Globe Awards Set for January 2026",
    image: "https://picsum.photos/seed/news2/600/400",
  },
  {
    id: 3,
    date: "Aug 05, 2025",
    title: "Behind the Scenes: Producing the World's Biggest Live Events",
    image: "https://picsum.photos/seed/news3/600/400",
  },
];

export default function NewsSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white text-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">
            Latest News
          </h2>
          <button className="hidden md:flex items-center gap-2 font-bold uppercase tracking-widest text-sm hover:gap-4 transition-all">
            View All <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ARTICLES.map((article, index) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col"
            >
              <div className="aspect-video overflow-hidden rounded-xl mb-6">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                {article.date}
              </p>
              <h3 className="text-xl font-bold leading-tight hover:underline cursor-pointer">
                {article.title}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
