import { Instagram, Facebook, Youtube, Music2 } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ioanniskallas.gr/",
    icon: Instagram,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ioanniskallas.gr/",
    icon: Music2,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@ioanniskallas/",
    icon: Youtube,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/ioannis.kallas.9",
    icon: Facebook,
  },
];

const SocialFooter = () => {
  return (
    <footer
      className="w-full py-16 px-6 mt-12 border-t border-white/10"
      style={{
        background:
          "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.6))",
      }}
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        
        {/* BRAND */}
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.35em] text-white/50 mb-3">
            Ιωάννης Κάλλας
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-white/95">
            Θηλυκή Σκιά
          </h2>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-8">
          {socialLinks.map(({ name, href, icon: Icon }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
              title={name}
              className="group flex items-center justify-center w-14 h-14 rounded-full border border-white/15 bg-white/5 text-white/80 backdrop-blur-sm transition-all duration-300 ease-out hover:scale-110 hover:text-[#d4af37] hover:border-[#d4af37]/40 hover:bg-white/10 hover:shadow-[0_0_22px_rgba(212,175,55,0.28)]"
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:scale-110" />
            </a>
          ))}
        </div>

        {/* SEO BACKLINK */}
        <div className="max-w-2xl">
          <p className="text-sm md:text-[15px] leading-relaxed text-white/50">
            Περισσότερα για το έργο και τη λογοτεχνική προσέγγιση του Ιωάννη
            Κάλλα μπορείτε να βρείτε στο{" "}
            <a
              href="https://ioanniskallas.blogspot.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/75 underline underline-offset-4 decoration-white/30 transition-all duration-300 hover:text-[#d4af37] hover:decoration-[#d4af37]"
            >
              προσωπικό του ημερολόγιο
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SocialFooter;
