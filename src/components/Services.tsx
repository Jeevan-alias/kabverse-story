import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Layout, Code2, ShoppingBag, Globe } from 'lucide-react';

const services = [
  { 
    title: 'Full-Stack Development', 
    desc: 'Scalable architecture from robust backends to cinematic, high-performance frontends.',
    icon: <Code2 size={40} className="text-gold-primary" />,
  },
  { 
    title: 'E-Commerce Solutions', 
    desc: 'Custom digital storefronts designed for high conversion and seamless user journeys.',
    icon: <ShoppingBag size={40} className="text-gold-light" />,
  },
  { 
    title: 'SaaS & Web Apps', 
    desc: 'Bespoke web-based tools and enterprise software with intuitive UX and deep logic.',
    icon: <Layout size={40} className="text-gold-primary" />,
  },
  { 
    title: 'Global Digital Strategy', 
    desc: 'Full-cycle development from ideation to deployment for a worldwide digital presence.',
    icon: <Globe size={40} className="text-gold-dark" />,
  },
];

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="relative luxury-gold-border p-14 rounded-[4rem] group cursor-pointer h-full gold-hover-glow"
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }}
        className="flex flex-col space-y-10"
      >
        <div className="p-8 rounded-[2.5rem] bg-gold-primary/5 w-fit group-hover:bg-gold-primary/10 transition-all duration-500 border border-gold-primary/10">
          {service.icon}
        </div>
        <div>
          <h3 className="text-4xl font-serif font-black text-white mb-6 tracking-tight">{service.title}</h3>
          <p className="text-text-grey text-xl leading-relaxed font-light">{service.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-48 bg-black px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32">
          <span className="text-gold-primary font-black uppercase tracking-[0.5em] text-xs mb-6 block">
            Capabilities
          </span>
          <h2 className="text-6xl md:text-9xl font-serif font-black text-white mb-10 tracking-tighter">
            Our <span className="text-gradient">Mastery</span>
          </h2>
          <p className="text-text-grey uppercase tracking-[0.6em] text-sm font-bold opacity-60">
            Versatile Expertise • Infinite Excellence
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
