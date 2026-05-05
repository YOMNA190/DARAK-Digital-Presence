import { MapPin, Building, Home, Landmark } from 'lucide-react';

const areas = [
  {
    name: 'الشاطئ',
    nameEn: 'Al-Shatea',
    description: 'حي سكني فاخر يضم فيلات وفلل مميزة بإطلالات بحرية رائعة.',
    icon: Home,
    projects: 32,
    highlight: true,
  },
  {
    name: 'الفرسان',
    nameEn: 'Al-Fursan',
    description: 'منطقة حديثة النمو بتصاميم عصرية ومتطلبات تشطيب عالية.',
    icon: Building,
    projects: 28,
    highlight: false,
  },
  {
    name: 'الخبر',
    nameEn: 'Khobar',
    description: 'مدينة ساحلية راقية تتطلب تشطيبات فاخرة لمشاريع سكنية وتجارية.',
    icon: Landmark,
    projects: 45,
    highlight: true,
  },
  {
    name: 'الظهران',
    nameEn: 'Dhahran',
    description: 'منطقة استراتيجية بمشاريع سكنية متنوعة لأسر الموظفين والتنفيذيين.',
    icon: Home,
    projects: 21,
    highlight: false,
  },
];

export default function ProjectsMap() {
  return (
    <section className="darak-section-padding bg-[var(--darak-charcoal)] text-white" id="areas">
      <div className="darak-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/images/projects-map.jpg"
                alt="خريطة مشاريع دارك في المنطقة الشرقية - الدمام، الخبر، الظهران، الشاطئ"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--darak-charcoal)]/60 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-[var(--darak-gold)] text-white px-6 py-4 rounded-lg shadow-xl">
              <div className="text-2xl font-bold">150+</div>
              <div className="text-sm opacity-90">مشروع منجز</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <div className="darak-gold-line mb-5" />
            <h2 className="darak-heading-md text-white mb-4">
              نخدم <span className="text-[var(--darak-gold)]">المنطقة الشرقية</span>
            </h2>
            <p className="text-white/70 leading-relaxed mb-8">
              حضورنا قوي في أرقى أحياء الدمام والخبر والظهران. نفخر بأن مشاريعنا تشكل جزءاً من 
              النسيج العمراني للمنطقة الشرقية، حيث نقدم حلولاً تناسب كل حي وكل رؤية.
            </p>

            {/* Areas Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {areas.map((area) => (
                <div
                  key={area.name}
                  className={`p-5 rounded-lg transition-all duration-300 ${
                    area.highlight
                      ? 'bg-[var(--darak-gold)]/10 border border-[var(--darak-gold)]/30'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                      area.highlight ? 'bg-[var(--darak-gold)]' : 'bg-white/10'
                    }`}>
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{area.name}</h4>
                      <span className="text-white/40 text-xs block mb-2">{area.nameEn}</span>
                      <p className="text-white/60 text-sm leading-relaxed">{area.description}</p>
                      <div className="mt-3 flex items-center gap-2">
                        <area.icon className="w-3.5 h-3.5 text-[var(--darak-gold)]" />
                        <span className="text-[var(--darak-gold)] text-sm font-semibold">
                          {area.projects} مشروع
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
