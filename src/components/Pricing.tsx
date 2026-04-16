import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Aura",
    price: "₹1,500",
    features: ["Single Page Story", "3D Hero Element", "Essential Animations", "Responsive Design", "1 Month Elite Support"],
    popular: false
  },
  {
    name: "Zenith",
    price: "₹3,500",
    features: ["Full Storytelling Experience", "Custom 3D Scene", "Advanced Scroll Effects", "Premium Brand Identity", "6 Months Priority Support", "White-glove Service"],
    popular: true
  },
  {
    name: "Celestial",
    price: "₹7,500+",
    features: ["Enterprise Ecosystem", "Custom AI Engine", "E-commerce Integration", "Cinematic Motion Design", "Lifetime Luxury Support", "Strategy Consulting"],
    popular: false
  }
];

const Pricing = () => {
  return (
    <section className="py-48 bg-black px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-40">
          <h2 className="text-6xl md:text-[14rem] font-serif font-black text-gold-primary mb-6 tracking-tighter opacity-5 leading-none uppercase select-none">
            Prestige
          </h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="-mt-24 md:-mt-48 relative z-10"
          >
            <h3 className="text-5xl md:text-8xl font-serif font-black text-white mb-10 tracking-tight">
              Transparent <span className="text-gradient">Investment.</span>
            </h3>
            <p className="text-gold-primary uppercase tracking-[0.6em] text-sm font-bold opacity-60">
              Choose your level of transcendence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -20 }}
              className={`relative luxury-gold-border p-14 rounded-[4rem] flex flex-col items-center text-center group gold-hover-glow ${
                plan.popular ? 'bg-gold-primary/5' : 'bg-black'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 px-10 py-3 bg-gradient-to-r from-gold-dark via-gold-primary to-gold-dark text-white text-[10px] font-black rounded-full uppercase tracking-[0.4em] shadow-[0_0_40px_rgba(212,175,55,0.4)]">
                  Most Requested
                </div>
              )}

              <h4 className="text-3xl font-serif font-black text-white mb-6 tracking-tighter uppercase">{plan.name}</h4>
              <div className="flex items-baseline space-x-1 mb-12">
                <span className="text-6xl font-serif font-black text-white">{plan.price}</span>
              </div>

              <div className="w-full space-y-6 mb-16 text-left border-t border-gold-primary/10 pt-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center space-x-4">
                    <div className="w-6 h-6 rounded-full bg-gold-primary/10 flex items-center justify-center border border-gold-primary/20">
                      <Check className="text-gold-primary" size={14} />
                    </div>
                    <span className="text-text-grey text-base font-light">{feature}</span>
                  </div>
                ))}
              </div>

              <a 
                href="#contact"
                className={`w-full py-6 rounded-[2rem] font-black uppercase tracking-[0.4em] text-[10px] transition-all duration-500 text-center block ${
                plan.popular 
                  ? 'bg-gold-primary text-black shadow-2xl hover:bg-gold-light' 
                  : 'bg-white/5 text-white hover:bg-gold-primary hover:text-black border border-white/10 hover:border-gold-primary'
              }`}>
                Secure Spot
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
