import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import PageHero from "@/components/PageHero";
import SimpleTextSection from "@/components/SimpleTextSection";
import LiteraryExperience from "@/components/LiteraryExperience";
import SeoHead from "@/components/SeoHead";
import SiteFooter from "@/components/SiteFooter";

const NovelPage = () => {
  return (
    <div className="novel-surface min-h-screen">
      <SeoHead
        title="Η Θηλυκή Σκιά Μου | Μυθιστόρημα Ιωάννης Κάλλας"
        description="Πληροφορίες για το μυθιστόρημα «Η Θηλυκή Σκιά Μου» του Ιωάννη Κάλλα, με θέματα ταυτότητας, πένθους, ψυχολογίας και ενδοσκόπησης."
        path="/thilyki-skia-mou"
      />
      <Navigation />
      <main>
        <PageHero
          eyebrow="ΜΥΘΙΣΤΟΡΗΜΑ"
          title="Η Θηλυκή Σκιά Μου"
          description="Μια ξεχωριστή σελίδα για το ψυχογραφικό μυθιστόρημα του Ιωάννη Κάλλα, με άξονες την ταυτότητα, το πένθος, τη μνήμη και τη σύγκρουση με τον κοινωνικό ρόλο."
        />

        <SimpleTextSection
          title="Σύνοψη του έργου"
          paragraphs={[
            "Το μυθιστόρημα ακολουθεί τον Άγγελο, έναν ήρωα που μεγαλώνει μέσα σε ένα περιβάλλον βαθιά επηρεασμένο από τη γυναικεία παρουσία, την προστασία και τη συναισθηματική αγωγή.",
            "Μετά τον θάνατο της μητέρας του, αυτός ο κόσμος παύει να λειτουργεί ως ασφαλές καταφύγιο και η εσωτερική του ισορροπία δοκιμάζεται. Η αναζήτηση ταυτότητας γίνεται πιο έντονη, πιο σωματική και πιο επώδυνη.",
            "Η στρατιωτική θητεία και η επαφή με έναν αυστηρά ανδρικό κόσμο αναγκάζουν τον ήρωα να επαναπροσδιορίσει την αυτοεικόνα του, να έρθει αντιμέτωπος με τον φόβο της απόρριψης και να κατανοήσει καλύτερα τη δική του ψυχική αλήθεια."
          ]}
        />

        <SimpleTextSection
          title="Κεντρικά θέματα"
          paragraphs={[
            "Η Θηλυκή Σκιά Μου εξερευνά τη σχέση ανάμεσα στη θηλυκότητα, την τρυφερότητα και την ψυχική αντοχή, μακριά από απλοϊκές αντιθέσεις ανάμεσα στο «ανδρικό» και το «γυναικείο».",
            "Το έργο αγγίζει το πένθος, τη μνήμη, τη διαμόρφωση της προσωπικότητας, τη διαφορετικότητα και το τραύμα που αφήνει το κοινωνικό βλέμμα επάνω σε έναν άνθρωπο που παλεύει να υπάρξει αυθεντικά.",
            "Στον πυρήνα του παραμένει ένα ερώτημα: τι συμβαίνει όταν η πιο τρυφερή πλευρά του εαυτού μας έρχεται σε σύγκρουση με τον ρόλο που ο κόσμος απαιτεί να υποδυθούμε;"
          ]}
        />

        <LiteraryExperience />

        <section className="pb-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-body text-lg text-muted-foreground mb-6">
              Μπορείτε επίσης να διαβάσετε για το ποίημα{" "}
              <Link to="/an-fygo" className="text-gold/70 hover:text-gold transition-colors underline decoration-gold/20">
                Αν Φύγω
              </Link>{" "}
              ή να δείτε το{" "}
              <Link to="/ioannis-kallas" className="text-gold/70 hover:text-gold transition-colors underline decoration-gold/20">
                βιογραφικό του Ιωάννη Κάλλα
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

export default NovelPage;
