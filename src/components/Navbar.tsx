import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Testimonials', to: '/testimonials' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          scrolled || !isHome
            ? 'bg-navy-900/98 shadow-xl backdrop-blur-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Alpha and Omega Logo"
              className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="hidden sm:block">
              <p className="text-white font-bold text-base leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>
                Alpha & Omega
              </p>
              <p className="text-gold-400 text-[10px] tracking-widest uppercase font-medium">
                Professional Accountants
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                  pathname === link.to
                    ? 'text-gold-400 bg-gold-500/10'
                    : 'text-stone-200 hover:text-gold-400 hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + burger */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+27795244298"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-gold-500 hover:bg-gold-400 text-white text-sm font-semibold rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <Phone size={14} />
              <span>Call Now</span>
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white hover:text-gold-400 transition-colors"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-navy-900 shadow-2xl p-6 flex flex-col animate-slide-right">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
                <span className="text-white font-bold text-sm">Alpha & Omega</span>
              </div>
              <button onClick={() => setMenuOpen(false)} className="text-white hover:text-gold-400">
                <X size={24} />
              </button>
            </div>
            <nav className="flex flex-col gap-1 flex-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    pathname === link.to
                      ? 'bg-gold-500/20 text-gold-400'
                      : 'text-stone-200 hover:bg-white/5 hover:text-gold-400'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <a
              href="tel:+27795244298"
              className="mt-4 flex items-center justify-center gap-2 w-full py-3 bg-gold-500 hover:bg-gold-400 text-white font-semibold rounded-lg"
            >
              <Phone size={16} /> Call +27 79 524 4298
            </a>
          </div>
        </div>
      )}
    </>
  );
}
