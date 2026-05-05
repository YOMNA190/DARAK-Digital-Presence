import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/services', label: 'خدماتنا' },
  { href: '/gallery', label: 'أعمالنا' },
  { href: '/contact', label: 'تواصل معنا' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="darak-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[var(--darak-charcoal)] rounded-sm flex items-center justify-center group-hover:bg-[var(--darak-gold)] transition-colors duration-300">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-none transition-colors duration-300 ${isScrolled ? 'text-[var(--darak-charcoal)]' : 'text-white'}`}>
                دارك
              </span>
              <span className={`text-[10px] font-medium tracking-wider transition-colors duration-300 ${isScrolled ? 'text-[var(--darak-charcoal-muted)]' : 'text-white/70'}`}>
                للمقاولات
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-300 hover:text-[var(--darak-gold)] ${
                  location.pathname === link.href
                    ? 'text-[var(--darak-gold)]'
                    : isScrolled
                    ? 'text-[var(--darak-charcoal)]'
                    : 'text-white/90'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+966580369568"
              className={`flex items-center gap-2 text-sm font-semibold transition-colors duration-300 ${
                isScrolled ? 'text-[var(--darak-charcoal)]' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>0580369568</span>
            </a>
            <Link
              to="/contact"
              className="darak-btn-primary text-sm py-2.5 px-5"
            >
              استشارة مجانية
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled ? 'text-[var(--darak-charcoal)]' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`block py-2 text-base font-medium transition-colors ${
                location.pathname === link.href
                  ? 'text-[var(--darak-gold)]'
                  : 'text-[var(--darak-charcoal)] hover:text-[var(--darak-gold)]'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100">
            <a href="tel:+966580369568" className="flex items-center gap-2 text-[var(--darak-charcoal)] font-semibold py-2">
              <Phone className="w-4 h-4 text-[var(--darak-gold)]" />
              0580369568
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
