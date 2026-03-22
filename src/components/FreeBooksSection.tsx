import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const books = [
  {
    title: "Η Θηλυκή Σκιά Μου – Μυθιστόρημα",
    text: "«Διαβάστε το βιβλίο δωρεάν εδώ.»",
    button: "Διαβάστε δωρεάν",
    link: "https://drive.google.com/file/d/1fqHChBznRkaK8h37z8MYu_9sEjTAjifR/view?usp=drivesdk",
  },
  {
    title: "Αν Φύγω – Ποίημα",
    text: "«Διαβάστε το έργο δωρεάν εδώ.»",
    button: "Διαβάστε δωρεάν",
    link: "https://drive.google.com/file/d/1iNfRN971WqfMv9-qTSoGOg-f38bL7mWQ/view?usp=drivesdk",
  },
];

const FreeBooksSection = () => {
  return (
    <section className="py-32 px-6 novel-surface">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-3xl md:text-4xl text-gold text-center mb-16 tracking-wide"
        >
          Διαβάστε τα βιβλία δωρεάν
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {books.map((book, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="border border-gold/20 rounded-lg p-8 bg-card/40 backdrop-blur-sm flex flex-col items-center text-center gap-6 hover:border-gold/40 transition-colors duration-500"
            >
              <BookOpen className="text-gold/70" size={36} strokeWidth={1.2} />
              <h3 className="font-display text-xl text-foreground tracking-wide">
                {book.title}
              </h3>
              <p className="font-body text-muted-foreground text-sm leading-relaxed">
                {book.text}
              </p>
              <a
                href={book.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block px-6 py-3 border border-gold/50 text-gold font-ui text-xs tracking-[0.2em] rounded hover:bg-gold/10 transition-colors duration-300"
              >
                {book.button}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreeBooksSection;
