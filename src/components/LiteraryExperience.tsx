import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const excerpts = [
  {
    type: "excerpt" as const,
    label: "ΑΠΟΣΠΑΣΜΑ",
    text: "Η μητέρα μου δεν με δίδαξε πώς να γίνω άντρας. Με δίδαξε πώς να νιώθω — και αυτό ήταν η μεγαλύτερη δύναμη που μπορούσε να μου δώσει.",
  },
  {
    type: "quote" as const,
    label: "ΛΟΓΟΤΕΧΝΙΚΟ ΑΠΟΦΘΕΓΜΑ",
    text: "Η θηλυκότητα δεν είναι αδυναμία. Είναι η τόλμη να αγγίξεις τον πόνο χωρίς να τρέξεις μακριά.",
  },
  {
    type: "reflection" as const,
    label: "ΨΥΧΟΛΟΓΙΚΗ ΕΡΜΗΝΕΙΑ",
    text: "Η σκιά, κατά τον Γιουνγκ, είναι το κομμάτι μας που αρνούμαστε. Για τον Άγγελο, η σκιά δεν είναι σκοτεινή — είναι φωτεινή, θηλυκή, τρυφερή.",
  },
  {
    type: "memory" as const,
    label: "ΑΝΑΜΝΗΣΗ & ΤΑΥΤΟΤΗΤΑ",
    text: "Θυμάμαι τα χέρια της πάνω στα μαλλιά μου. Τη μυρωδιά του καφέ τα πρωινά. Τη σιωπή που δεν ήταν ποτέ άδεια. Ήταν γεμάτη μ' εκείνη.",
  },
];

const LiteraryExperience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="literary"
      className="py-32 md:py-48 px-6"
      ref={ref}
      aria-label="Λογοτεχνική εμπειρία – Αποσπάσματα και στοχασμοί"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.2 }}
          className="text-center mb-24"
        >
          <p className="font-ui text-[10px] text-gold mb-6 tracking-widest">
            ΛΟΓΟΤΕΧΝΙΚΗ ΕΜΠΕΙΡΙΑ
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-light">
            Φωνές από το Βιβλίο
          </h2>
        </motion.div>

        <div className="space-y-24">
          {excerpts.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.2 * i }}
              className="relative"
            >
              <p className="font-ui text-[9px] text-gold mb-6 tracking-widest">
                {item.label}
              </p>
              <div className="border-l border-gold/20 pl-8 md:pl-12">
                <blockquote
                  className="font-display text-2xl md:text-3xl font-light italic leading-relaxed text-foreground/90"
                  cite="Η Θηλυκή Σκιά Μου – Ιωάννης Κάλλας"
                >
                  «{item.text}»
                </blockquote>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiteraryExperience;
