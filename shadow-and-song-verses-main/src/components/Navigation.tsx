import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const homeNavItems = [
  { href: "#hero", label: "Αρχική" },
  { href: "#novel", label: "Μυθιστόρημα" },
  { href: "#themes", label: "Θέματα" },
  { href: "#poetry", label: "Ποίηση" },
  { href: "#author", label: "Συγγραφέας" },
  { href: "#journal", label: "Ημερολόγιο" },
];

const pageNavItems = [
  { to: "/", label: "Αρχική" },
  { to: "/thilyki-skia-mou", label: "Μυθιστόρημα" },
  { to: "/an-fygo", label: "Ποίηση" },
  { to: "/ioannis-kallas", label: "Συγγραφέας" },
];

const Navigation = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/30" : ""
      }`}
      role="banner"
    >
      <nav
        aria-label="Κύρια πλοήγηση"
        className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between"
      >
        <Link
          to="/"
          className="font-display text-xl tracking-tight text-foreground"
          aria-label="Ιωάννης Κάλλας – Αρχική"
        >
          Ι.Κ.
        </Link>

        <div className="hidden md:flex items-center gap-8" role="list">
          {isHome
            ? homeNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-ui text-[10px] text-muted-foreground hover:text-gold transition-colors duration-500"
                  role="listitem"
                >
                  {item.label}
                </a>
              ))
            : pageNavItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="font-ui text-[10px] text-muted-foreground hover:text-gold transition-colors duration-500"
                  role="listitem"
                >
                  {item.label}
                </Link>
              ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden font-ui text-[10px] text-muted-foreground"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
        >
          {menuOpen ? "ΚΛΕΙΣΙΜΟ" : "ΜΕΝΟΥ"}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.6 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/20"
            role="navigation"
            aria-label="Μενού κινητού"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {isHome
                ? homeNavItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="font-ui text-xs text-muted-foreground hover:text-gold transition-colors duration-500 text-left"
                    >
                      {item.label}
                    </a>
                  ))
                : pageNavItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setMenuOpen(false)}
                      className="font-ui text-xs text-muted-foreground hover:text-gold transition-colors duration-500 text-left"
                    >
                      {item.label}
                    </Link>
                  ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navigation;
