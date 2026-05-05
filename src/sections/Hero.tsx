import { Link } from 'react-router';
import { ArrowLeft, Shield, Award, Clock } from 'lucide-react';

const stats = [
  { icon: Shield, value: '150+', label: 'مشروع منجز' },
  { icon: Award, value: '12+', label: 'سنة خبرة' },
  { icon: Clock, value: '98%', label: 'رضا العملاء' },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-villa.jpg"
          alt="فيلا فاخرة بمنطقة الدمام - شركة دارك للمقاولات"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 darak-gradient-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--darak-charcoal)]/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 darak-container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">متاحون للمشاريع الجديدة</span>
          </div>

          {/* Heading */}
          <h1 className="darak-heading-xl text-white mb-6 leading-[1.2]">
            نبني <span className="text-[var(--darak-gold)]">التميز</span>..
            <br />
            ونُحكم <span className="text-[var(--darak-gold)]">التفاصيل</span>
          </h1>

          {/* Subheading */}
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            شركة دارك للمقاولات - شريكك الموثوق في البناء والتشطيبات الفاخرة بالمنطقة الشرقية. 
            من الأحلام الخام إلى الواقع الفاخر.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link to="/contact" className="darak-btn-primary">
              <span>احصل على استشارة مجانية</span>
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 text-white border-b border-white/30 hover:border-[var(--darak-gold)] hover:text-[var(--darak-gold)] transition-colors pb-1">
              <span>تصفح خدماتنا</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-right">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <stat.icon className="w-5 h-5 text-[var(--darak-gold)]" />
                  <span className="text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                </div>
                <span className="text-white/60 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs">اكتشف المزيد</span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-2.5 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
