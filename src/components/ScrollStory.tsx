import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

const quotes = [
  { text: "Within this body, the creator has hidden the entire universe.", source: "Kabir" },
  { text: "Life is a journey, not a destination. Experience the modern soul.", source: "KabirVerse" },
  { text: "The river that flows in you also flows in me.", source: "Kabir" },
  { text: "Transforming spiritual essence into digital masterpieces.", source: "Philosophy" },
];

const QuoteSection = ({ quote }: { quote: { text: string; source: string } }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, margin: "-100px 0px -100px 0px" });

  return (
    <div 
      ref={ref}
      className="min-h-screen flex items-center justify-center snap-start py-24 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.95 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-5xl text-center"
      >
        <motion.div
          animate={isInView ? { opacity: [0, 0.2, 0.1] } : {}}
          className="mb-10 text-gold-primary/20 text-9xl md:text-[12rem] font-serif italic select-none"
        >
          &ldquo;
        </motion.div>
        <h2 className="text-4xl md:text-8xl font-serif font-black text-white leading-tight mb-16 tracking-tight">
          {quote.text}
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: "150px" } : { width: 0 }}
          className="h-[1px] bg-gold-primary mx-auto mb-10 shadow-[0_0_10px_rgba(212,175,55,0.5)]"
        />
        <p className="text-gold-primary uppercase tracking-[0.6em] text-xs font-black opacity-60">
          {quote.source}
        </p>
      </motion.div>
    </div>
  );
};

const ScrollStory = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative bg-black cinematic-scroll overflow-hidden">
      <motion.div 
        style={{ y: backgroundY, opacity }}
        className="fixed inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none"
      >
        <div className="absolute w-[900px] h-[900px] bg-gold-primary/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute w-[700px] h-[700px] bg-gold-dark/5 rounded-full blur-[150px] -translate-x-1/3 translate-y-1/3" />
      </motion.div>

      <div className="relative z-10">
        {quotes.map((quote, index) => (
          <QuoteSection key={index} quote={quote} />
        ))}
      </div>
    </section>
  );
};

export default ScrollStory;
