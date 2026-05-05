import { MessageSquare, FileText, HardHat, ClipboardCheck } from 'lucide-react';

const stages = [
  {
    number: '01',
    title: 'الاستشارة',
    description: 'نستمع لرؤيتك بدقة ونقدم استشارة فنية مجانية. نحلل احتياجاتك، نفهم ميزانيتك، ونقدم الحلول المثلى لمشروعك.',
    icon: MessageSquare,
    duration: 'يوم - 3 أيام',
  },
  {
    number: '02',
    title: 'التخطيط',
    description: 'نعد خطة عمل مفصلة تشمل الجدول الزمني، المواد المحددة، والميزانية الشفافة. كل تفصيل مدون قبل أن نبدأ.',
    icon: FileText,
    duration: '3 - 7 أيام',
  },
  {
    number: '03',
    title: 'التنفيذ',
    description: 'فريقنا المتخصص ينفذ العمل بإشراف يومي صارم. نلتزم بالمواعيد ونحافظ على أعلى معايير السلامة والجودة.',
    icon: HardHat,
    duration: 'حسب المشروع',
  },
  {
    number: '04',
    title: 'التسليم والجودة',
    description: 'فحص شامل لكل تفصيل، ضمان على الأعمال، وتسليم نظيف. نتركك بابتسامة وثقة تامة في جودة ما تم إنجازه.',
    icon: ClipboardCheck,
    duration: 'يوم - يومين',
  },
];

export default function Workflow() {
  return (
    <section className="darak-section-padding bg-white" id="workflow">
      <div className="darak-container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="darak-gold-line mx-auto mb-5" />
          <h2 className="darak-heading-md text-[var(--darak-charcoal)] mb-4">
            رحلة المشروع مع <span className="text-[var(--darak-gold)]">دارك</span>
          </h2>
          <p className="darak-body max-w-2xl mx-auto">
            عملية منظمة في 4 مراحل واضحة، تضمن لك الشفافية الكاملة والجودة المضمونة من البداية حتى التسليم.
          </p>
        </div>

        {/* Workflow Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-gradient-to-r from-transparent via-[var(--darak-gold)] to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stages.map((stage, index) => (
              <div
                key={stage.number}
                className="relative group"
              >
                <div className="bg-[var(--darak-offwhite)] rounded-lg p-8 h-full transition-all duration-500 hover:bg-white hover:shadow-xl border border-transparent hover:border-[var(--darak-gold)]/20">
                  {/* Number Badge */}
                  <div className="absolute -top-4 right-8 w-10 h-10 bg-[var(--darak-gold)] text-white font-bold rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {stage.number}
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-[var(--darak-charcoal)] rounded-lg flex items-center justify-center mb-5 mt-4 group-hover:bg-[var(--darak-gold)] transition-colors duration-500">
                    <stage.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[var(--darak-charcoal)] mb-3">
                    {stage.title}
                  </h3>
                  <p className="text-[var(--darak-charcoal-muted)] text-sm leading-relaxed mb-4">
                    {stage.description}
                  </p>

                  {/* Duration */}
                  <div className="inline-flex items-center gap-2 bg-white border border-gray-100 rounded-full px-3 py-1.5">
                    <div className="w-1.5 h-1.5 bg-[var(--darak-gold)] rounded-full" />
                    <span className="text-xs text-[var(--darak-charcoal-muted)] font-medium">
                      {stage.duration}
                    </span>
                  </div>
                </div>

                {/* Arrow for mobile */}
                {index < stages.length - 1 && (
                  <div className="lg:hidden flex justify-center py-4">
                    <div className="w-6 h-6 border-b-2 border-r-2 border-[var(--darak-gold)] rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
