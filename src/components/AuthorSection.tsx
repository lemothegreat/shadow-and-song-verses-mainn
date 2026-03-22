import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

const AuthorSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="author"
      className="py-32 md:py-48 px-6 novel-surface"
      ref={ref}
      aria-label="Ο συγγραφέας Ιωάννης Κάλλας"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5 }}
        >
          <p className="font-ui text-[10px] text-gold/60 mb-12 tracking-[0.3em]">
            ΣΥΓΓΡΑΦΕΑΣ
          </p>

          <h2 className="font-display text-6xl md:text-8xl font-light tracking-tighter mb-16">
            Ιωάννης
            <br />
            Κάλλας
          </h2>

          <div className="w-16 h-[1px] bg-gold/30 mx-auto mb-12" aria-hidden="true" />

          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Συγγραφέας και ερευνητής με ενδιαφέρον για την ψυχολογία,
            την ταυτότητα, τις ανθρώπινες σχέσεις και την πολιτιστική εμπειρία.
            Τα έργα του εξερευνούν τη σύνδεση μεταξύ{" "}
            <Link to="/thilyki-skia-mou" className="text-gold/70 hover:text-gold transition-colors underline decoration-gold/20">
              μυθιστορήματος
            </Link>
            ,{" "}
            <Link to="/an-fygo" className="text-gold/70 hover:text-gold transition-colors underline decoration-gold/20">
              ποίησης
            </Link>{" "}
            και ψυχολογικής αυτογνωσίας.
          </p>

          <p className="mt-8">
            <Link
              to="/ioannis-kallas"
              className="text-gold/70 hover:text-gold transition-colors underline decoration-gold/20"
            >
              Διαβάστε το αναλυτικό βιογραφικό και τα έργα
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorSection;
