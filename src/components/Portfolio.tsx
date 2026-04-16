import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Aura Portfolio",
    category: "Financial Ecosystem",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800",
    link: "https://jeevan-alias.github.io/portfolio/"
  },
  {
    title: "Zenith Commerce",
    category: "Modern Retail",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    title: "Nebula AI",
    category: "Intelligent Design",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    title: "Vortex Social",
    category: "Community Platform",
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=800",
    link: "#"
  }
];

const AuraPortfolio = () => {
  return (
    <section className="py-48 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-12">
          <div>
            <span className="text-gold-primary font-black uppercase tracking-[0.5em] text-xs mb-6 block">
              The Artifacts
            </span>
            <h2 className="text-6xl md:text-9xl font-serif font-black text-white mb-8 tracking-tighter uppercase leading-none">
              The <span className="text-gradient">Gallery.</span>
            </h2>
            <p className="text-text-grey uppercase tracking-[0.6em] text-sm font-bold opacity-60">
              Immersive Artifacts • Digital Legacies
            </p>
          </div>
          <button className="px-12 py-5 border-2 border-gold-primary rounded-full text-gold-primary text-[10px] font-black uppercase tracking-[0.4em] hover:bg-gold-primary hover:text-black transition-all duration-500">
            View All Work
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-[4rem] bg-zinc-950 border border-gold-primary/10 aspect-[16/11] gold-hover-glow"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover opacity-30 group-hover:opacity-60 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              {/* Gold Border Highlight on Hover */}
              <div className="absolute inset-0 border-2 border-gold-primary/0 group-hover:border-gold-primary/40 transition-all duration-700 pointer-events-none rounded-[4rem]" />
              
              <div className="absolute inset-0 p-16 flex flex-col justify-end transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                <span className="text-gold-primary font-black uppercase tracking-[0.4em] text-[10px] mb-4 opacity-0 group-hover:opacity-100 transition-all delay-100">
                  {project.category}
                </span>
                <div className="flex justify-between items-center">
                  <h3 className="text-5xl font-serif font-black text-white tracking-tight">{project.title}</h3>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                    className="w-16 h-16 rounded-full glass border border-gold-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:border-gold-primary"
                  >
                    <ExternalLink size={24} className="text-gold-primary" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuraPortfolio;
