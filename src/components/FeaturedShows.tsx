import { motion } from "motion/react";

const SHOWS = [
  {
    id: 1,
    title: "Golden Globe Awards",
    category: "Awards",
    image: "https://picsum.photos/seed/globes/800/1000",
  },
  {
    id: 2,
    title: "American Music Awards",
    category: "Music",
    image: "https://picsum.photos/seed/amas/800/1000",
  },
  {
    id: 3,
    title: "Billboard Music Awards",
    category: "Music",
    image: "https://picsum.photos/seed/billboard/800/1000",
  },
  {
    id: 4,
    title: "Academy of Country Music Awards",
    category: "Awards",
    image: "https://picsum.photos/seed/acm/800/1000",
  },
];

export default function FeaturedShows() {
  return (
    <section className="py-24 px-6 md:px-12 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter">
              Featured <br /> Productions
            </h2>
          </div>
          <p className="max-w-md text-gray-400 text-lg">
            We produce the world's most watched and celebrated live televised events, reaching audiences in over 180 countries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SHOWS.map((show, index) => (
            <motion.div 
              key={show.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gray-900">
                <img 
                  src={show.image} 
                  alt={show.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-xs font-bold uppercase tracking-widest text-brand-white/60 mb-2">
                    {show.category}
                  </p>
                  <h3 className="text-xl font-display font-bold text-brand-white">
                    {show.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
