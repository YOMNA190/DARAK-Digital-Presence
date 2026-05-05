import { useState } from 'react';
import { X, ZoomIn, Filter } from 'lucide-react';

const categories = ['الكل', 'تشطيب كامل', 'جبسن بورد', 'رخام وسيراميك', 'سباكة وكهرباء', 'بناء'];

const galleryItems = [
  {
    src: '/images/hero-villa.jpg',
    title: 'فيلا فاخرة - حي الشاطئ الدمام',
    category: 'تشطيب كامل',
  },
  {
    src: '/images/before-after.jpg',
    title: 'تحول فيلا سكنية - قبل وبعد',
    category: 'تشطيب كامل',
  },
  {
    src: '/images/service-gypsum.jpg',
    title: 'سقف جبسي مع إضاءة مخفية - الخبر',
    category: 'جبسن بورد',
  },
  {
    src: '/images/service-marble.jpg',
    title: 'تركيب رخام كرارة - مدخل فيلا',
    category: 'رخام وسيراميك',
  },
  {
    src: '/images/service-ceramic.jpg',
    title: 'تركيب سيراميك حمام - تصميم عصري',
    category: 'رخام وسيراميك',
  },
  {
    src: '/images/service-plumbing.jpg',
    title: 'تركيب سباكة معتمدة - غرفة معدات',
    category: 'سباكة وكهرباء',
  },
  {
    src: '/images/service-electrical.jpg',
    title: 'لوحة كهرباء حديثة - فيلا خاصة',
    category: 'سباكة وكهرباء',
  },
  {
    src: '/images/service-plastering.jpg',
    title: 'أعمال لياسة خارجية - الظهران',
    category: 'بناء',
  },
  {
    src: '/images/service-finishing.jpg',
    title: 'صالة استقبال فاخرة - الدمام',
    category: 'تشطيب كامل',
  },
  {
    src: '/images/service-building.jpg',
    title: 'مبنى سكني قيد الإنشاء - الخبر',
    category: 'بناء',
  },
  {
    src: '/images/team-supervisor.jpg',
    title: 'فريق الإشراف الهندسي - دارك',
    category: 'بناء',
  },
  {
    src: '/images/projects-map.jpg',
    title: 'خريطة مشاريعنا في المنطقة الشرقية',
    category: 'تشطيب كامل',
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('الكل');
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems = activeCategory === 'الكل'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <main>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 bg-[var(--darak-charcoal)]">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/service-finishing.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 darak-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="darak-gold-line mx-auto mb-5" />
          <h1 className="darak-heading-lg text-white mb-4">
            معرض <span className="text-[var(--darak-gold)]">أعمالنا</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            شاهد بعينيك جودة التنفيذ في مشاريعنا السكنية والتجارية بالمنطقة الشرقية.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="darak-section-padding bg-[var(--darak-offwhite)]">
        <div className="darak-container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            <Filter className="w-4 h-4 text-[var(--darak-charcoal-muted)] ml-2" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-[var(--darak-charcoal)] text-white'
                    : 'bg-white text-[var(--darak-charcoal-muted)] hover:bg-[var(--darak-charcoal)]/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map((item, index) => (
              <div
                key={item.src + index}
                className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--darak-charcoal)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                  <span className="text-[var(--darak-gold)] text-xs font-medium mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-bold text-sm">{item.title}</h3>
                </div>

                {/* Zoom Icon */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ZoomIn className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-[var(--darak-charcoal)]/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-4 text-center">
              <span className="text-[var(--darak-gold)] text-sm font-medium">{selectedImage.category}</span>
              <h3 className="text-white font-bold mt-1">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
