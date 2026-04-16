import { motion } from 'framer-motion';
import { Shield, Sparkles, Cpu } from 'lucide-react';

const About = () => {
  return (
    <section className="py-48 relative bg-black px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-primary/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-gold-primary font-black uppercase tracking-[0.6em] text-xs mb-6 block">
              Our Essence
            </span>
            <h2 className="text-6xl md:text-8xl font-serif font-black text-white mb-10 tracking-tight leading-tight">
              A Studio for <br />
              <span className="text-gradient">End-to-End Web</span>
            </h2>
            <div className="w-24 h-1 bg-gold-primary mb-10" />
            <p className="text-text-grey text-xl md:text-2xl leading-relaxed mb-12 font-light max-w-xl">
              We specialize in creating robust, scalable, and visually stunning web-based solutions. 
              From high-traffic e-commerce ecosystems to complex custom web applications, we build for the future.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AboutCard icon={<Shield className="text-gold-primary" size={40} />} title="Secure Roots" desc="Trust built on deep values." index={0} />
            <AboutCard icon={<Sparkles className="text-gold-light" size={40} />} title="Pure Magic" desc="Visual experiences that enchant." index={1} />
            <AboutCard icon={<Cpu className="text-gold-dark" size={40} />} title="AI Fusion" desc="Smart designs that evolve." index={2} />
            <div className="luxury-gold-border p-12 rounded-[4rem] flex flex-col justify-end">
              <h3 className="text-5xl font-cinzel font-black text-white mb-3 tracking-tighter italic">2026</h3>
              <p className="text-gold-primary uppercase tracking-[0.4em] text-xs font-bold">The Future</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutCard = ({ icon, title, desc, index }: { icon: any; title: string; desc: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    whileHover={{ y: -15 }}
    className="glass p-12 rounded-[4rem] border-white/5 flex flex-col items-center text-center space-y-8 group hover:border-gold-primary/40 transition-all duration-500 shadow-2xl hover:shadow-gold-primary/10"
  >
    <div className="p-6 rounded-[2.5rem] bg-gold-primary/5 group-hover:bg-gold-primary/15 transition-all duration-500 border border-gold-primary/10">
      {icon}
    </div>
    <div>
      <h3 className="text-3xl font-serif font-bold text-white mb-4 tracking-tight">{title}</h3>
      <p className="text-text-grey font-light leading-relaxed text-lg">{desc}</p>
    </div>
  </motion.div>
);

export default About;
