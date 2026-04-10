import { motion } from "motion/react";

export default function SignupSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-brand-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 aspect-[4/3] overflow-hidden rounded-3xl"
          >
            <img 
              src="https://picsum.photos/seed/signup/1200/900" 
              alt="Zero Station Studio" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Right Side: Form Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="max-w-md">
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter mb-6">
                Sign up to <br /> Zero Station
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                Join our exclusive community and get early access to the latest productions, behind-the-scenes content, and industry news.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 ml-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-white/40 transition-colors"
                  />
                </div>

                <div className="pt-4">
                  <button 
                    type="button"
                    className="w-full py-5 bg-white text-brand-black rounded-full font-bold uppercase tracking-[0.2em] text-xs hover:bg-opacity-90 transition-all active:scale-[0.98]"
                  >
                    Subscribe Now
                  </button>
                </div>

                <p className="text-[10px] text-white/30 text-center mt-6 uppercase tracking-widest">
                  By signing up, you agree to our Terms & Privacy Policy.
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
