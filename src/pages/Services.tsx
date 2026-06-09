import { useEffect } from 'react';
import { Check, Phone, MessageSquare } from 'lucide-react';
import { Link } from 'react-router';

const services = [
  {
    id: 'building',
    title: 'بناء المباني',
    subtitle: 'مقاول مباني معتمد في الدمام والمنطقة الشرقية',
    image: '/images/service-building.jpg',
    description: 'نقدم خدمات البناء الشاملة للمباني السكنية والتجارية. من الأعمدة والأساسات حتى الهيكل الخرساني، نضمن متانة وبنية تحتية قوية تدوم لأجيال.',
    features: [
      'بناء فلل سكنية فاخرة',
      'مباني تجارية وإدارية',
      'ملاحق خارجية ومجالس',
      'إصلاحات هيكلية وتقوية',
      'إشراف هندسي يومي',
      'شهادات جودة معتمدة',
    ],
  },
  {
    id: 'plastering',
    title: 'اللياسة والمحارة',
    subtitle: 'تشطيبات خارجية وداخلية بجودة فائقة',
    image: '/images/service-plastering.jpg',
    description: 'أعمال اللياسة والمحارة بأعلى دقة، نستخدم مواد أوروبية ومحلية ممتازة لضمان نعومة السطح ومقاومته للعوامل الجوية.',
    features: [
      'لياسة خارجية وداخلية',
      'محارة بأنواعها',
      'أرضيات سايبورغ',
      'معالجة الشروخ',
      'عزل رطوبة',
      'تشطيب نهاري دقيق',
    ],
  },
  {
    id: 'plumbing',
    title: 'السباكة المعتمدة',
    subtitle: 'تركيبات صحية احترافية مع ضمان شامل',
    image: '/images/service-plumbing.jpg',
    description: 'فريق سباكة معتمد ومرخص يقدم حلولاً متكاملة لأنظمة المياه والصرف الصحي. نستخدم مواد أوروبية عالية الجودة مع ضمان على جميع التركيبات.',
    features: [
      'تركيب شبكات المياه والصرف',
      'تركيب السخانات والمضخات',
      'أعمال الدفن والتأسيس',
      'صيانة وإصلاح التسربات',
      'تركيب خلاطات وإكسسوارات فاخرة',
      'اختبار ضغط وكشف تسربات',
    ],
  },
  {
    id: 'electrical',
    title: 'الكهرباء المعتمدة',
    subtitle: 'أنظمة كهربائية آمنة حسب معايير السعودية',
    image: '/images/service-electrical.jpg',
    description: 'كهربائيون معتمدون يقدمون تركيبات آمنة وموثوقة لجميع احتياجاتك الكهربائية. نلتزم بمعايير الهيئة السعودية للمواصفات والمقاييس.',
    features: [
      'تأسيس كهرباء كامل',
      'لوحات توزيع وعدادات',
      'إنارة داخلية وخارجية',
      'نظام SMART HOME',
      'تركيب مكيفات وتهوية',
      'صيانة كهربائية شاملة',
    ],
  },
  {
    id: 'marble',
    title: 'تركيب الرخام',
    subtitle: 'فخامة تدوم - رخام إيطالي وتركي وسعودي',
    image: '/images/service-marble.jpg',
    description: 'تركيب رخام بإتقان يضاهي المتاجر العالمية. نقدم تشكيلة واسعة من الرخام الإيطالي والتركي والسعودي بأسعار تنافسية.',
    features: [
      'رخام كرارة إيطالي',
      'رخام بوتشينو تركي',
      'جرانيت سعودي',
      'أونيكس وترافرتينو',
      'تصميم بوردرز وزخارف',
      'تلميع وصيانة دورية',
    ],
  },
  {
    id: 'ceramic',
    title: 'تركيب السيراميك',
    subtitle: 'دقة في كل بلاطة - خبراء تركيب سيراميك',
    image: '/images/service-ceramic.jpg',
    description: 'أعمال سيراميك وبورسلان بمستوى فني عالٍ. نضمن توازن المنسوب، توحيد الفواصل، وانسيابية التصميم في كل مساحة.',
    features: [
      'سيراميك أرضيات وحوائط',
      'بورسلان مقاسات كبيرة',
      'بلاط خارجي مقاوم',
      'زخارف وديكورات خاصة',
      'تركيب سكريد ومعالجة',
      'مواد لاصقة أوروبية',
    ],
  },
  {
    id: 'gypsum',
    title: 'الجبسن بورد',
    subtitle: 'تصاميم سقفية مبتكرة - جبسن بورد احترافي',
    image: '/images/service-gypsum.jpg',
    description: 'تصاميم جبسن بورد تناسب كل الأذواق، من الكلاسيكية العربية إلى العصرية المينيمالية. إضاءة مخفية، أشكال هندسية، وفنون ثلاثية الأبعاد.',
    features: [
      'أسقف معلقة متعددة المستويات',
      'جداريات تلفزيون جبسية',
      'فواصل غرف ديكورية',
      'إضاءة LED مخفية',
      'زخارف كلاسيكية وعصرية',
      'عزل صوتي حراري',
    ],
  },
  {
    id: 'finishing',
    title: 'التشطيبات الفاخرة',
    subtitle: 'حلول متكاملة من الألف إلى الياء',
    image: '/images/service-finishing.jpg',
    description: 'باقة التشطيب الشاملة التي تمنحك راحة البال. نتولى الإشراف الكامل على جميع الأعمال من التأسيس حتى التسليم النهائي.',
    features: [
      'إدارة مشروع متكاملة',
      'تنسيق بين جميع الأقسام',
      'تصاميم داخلية مخصصة',
      'اختيار مواد فاخرة',
      'جدول زمني ملتزم',
      'ضمان شامل 3 سنوات',
    ],
  },
];

