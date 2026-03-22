import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const poemLines = [
  "Δεν θυμάμαι πότε ήρθα εδώ.",
  "Θυμάμαι μόνο τη σιωπή.",
  "Τους τοίχους που μιλούσαν αντί για μένα.",
  "Τα χέρια που δεν μ' άγγιξαν ποτέ με τρυφερότητα.",
  "",
  "Αν φύγω,",
  "θα πάρω μαζί μου μόνο",
  "τη μυρωδιά του υγρού τσιμέντου",
  "και τη σκιά ενός παραθύρου",
  "που δεν άνοιξε ποτέ αρκετά.",
  "",
  "Αν φύγω,",
  "μη ρωτήσετε πού πήγα.",
  "Ρωτήστε γιατί δεν μ' αφήσατε να μείνω",
  "ως άνθρωπος.",
];

const PoetrySection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="poetry"
      className="poetry-surface parchment-grain relative"
      aria-label="Ποιητικό έργο – Αν Φύγω"
    >
      <div className="confinement-bar" aria-hidden="true" />

      <div className="py-32 md:py-48 px-6" ref={ref}>
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5 }}
            className="text-center mb-24"
          >
            <p className="font-ui text-[10px] text-oxide/60 mb-8 tracking-[0.3em]">
              ΠΟΙΗΤΙΚΟ ΕΡΓΟ
            </p>
            <h2 className="font-display text-5xl md:text-7xl font-light text-parchment-fg tracking-tighter mb-8">
              Αν Φύγω
            </h2>
            <p className="font-body text-lg text-parchment-fg/60 italic max-w-xl mx-auto leading-relaxed">
              Αφιερωμένο στον Σεβαστιανό — έναν άνθρωπο που έζησε και νοσηλεύτηκε στο{" "}
              <a
                href="https://el.wikipedia.org/wiki/%CE%A8%CF%85%CF%87%CE%B9%CE%B1%CF%84%CF%81%CE%B5%CE%AF%CE%BF_%CE%9B%CE%AD%CF%81%CE%BF%CF%85"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-oxide/30 hover:decoration-oxide/60 transition-colors"
              >
                Ψυχιατρείο Λέρου
              </a>
              , δεκαετία 1980.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mb-24 text-center"
          >
            <p className="font-body text-base text-parchment-fg/50 max-w-2xl mx-auto leading-relaxed">
              Ένα ποιητικό υπερρεαλιστικό έργο αφιερωμένο στον Σεβαστιανό.
              Μέσα από την ποίηση, το έργο επιχειρεί να εισέλθει
              στον εσωτερικό του κόσμο και να ακούσει σκέψεις που δεν εκφράστηκαν ποτέ.
            </p>
            <p className="pt-6">
              <Link
                to="/an-fygo"
                className="underline decoration-oxide/30 hover:decoration-oxide/60 transition-colors text-parchment-fg/70"
              >
                Δείτε την αναλυτική σελίδα του ποιήματος
              </Link>
            </p>
          </motion.div>

          <div className="space-y-4 mb-24 pl-8 md:pl-16" role="article" aria-label="Ποίημα: Αν Φύγω">
            {poemLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={inView ? { opacity: 1, filter: "blur(0px)" } : {}}
                transition={{ duration: 1, delay: 0.5 + i * 0.12 }}
              >
                {line === "" ? (
                  <div className="h-8" aria-hidden="true" />
                ) : (
                  <p className="font-display text-xl md:text-2xl font-light text-parchment-fg/85 leading-relaxed">
                    {line}
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.5, delay: 2.5 }}
            className="py-20 text-center"
          >
            <blockquote className="font-display text-2xl md:text-3xl italic text-oxide/80 max-w-2xl mx-auto leading-relaxed">
              «Θραύσματα ενός μυαλού που προσπαθεί να δραπετεύσει
              από τον πόνο, την απομόνωση και την επιβεβλημένη σιωπή.»
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 3 }}
            className="flex flex-wrap justify-center gap-4 pt-12"
            role="list"
            aria-label="Θέματα ποιήματος"
          >
            {["Πόνος", "Απομόνωση", "Μνήμη", "Εγκλεισμός", "Αξιοπρέπεια", "Ελευθερία"].map(
              (theme) => (
                <span
                  key={theme}
                  className="font-ui text-[9px] px-4 py-2 border border-oxide/20 text-oxide/60 tracking-widest"
                  role="listitem"
                >
                  {theme}
                </span>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PoetrySection;
