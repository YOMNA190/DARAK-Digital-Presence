import { Link } from 'react-router';
import { ArrowLeft, Eye } from 'lucide-react';

const transformations = [
  {
    title: 'فيلا سكنية فاخرة - حي الشاطئ',
    category: 'تشطيب كامل',
    image: '/images/before-after.jpg',
    stats: { before: 'هيكل خام', after: 'تشطيب فاخر' },
    duration: '4 أشهر',
  },
  {
    title: 'شقة سكنية - الخبر',
    category: 'تجديد شامل',
    image: '/images/service-finishing.jpg',
    stats: { before: 'تشطيب قديم', after: 'تصميم عصري' },
    duration: '6 أسابيع',
  },
  {
    title: 'مكتب تجاري - الظهران',
    category: 'تشطيب تجاري',
    image: '/images/service-gypsum.jpg',
    stats: { before: 'مساحة خام', after: 'مكتب فاخر' },
    duration: '3 أشهر',
  },
];

export default function BeforeAfter() {
  return (
    <section className="darak-section-padding bg-white" id="transformations">
      <div className="darak-container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="darak-gold-line mb-5" />
            <h2 className="darak-heading-md text-[var(--darak-charcoal)] mb-3">
              قبل <span className="text-[var(--darak-gold)]">وبعد</span>
            </h2>
            <p className="darak-body max-w-xl">
              شاهد الفرق الذي نصنعه. تحولات حقيقية لمشاريع حقيقية في الدمام والمنطقة الشرقية.
            </p>
          </div>
          <Link
            to="/gallery"
            className="darak-btn-secondary mt-6 md:mt-0 self-start md:self-auto"
          >
            <span>معرض الأعمال الكامل</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>

        {/* Transformations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {transformations.map((item) => (
            <div
              key={item.title}
              className="group bg-[var(--darak-offwhite)] rounded-lg overflow-hidden darak-card-hover"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--darak-charcoal)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-[var(--darak-gold)] text-white text-xs font-bold px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-[var(--darak-charcoal)] mb-3 group-hover:text-[var(--darak-gold)] transition-colors">
                  {item.title}
                </h3>

                {/* Before/After Tags */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1.5 bg-red-50 text-red-600 text-xs font-medium px-2.5 py-1 rounded">
                    <span>قبل:</span>
                    <span>{item.stats.before}</span>
                  </div>
                  <ArrowLeft className="w-3 h-3 text-[var(--darak-charcoal-muted)]" />
                  <div className="flex items-center gap-1.5 bg-green-50 text-green-600 text-xs font-medium px-2.5 py-1 rounded">
                    <span>بعد:</span>
                    <span>{item.stats.after}</span>
                  </div>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-[var(--darak-charcoal-muted)] text-sm">
                  <div className="w-1.5 h-1.5 bg-[var(--darak-gold)] rounded-full" />
                  <span>مدة التنفيذ: {item.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