export default function ServicesPage() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, []);

  const whatsappMessage = encodeURIComponent('السلام عليكم، أتواصل معكم من موقع شركة دارك للمقاولات. أرغب في الاستفسار عن إحدى خدماتكم.');
  const whatsappUrl = `https://wa.me/966580369568?text=${whatsappMessage}`;

  return (
    <main>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 bg-[var(--darak-charcoal)]">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/service-building.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 darak-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="darak-gold-line mx-auto mb-5" />
          <h1 className="darak-heading-lg text-white mb-4">
            خدمات <span className="text-[var(--darak-gold)]">دارك</span> الشاملة
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            نقدم مجموعة متكاملة من خدمات البناء والتشطيبات بأعلى معايير الجودة في الدمام والمنطقة الشرقية.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 bg-white">
        <div className="darak-container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative rounded-lg overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-80 lg:h-96 object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-[var(--darak-gold)] text-white text-sm font-bold px-4 py-2 rounded">
                  {service.id === 'building' || service.id === 'finishing' ? 'خدمة شاملة' : 'خدمة متخصصة'}
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="text-[var(--darak-gold)] font-semibold text-sm mb-2 block">
                  {service.subtitle}
                </span>
                <h2 className="darak-heading-md text-[var(--darak-charcoal)] mb-4">
                  {service.title}
                </h2>
                <p className="text-[var(--darak-charcoal-muted)] leading-relaxed mb-6">
                  {service.description}
                </p>
                {service.id === 'plumbing' && (
                  <Link
                    to="/plumbing-services"
                    className="inline-block mb-6 text-[var(--darak-gold)] font-bold hover:underline"
                  >
                    عرض صفحة الخدمة المتكاملة (SEO) ←
                  </Link>
                )}

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-[var(--darak-gold)]/10 rounded-full flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-[var(--darak-gold)]" />
                      </div>
                      <span className="text-[var(--darak-charcoal)] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-sm text-sm font-semibold transition-all inline-flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    استفسر عبر واتساب
                  </a>
                  <a
                    href="tel:+966580369568"
                    className="inline-flex items-center gap-2 text-[var(--darak-charcoal)] border border-gray-200 hover:border-[var(--darak-gold)] hover:text-[var(--darak-gold)] px-5 py-2.5 rounded-sm text-sm font-semibold transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    اتصل الآن
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
