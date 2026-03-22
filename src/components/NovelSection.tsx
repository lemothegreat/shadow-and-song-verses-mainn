import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const NovelSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="novel"
      className="py-32 md:py-48 px-6"
      ref={ref}
      aria-label="Μυθιστόρημα – Η Θηλυκή Σκιά Μου"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="grid md:grid-cols-2 gap-16 md:gap-24 items-start"
        >
          <article>
            <p className="font-ui text-[10px] text-gold mb-6 tracking-widest">
              ΜΥΘΙΣΤΟΡΗΜΑ
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-10 leading-tight">
              Η Θηλυκή
              <br />
              Σκιά Μου
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg max-w-[55ch]">
              <p>
                Ο Άγγελος μεγαλώνει σε ένα σπίτι διαμορφωμένο εξ ολοκλήρου από γυναίκες —
                μια λεσβία μητέρα και οι στενότερες φίλες της. Η ταυτότητά του σχηματίζεται
                μέσα σ' έναν κόσμο γυναικείας αγάπης και επιρροής.
              </p>
              <p>
                Μετά τον θάνατο της μητέρας του, ο προστατευτικός αυτός κόσμος καταρρέει
                και η θηλυκή σκιά του αρχίζει να αναζητά έκφραση.
              </p>
              <p>
                Η στρατιωτική θητεία τον τοποθετεί για πρώτη φορά σε ένα αποκλειστικά
                ανδρικό περιβάλλον, όπου αντιμετωπίζει τον αρρενωπό κόσμο, τη διαφορετικότητα
                και την ταυτότητά του.
              </p>
              <p className="pt-4">
                <Link
                  to="/thilyki-skia-mou"
                  className="text-gold/70 hover:text-gold transition-colors underline decoration-gold/20"
                >
                  Δείτε την αναλυτική σελίδα του μυθιστορήματος
                </Link>
              </p>
            </div>
          </article>

          <motion.aside
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="relative"
            aria-label="Λογοτεχνικό απόσπασμα"
          >
            <div className="aspect-[3/4] bg-secondary/30 backdrop-blur-sm border border-border/20 flex items-center justify-center">
              <div className="p-12 text-center">
                <div
                  className="w-[1px] h-24 bg-gradient-to-b from-transparent via-gold to-transparent mx-auto mb-8"
                  aria-hidden="true"
                />
                <blockquote className="font-display text-2xl md:text-3xl font-light italic text-muted-foreground leading-relaxed">
                  «Εκεί που η σιωπή
                  <br />
                  συναντά
                  <br />
                  την ταυτότητα.»
                </blockquote>
                <div
                  className="w-[1px] h-24 bg-gradient-to-b from-gold via-transparent to-transparent mx-auto mt-8"
                  aria-hidden="true"
                />
              </div>
            </div>
            <div
              className="absolute -inset-1 bg-gradient-to-br from-purple-shadow/20 to-transparent -z-10 blur-2xl"
              aria-hidden="true"
            />
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
};

export default NovelSection;
