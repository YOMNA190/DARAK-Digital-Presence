import { Link } from 'react-router';
import { ArrowLeft, Phone, MessageSquare } from 'lucide-react';

export default function CTASection() {
  const whatsappMessage = encodeURIComponent(
    'السلام عليكم، أتواصل معكم من موقع شركة دارك للمقاولات. أرغب في الحصول على استشارة مجانية لمشروعي.'
  );
  const whatsappUrl = `https://wa.me/966580369568?text=${whatsappMessage}`;

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-villa.jpg"
          alt="خلفية دعوة للتواصل"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[var(--darak-charcoal)]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 darak-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="darak-gold-line mx-auto mb-5" />
          
          <h2 className="darak-heading-lg text-white mb-6">
            هل أنت جاهز لتحويل
            <span className="text-[var(--darak-gold)]"> رؤيتك </span>
            إلى واقع؟
          </h2>
          
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            احصل على استشارة مجانية من فريقنا المتخصص. نحن هنا للإجابة على استفساراتك وتقديم الحلول المثلى لمشروعك.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-sm font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <MessageSquare className="w-5 h-5" />
              <span>تواصل عبر واتساب</span>
            </a>
            
            <Link
              to="/contact"
              className="bg-[var(--darak-gold)] hover:bg-[var(--darak-gold-dark)] text-white px-8 py-4 rounded-sm font-semibold transition-all duration-300 hover:shadow-lg active:scale-95 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              <span>استشارة مجانية</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </div>

          {/* Phone */}
          <div className="mt-8 flex items-center justify-center gap-2 text-white/60">
            <Phone className="w-4 h-4" />
            <span>أو اتصل مباشرة:</span>
            <a href="tel:+966580369568" className="text-[var(--darak-gold)] font-semibold hover:underline" dir="ltr">
              +966 58 036 9568
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
