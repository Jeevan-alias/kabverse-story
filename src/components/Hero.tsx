import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#D4AF37" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#A67C00" />
        </Canvas>
      </div>

      {/* Luxury Glowing Ring Animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: [0.1, 0.3, 0.1], 
          scale: [1, 1.2, 1],
          rotate: 360 
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="absolute w-[600px] h-[600px] rounded-full border border-gold-primary/20 blur-sm z-0"
      />

      <div className="z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-7xl md:text-[10rem] font-cinzel font-black tracking-widest text-white leading-none mb-8"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(212, 175, 55, 0)", 
                "0 0 40px rgba(212, 175, 55, 0.4)", 
                "0 0 20px rgba(212, 175, 55, 0)"
              ] 
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="text-gradient">KABIRVERSE</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <p className="text-lg md:text-2xl font-light text-text-grey tracking-[0.3em] uppercase mb-16 max-w-3xl mx-auto leading-relaxed">
              Infinite Development. <span className="text-gold-primary font-bold">Comprehensive Web Solutions.</span>
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 40px rgba(212, 175, 55, 0.5)",
                borderColor: "#F5D76E"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-6 bg-transparent border-2 border-gold-primary text-gold-primary text-sm font-black rounded-full uppercase tracking-[0.5em] transition-all duration-500 hover:bg-gold-primary hover:text-black"
            >
              Explore Legacy
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40"
      >
        <span className="text-xs uppercase tracking-[0.5em] font-bold text-gold-primary">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
