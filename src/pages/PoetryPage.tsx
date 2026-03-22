import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import SimpleTextSection from "@/components/SimpleTextSection";
import PoetrySection from "@/components/PoetrySection";
import SeoHead from "@/components/SeoHead";
import SiteFooter from "@/components/SiteFooter";

const PoetryPage = () => {
  return (
    <div className="novel-surface min-h-screen">
      <SeoHead
        title="Αν Φύγω | Ποίημα Ιωάννης Κάλλας"
        description="Πληροφορίες για το ποίημα «Αν Φύγω» του Ιωάννη Κάλλα, ένα έργο για τον πόνο, την απομόνωση, τη μνήμη και την ανθρώπινη αξιοπρέπεια."
        path="/an-fygo"
      />
      <Navigation />
      <main>
        <PageHero
          eyebrow="ΠΟΙΗΤΙΚΟ ΕΡΓΟ"
          title="Αν Φύγω"
          description="Μια ξεχωριστή σελίδα για το ποιητικό έργο του Ιωάννη Κάλλα, αφιερωμένο στη μνήμη, την απομόνωση, τον εγκλεισμό και την ανθρώπινη αξιοπρέπεια."
        />

        <SimpleTextSection
          title="Για το ποίημα"
          paragraphs={[
            "Το Αν Φύγω είναι ένα ποιητικό έργο που προσεγγίζει την εσωτερική εμπειρία ενός ανθρώπου που ζει στο περιθώριο, υπό το βάρος της σιωπής, της εγκατάλειψης και της κοινωνικής αποξένωσης.",
            "Μέσα από μια γλώσσα λιτή αλλά έντονα φορτισμένη, το ποίημα επιχειρεί να μεταφέρει θραύσματα μνήμης, εικόνες εγκλεισμού και ερωτήματα γύρω από την αξία της ανθρώπινης παρουσίας.",
            "Η αφιέρωση στον Σεβαστιανό προσδίδει στο έργο ιστορική και συναισθηματική βαρύτητα, ενώ το ποίημα λειτουργεί και ως πράξη μνήμης απέναντι σε ζωές που έμειναν αόρατες."
          ]}
        />

        <PoetrySection />

        <section className="pb-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-body text-lg text-muted-foreground mb-6">
              Για περισσότερα, δείτε και το μυθιστόρημα{" "}
              <Link to="/thilyki-skia-mou" className="text-gold/70 hover:text-gold transition-colors underline decoration-gold/20">
                Η Θηλυκή Σκιά Μου
              </Link>{" "}
              ή το{" "}
              <Link to="/ioannis-kallas" className="text-gold/70 hover:text-gold transition-colors underline decoration-gold/20">
                βιογραφικό του συγγραφέα
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

export default PoetryPage;
