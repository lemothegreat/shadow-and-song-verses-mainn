import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import SimpleTextSection from "@/components/SimpleTextSection";
import AuthorSection from "@/components/AuthorSection";
import SeoHead from "@/components/SeoHead";
import SiteFooter from "@/components/SiteFooter";

const AuthorPage = () => {
  return (
    <div className="novel-surface min-h-screen">
      <SeoHead
        title="Ιωάννης Κάλλας | Βιογραφικό και Έργα"
        description="Βιογραφικό και παρουσίαση του έργου του Ιωάννη Κάλλα, με αναφορές στο μυθιστόρημα «Η Θηλυκή Σκιά Μου» και το ποίημα «Αν Φύγω»."
        path="/ioannis-kallas"
      />
      <Navigation />
      <main>
        <PageHero
          eyebrow="ΣΥΓΓΡΑΦΕΑΣ"
          title="Ιωάννης Κάλλας"
          description="Σελίδα αφιερωμένη στον συγγραφέα, με συνοπτικό βιογραφικό, βασικά θεματικά ενδιαφέροντα και συνδέσεις προς τα λογοτεχνικά του έργα."
        />

        <SimpleTextSection
          title="Βιογραφικό"
          paragraphs={[
            "Ο Ιωάννης Κάλλας είναι συγγραφέας με ενδιαφέρον για την ψυχολογία, την ταυτότητα, τη μνήμη και την εσωτερική εμπειρία του ανθρώπου απέναντι στην απώλεια και την κοινωνική πίεση.",
            "Το έργο του κινείται ανάμεσα στο μυθιστόρημα και την ποίηση, με σταθερό άξονα την προσπάθεια κατανόησης της ανθρώπινης ευαλωτότητας, της συναισθηματικής διαμόρφωσης και της αναζήτησης εαυτού.",
            "Η γραφή του εστιάζει στην ατμόσφαιρα, στην ψυχολογική ακρίβεια και στη σύνδεση της προσωπικής μνήμης με ευρύτερα ερωτήματα γύρω από τη σχέση, το τραύμα και την αξιοπρέπεια."
          ]}
        />

        <AuthorSection />

        <SimpleTextSection
          title="Βασικά έργα"
          paragraphs={[
            "Στο μυθιστόρημα Η Θηλυκή Σκιά Μου, το ενδιαφέρον στρέφεται στην ταυτότητα, το πένθος και στη δυσκολία συμβιβασμού ανάμεσα στην εσωτερική αλήθεια και στους κοινωνικούς ρόλους.",
            "Στο ποίημα Αν Φύγω, η γραφή λειτουργεί ως μαρτυρία για την απομόνωση, τον εγκλεισμό και την ανάγκη να παραμείνει ακέραιη η ανθρώπινη αξιοπρέπεια ακόμη και μέσα στη σιωπή."
          ]}
        />

        <section className="pb-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-body text-lg text-muted-foreground mb-6">
              Δείτε επίσης το{" "}
              <Link to="/thilyki-skia-mou" className="text-gold/70 hover:text-gold transition-colors underline decoration-gold/20">
                μυθιστόρημα Η Θηλυκή Σκιά Μου
              </Link>{" "}
              και το{" "}
              <Link to="/an-fygo" className="text-gold/70 hover:text-gold transition-colors underline decoration-gold/20">
                ποίημα Αν Φύγω
              </Link>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default AuthorPage;
