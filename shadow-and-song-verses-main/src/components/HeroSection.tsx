import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Εισαγωγή"
    >
      <div className="absolute inset-0">
        <img
          src="/hero.webp"
          alt="Κινηματογραφική σκιαγραφία που αναπαριστά την ταυτότητα και την ενδοσκόπηση – Η Θηλυκή Σκιά Μου"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
          fetchPriority="high"
          width={1200}
          height={675}
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter leading-[0.9] mb-8"
        >
          <span className="block font-ui text-[10px] text-gold mb-8 tracking-widest">
            ΙΩΑΝΝΗΣ ΚΑΛΛΑΣ
          </span>
          Η Θηλυκή
          <br />
          Σκιά Μου
          <span className="sr-only">
            {" "}
            — λογοτεχνία, μυθιστόρημα και ποίηση. Αν Φύγω.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Ένα ψυχογραφικό μυθιστόρημα για την ταυτότητα, το πένθος
          και τη θηλυκή πλευρά του ανδρικού ψυχισμού.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#literary" className="ghost-btn">
            Ανάγνωση Αποσπάσματος
          </a>
          <Link to="/thilyki-skia-mou" className="ghost-btn">
            Σελίδα Μυθιστορήματος
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;