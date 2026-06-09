import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

const services = [
  {
    title: 'بناء المباني',
    subtitle: 'مقاول مباني معتمد',
    image: '/images/service-building.jpg',
    size: 'large',
    href: '/services#building',
  },
  {
    title: 'اللياسة والمحارة',
    subtitle: 'جودة فائقة في التشطيب',
    image: '/images/service-plastering.jpg',
    size: 'medium',
    href: '/services#plastering',
  },
  {
    title: 'السباكة المعتمدة',
    subtitle: 'تركيبات صحية احترافية',
    image: '/images/service-plumbing.jpg',
    size: 'medium',
    href: '/plumbing-services',
  },
  {
    title: 'الكهرباء المعتمدة',
    subtitle: 'أنظمة كهربائية آمنة',
    image: '/images/service-electrical.jpg',
    size: 'medium',
    href: '/services#electrical',
  },
  {
    title: 'تركيب الرخام',
    subtitle: 'فخامة تدوم',
    image: '/images/service-marble.jpg',
    size: 'medium',
    href: '/services#marble',
  },
  {
    title: 'تركيب السيراميك',
    subtitle: 'دقة في كل بلاطة',
    image: '/images/service-ceramic.jpg',
    size: 'medium',
    href: '/services#ceramic',
  },
  {
    title: 'الجبسن بورد',
    subtitle: 'تصاميم سقفية مبتكرة',
    image: '/images/service-gypsum.jpg',
    size: 'medium',
    href: '/services#gypsum',
  },
  {
    title: 'التشطيبات الفاخرة',
    subtitle: 'حلول متكاملة',
    image: '/images/service-finishing.jpg',
    size: 'large',
    href: '/services#finishing',
  },
];

export default function ServicesGrid() {
  return (
    <section className="darak-section-padding bg-[var(--darak-offwhite)]" id="services">
      <div className="darak-container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="darak-gold-line mx-auto mb-5" />
          <h2 className="darak-heading-md text-[var(--darak-charcoal)] mb-4">
            خدماتنا <span className="text-[var(--darak-gold)]">الاحترافية</span>
          </h2>
          <p className="darak-body max-w-2xl mx-auto">
            نقدم مجموعة متكاملة من خدمات البناء والتشطيبات بأعلى معايير الجودة، 
            لنحول رؤيتك إلى واقع يفوق التوقعات.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 auto-rows-[280px]">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.href}
              className={`group relative overflow-hidden rounded-lg darak-card-hover ${
                service.size === 'large' 
                  ? 'md:col-span-2 md:row-span-2' 
                  : ''
              } ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--darak-charcoal)]/90 via-[var(--darak-charcoal)]/40 to-transparent" />
              
              {/* Gold accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--darak-gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
              
              {/* Content */}
              <div className="absolute bottom-0 right-0 left-0 p-6">
                <span className="text-[var(--darak-gold)] text-sm font-medium mb-1 block">
                  {service.subtitle}
                </span>
                <h3 className="text-white font-bold text-xl md:text-2xl mb-3">
                  {service.title}
                </h3>
                <div className="flex items-center gap-2 text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <span>اكتشف التفاصيل</span>
                  <ArrowLeft className="w-4 h-4" />
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/20 group-hover:border-[var(--darak-gold)] transition-colors duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
