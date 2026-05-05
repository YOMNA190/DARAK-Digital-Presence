import { Link } from 'react-router';
import { MapPin, Phone, Mail, Clock, ChevronLeft } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/services', label: 'خدماتنا' },
  { href: '/gallery', label: 'أعمالنا' },
  { href: '/contact', label: 'تواصل معنا' },
];

const services = [
  'بناء المباني',
  'لياسة ومحارة',
  'سباكة معتمدة',
  'كهرباء معتمدة',
  'تركيب رخام',
  'تركيب سيراميك',
  'جبسن بورد',
  'تشطيبات فاخرة',
];

export default function Footer() {
  return (
    <footer className="bg-[var(--darak-charcoal)] text-white">
      {/* Main Footer */}
      <div className="darak-container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[var(--darak-gold)] rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <span className="font-bold text-lg leading-none block">دارك</span>
                <span className="text-[10px] text-white/60 tracking-wider">للمقاولات</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              شركة دارك للمقاولات - شريكك الموثوق في البناء والتشطيبات الفاخرة بالمنطقة الشرقية. نقدم حلولاً متكاملة من الاستشارة حتى التسليم.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--darak-gold)] transition-colors cursor-pointer">
                <a href="https://www.facebook.com/share/18jLCi4uBL/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--darak-gold)] transition-colors cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </div>
              <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--darak-gold)] transition-colors cursor-pointer">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[var(--darak-gold)] font-bold text-sm mb-5 tracking-wide">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-[var(--darak-gold)] transition-colors text-sm flex items-center gap-1 group"
                  >
                    <ChevronLeft className="w-3 h-3 text-[var(--darak-gold)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[var(--darak-gold)] font-bold text-sm mb-5 tracking-wide">خدماتنا</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-white/70 text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[var(--darak-gold)] font-bold text-sm mb-5 tracking-wide">معلومات التواصل</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--darak-gold)] mt-0.5 shrink-0" />
                <span className="text-white/70 text-sm">الدمام - المنطقة الشرقية، المملكة العربية السعودية</span>
              </li>
              <li>
                <a href="tel:+966580369568" className="flex items-center gap-3 text-white/70 hover:text-[var(--darak-gold)] transition-colors text-sm">
                  <Phone className="w-4 h-4 text-[var(--darak-gold)] shrink-0" />
                  <span dir="ltr">+966 58 036 9568</span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--darak-gold)] shrink-0" />
                <a href="mailto:darak1907k@gmail.com" className="text-white/70 text-sm hover:text-[var(--darak-gold)] transition-colors">darak1907k@gmail.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[var(--darak-gold)] shrink-0" />
                <span className="text-white/70 text-sm">الأحد - الخميس: 8 ص - 6 م</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="darak-container mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-white/50 text-sm text-center md:text-right">
              شركة دارك للمقاولات. جميع الحقوق محفوظة.
            </p>
            <p className="text-white/50 text-sm text-center md:text-left">
              تصميم وتطوير بمعايير عالمية
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
