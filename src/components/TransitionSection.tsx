import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TransitionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section ref={ref} className="relative py-48 md:py-64 overflow-hidden">
      {/* The void fades */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-parchment"
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-gold to-transparent mx-auto mb-12" />
          <p className="font-ui text-[10px] text-gold/60 mb-8 tracking-[0.3em]">
            ΜΕΤΑΒΑΣΗ
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-light text-foreground/60 leading-relaxed max-w-2xl mx-auto">
            Από τη σκοτεινή ψυχογραφία
            <br />
            στο φως της ποιητικής μνήμης
          </h2>
          <div className="w-[1px] h-32 bg-gradient-to-b from-gold via-transparent to-transparent mx-auto mt-12" />
        </motion.div>
      </div>
    </section>
  );
};

export default TransitionSection;
