import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import NovelSection from "@/components/NovelSection";
import ThemesSection from "@/components/ThemesSection";
import LiteraryExperience from "@/components/LiteraryExperience";
import TransitionSection from "@/components/TransitionSection";
import PoetrySection from "@/components/PoetrySection";
import AuthorSection from "@/components/AuthorSection";
import JournalSection from "@/components/JournalSection";
import FreeBooksSection from "@/components/FreeBooksSection";
import SeoHead from "@/components/SeoHead";
import SiteFooter from "@/components/SiteFooter";

const Index = () => {
  return (
    <div className="novel-surface">
      <SeoHead
        title="Ιωάννης Κάλλας | Η Θηλυκή Σκιά Μου & Αν Φύγω"
        description="Ο επίσημος λογοτεχνικός ιστότοπος του Ιωάννη Κάλλα με το μυθιστόρημα «Η Θηλυκή Σκιά Μου», το ποίημα «Αν Φύγω» και πληροφορίες για το έργο και τη συγγραφική του ταυτότητα."
        path="/"
      />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:px-4 focus:py-2 focus:bg-background focus:text-gold focus:border focus:border-gold/50"
      >
        Μετάβαση στο περιεχόμενο
      </a>
      <Navigation />
      <main id="main-content">
        <HeroSection />
        <NovelSection />
        <ThemesSection />
        <LiteraryExperience />
        <TransitionSection />
        <PoetrySection />
        <AuthorSection />
        <FreeBooksSection />
        <JournalSection />
      </main>

      <SiteFooter />
    </div>
  );
};

export default Index;
