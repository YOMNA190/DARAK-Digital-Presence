import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'أحمد العتيبي',
    role: 'مالك فيلا - حي الشاطئ',
    rating: 5,
    text: 'تعاملت مع شركة دارك لتشطيب فيلتي، والصراحة النتيجة فاقت كل توقعاتي. الالتزام بالمواعيد، النظافة أثناء العمل، والجودة في التفاصيل الصغيرة كلها ميزتهم. أنصح بهم بقوة.',
    project: 'تشطيب فيلا فاخرة',
  },
  {
    name: 'خالد الدوسري',
    role: 'صاحب شركة - الخبر',
    rating: 5,
    text: 'فريق محترف جداً. نفذوا لي مقر الشركة الجديد من الألف إلى الياء. التصاميم الداخلية، الجبسن بورد، الإنارة، كل شيء كان على أعلى مستوى. بالتأكيد سأتعامل معهم مجدداً.',
    project: 'تصميم وتنفيذ مقر شركة',
  },
  {
    name: 'محمد القحطاني',
    role: 'مالك عقارات - الظهران',
    rating: 5,
    text: 'أتعامل مع دارك من 3 سنوات في مشاريع متعددة. ما يميزهم الشفافية في التسعير والالتزام الصارم بالجدول الزمني. فريق موثوق 100%.',
    project: 'إدارة مشاريع متعددة',
  },
  {
    name: 'سلطان المالكي',
    role: 'مهندس معماري - الدمام',
    rating: 5,
    text: 'كمهندس معماري، أعمل مع العديد من المقاولين. دارك من أفضل الفرق اللي تعاملت معهم. يفهمون الرسومات الهندسية بدقة وينفذونها بحرفية عالية.',
    project: 'تنفيذ تصاميم معمارية',
  },
];

export default function Testimonials() {
  return (
    <section className="darak-section-padding bg-[var(--darak-offwhite)]" id="testimonials">
      <div className="darak-container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="darak-gold-line mx-auto mb-5" />
          <h2 className="darak-heading-md text-[var(--darak-charcoal)] mb-4">
            شهادات <span className="text-[var(--darak-gold)]">عملائنا</span>
          </h2>
          <p className="darak-body max-w-2xl mx-auto">
            نفخر بثقة مئات العملاء في الدمام والمنطقة الشرقية. كل مشروع هو علاقة طويلة الأمد.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-white rounded-lg p-8 shadow-sm hover:shadow-xl transition-all duration-500 ${
                index % 2 === 0 ? 'md:translate-y-0' : 'md:translate-y-4'
              }`}
            >
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-[var(--darak-gold)]/10 rounded-lg flex items-center justify-center mb-5">
                <Quote className="w-5 h-5 text-[var(--darak-gold)]" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[var(--darak-gold)] text-[var(--darak-gold)]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[var(--darak-charcoal)] leading-relaxed mb-6 text-sm md:text-base">
                "{testimonial.text}"
              </p>

              {/* Project Badge */}
              <div className="inline-block bg-[var(--darak-offwhite)] text-[var(--darak-charcoal-muted)] text-xs font-medium px-3 py-1 rounded-full mb-4">
                {testimonial.project}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className="w-10 h-10 bg-[var(--darak-charcoal)] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-[var(--darak-charcoal)] text-sm">
                    {testimonial.name}
                  </div>
                  <div className="text-[var(--darak-charcoal-muted)] text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
