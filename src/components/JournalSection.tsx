import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const essays = [
  {
    title: "Η Ψυχολογία της Μνήμης",
    description: "Πώς η μνήμη διαμορφώνει την ταυτότητα και τις εσωτερικές αφηγήσεις μας.",
    category: "ΨΥΧΟΛΟΓΙΑ",
  },
  {
    title: "Η Λογοτεχνία ως Καταφύγιο",
    description: "Η λογοτεχνική γραφή ως θεραπευτική πράξη και χώρος ελευθερίας.",
    category: "ΛΟΓΟΤΕΧΝΙΑ",
  },
  {
    title: "Ταυτότητα και Ετερότητα",
    description: "Ο ρόλος της διαφορετικότητας στη δημιουργία νέων αφηγήσεων.",
    category: "ΤΑΥΤΟΤΗΤΑ",
  },
  {
    title: "Το Σώμα ως Αρχείο",
    description: "Πώς η σωματική εμπειρία αποθηκεύει τραύματα, αναμνήσεις και πόθους.",
    category: "ΑΝΘΡΩΠΙΝΗ ΦΥΣΗ",
  },
  {
    title: "Η Σιωπή ως Γλώσσα",
    description: "Οι αθέατες επικοινωνίες μεταξύ ψυχικών κόσμων.",
    category: "ΨΥΧΟΛΟΓΙΑ",
  },
  {
    title: "Η Ποίηση του Εγκλεισμού",
    description: "Λογοτεχνικές αναπαραστάσεις της ψυχιατρικής εμπειρίας.",
    category: "ΛΟΓΟΤΕΧΝΙΑ",
  },
];

const JournalSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journal" className="py-32 md:py-48 px-6 novel-surface" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <p className="font-ui text-[10px] text-gold mb-6 tracking-widest">
            ΛΟΓΟΤΕΧΝΙΚΟ ΗΜΕΡΟΛΟΓΙΟ
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light">
            Δοκίμια & Στοχασμοί
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {essays.map((essay, i) => (
            <motion.article
              key={essay.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.12 * i }}
              className="group cursor-default"
            >
              <p className="font-ui text-[9px] text-gold/50 mb-4 tracking-widest">
                {essay.category}
              </p>
              <h3 className="font-display text-2xl font-light mb-3 group-hover:text-gold transition-colors duration-700">
                {essay.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {essay.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
