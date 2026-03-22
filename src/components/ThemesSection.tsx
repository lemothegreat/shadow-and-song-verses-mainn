import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const themes = [
  {
    title: "Ταυτότητα & Φύλο",
    description: "Η αναζήτηση του εαυτού μέσα από τα κοινωνικά πλαίσια του φύλου και της σεξουαλικότητας.",
  },
  {
    title: "Η Εσωτερική Θηλυκότητα",
    description: "Η θηλυκή πλευρά του ανδρικού ψυχισμού ως πηγή δύναμης και ευαλωτότητας.",
  },
  {
    title: "Μητρική Επιρροή",
    description: "Ο ρόλος της μητέρας στη διαμόρφωση ψυχολογικών δομών και εσωτερικών κόσμων.",
  },
  {
    title: "Πένθος & Απώλεια",
    description: "Ο θάνατος ως κατάρρευση ενός ολόκληρου ψυχικού οικοδομήματος.",
  },
  {
    title: "Ψυχολογική Αυτογνωσία",
    description: "Η εσωτερική πορεία από τη σύγχυση στη συμφιλίωση με τον εαυτό.",
  },
];

const ThemesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="themes" className="py-32 md:py-48 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <p className="font-ui text-[10px] text-gold mb-6 tracking-widest">
            ΘΕΜΑΤΟΛΟΓΙΑ
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light">
            Ψυχογραφικοί Άξονες
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 * i }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px hsla(270,50%,15%,0.3)" }}
              className="theme-card cursor-default"
            >
              <p className="font-ui text-[9px] text-gold mb-4 tracking-widest">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display text-2xl font-light mb-4">
                {theme.title}
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed">
                {theme.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThemesSection;
