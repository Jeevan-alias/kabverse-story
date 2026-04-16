import { motion } from 'framer-motion';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 2.5 }}
      onAnimationComplete={onComplete}
      className="fixed inset-0 z-[100] bg-black flex items-center justify-center flex-col"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="text-6xl md:text-9xl font-cinzel font-black tracking-[0.3em] text-white flex items-center"
      >
        KABIR<span className="text-gold-primary">VERSE</span>
      </motion.div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "300px" }}
        transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
        className="h-[2px] bg-gradient-to-r from-gold-dark via-gold-primary to-gold-dark mt-8 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.5)]"
      />
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-10 text-gold-primary uppercase tracking-[0.6em] text-[10px] font-black"
      >
        Elite Wisdom • Luxury Design
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
