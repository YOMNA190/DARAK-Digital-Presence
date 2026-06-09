import { Check, Phone, MessageSquare, Shield, Clock, Award, Droplets, Search, PenTool as Tool, Waves } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEO from '@/components/SEO';

const features = [
  {
    title: 'فنيون معتمدون',
    description: 'فريق عمل مدرب ومعتمد من الهيئة السعودية للمقاولين.',
    icon: Award,
  },
  {
    title: 'ضمان 3 سنوات',
    description: 'نقدم ضماناً مكتوباً على جميع أعمال التأسيس والتركيب.',
    icon: Shield,
  },
  {
    title: 'استجابة سريعة',
    description: 'نصلك خلال 4 ساعات كحد أقصى في حالات الطوارئ.',
    icon: Clock,
  },
];

const subServices = [
  {
    title: 'تأسيس السباكة',
    description: 'تأسيس شبكات المياه والصرف الصحي للمباني الجديدة والفلل بأعلى المعايير.',
    icon: Tool,
  },
  {
    title: 'كشف التسربات',
    description: 'استخدام أحدث الأجهزة الإلكترونية لكشف تسربات المياه بدون تكسير.',
    icon: Search,
  },
  {
    title: 'صيانة السباكة',
    description: 'إصلاح جميع أعطال السباكة، الحنفيات، السخانات، والمحابس.',
    icon: Droplets,
  },
  {
    title: 'تركيب الأدوات الصحية',
    description: 'تركيب أطقم الحمامات، المغاسل، والجاكوزي بدقة واحترافية.',
    icon: Waves,
  },
];

const faqs = [
  {
    question: 'هل تقدمون ضماناً على أعمال السباكة؟',
    answer: 'نعم، شركة دارك تقدم ضماناً يصل إلى 3 سنوات على جميع أعمال التأسيس والتركيب لضمان راحة بالك.',
  },
  {
    question: 'كم يستغرق وصول الفني في حالات الطوارئ؟',
    answer: 'نلتزم بالاستجابة السريعة والوصول إليك خلال 4 ساعات كحد أقصى داخل الدمام والخبر والظهران.',
  },
  {
    question: 'هل الفنيون لديكم معتمدون؟',
    answer: 'نعم، جميع الفنيين لدينا معتمدون وذوي خبرة تزيد عن 8 سنوات في السوق السعودي، وملتزمون بمعايير الجودة.',
  },
  {
    question: 'هل تقدمون خدمة كشف تسربات المياه بدون تكسير؟',
    answer: 'نعم، نستخدم أحدث الأجهزة التقنية لكشف التسربات بدقة عالية، مما يقلل من الحاجة للتكسير ويوفر عليك التكاليف.',
  },
];

export default function PlumbingLanding() {
  const whatsappMessage = encodeURIComponent('السلام عليكم، أرغب في الاستفسار عن خدمة السباكة المعتمدة من شركة دارك.');
  const whatsappUrl = `https://wa.me/966580369568?text=${whatsappMessage}`;

  return (
    <main className="bg-white">
      <SEO 
        title="أفضل سباك في الدمام | خدمة سباكة معتمدة بضمان 3 سنوات - دارك"
        description="هل تبحث عن سباك في الدمام؟ شركة دارك تقدم خدمات السباكة المعتمدة، كشف تسربات المياه بدون تكسير، وتأسيس شبكات المياه بضمان 3 سنوات. اتصل بنا الآن."
        keywords="سباك في الدمام, شركة سباكة بالدمام, كشف تسربات المياه بالدمام, فني سباكة معتمد, صيانة سباكة منزلية, دارك للمقاولات"
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-[var(--darak-charcoal)] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/images/service-plumbing.jpg" alt="سباك في الدمام - شركة دارك" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 darak-container mx-auto px-4 text-center">
          <div className="darak-gold-line mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            أفضل <span className="text-[var(--darak-gold)]">سباك في الدمام</span> <br /> 
            خدمات سباكة معتمدة بضمان 3 سنوات
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto mb-10">
            نقدم حلول السباكة المتكاملة من التأسيس إلى الصيانة بأحدث المعدات وفريق من الفنيين المعتمدين. جودة، دقة، وسرعة في التنفيذ.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="darak-btn-primary">
              <MessageSquare className="w-5 h-5" />
              اطلب الخدمة الآن
            </a>
            <a href="tel:+966580369568" className="darak-btn-secondary !border-white !text-white hover:!bg-white hover:!text-[var(--darak-charcoal)]">
              <Phone className="w-5 h-5" />
              اتصل بنا مباشرة
            </a>
          </div>
        </div>
      </section>

      {/* Trust Badges / Features */}
      <section className="py-16 bg-[var(--darak-offwhite)]">
        <div className="darak-container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100 darak-card-hover">
                <div className="w-16 h-16 bg-[var(--darak-gold)]/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-8 h-8 text-[var(--darak-gold)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--darak-charcoal)] mb-2">{feature.title}</h3>
                <p className="text-[var(--darak-charcoal-muted)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="darak-container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="darak-heading-lg text-[var(--darak-charcoal)] mb-4">خدماتنا المتخصصة في السباكة</h2>
            <p className="darak-body max-w-2xl mx-auto">نغطي كافة احتياجات السباكة المنزلية والتجارية في المنطقة الشرقية بأعلى معايير الجودة.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {subServices.map((service, index) => (
              <div key={index} className="p-8 border border-gray-100 rounded-xl hover:border-[var(--darak-gold)] transition-colors group">
                <service.icon className="w-12 h-12 text-[var(--darak-gold)] mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Darak */}
      <section className="py-20 bg-[var(--darak-charcoal)] text-white">
        <div className="darak-container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">لماذا تختار شركة دارك لأعمال السباكة؟</h2>
            <ul className="space-y-4">
              {[
                'استخدام مواد أصلية وأنابيب حرارية عالية الجودة.',
                'فحص شامل واختبار ضغط قبل تسليم أي مشروع.',
                'فنيون متخصصون في كشف التسربات بأجهزة حديثة.',
                'أسعار تنافسية وشفافة بدون تكاليف خفية.',
                'الالتزام التام بالمواعيد المحددة.',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 bg-[var(--darak-gold)] rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-[400px]">
            <img src="/images/before-after.jpg" alt="أعمال سباكة شركة دارك" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p className="text-white font-bold text-xl">دقة في التنفيذ.. إتقان في التفاصيل</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--darak-offwhite)]">
        <div className="darak-container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="darak-heading-lg text-[var(--darak-charcoal)] mb-4">الأسئلة الشائعة</h2>
            <p className="darak-body">إجابات على أهم استفساراتكم حول خدمات السباكة لدينا.</p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-lg border border-gray-100 shadow-sm">
                <AccordionTrigger className="text-right font-bold text-[var(--darak-charcoal)] hover:text-[var(--darak-gold)] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-[var(--darak-charcoal-muted)] leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[var(--darak-gold)]">
        <div className="darak-container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">هل تعاني من مشكلة في السباكة؟ نحن هنا للمساعدة!</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[var(--darak-charcoal)] text-white px-10 py-4 rounded-sm font-bold hover:bg-black transition-colors flex items-center gap-2">
              <MessageSquare className="w-6 h-6" />
              تواصل معنا الآن
            </a>
            <a href="tel:+966580369568" className="bg-white text-[var(--darak-charcoal)] px-10 py-4 rounded-sm font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Phone className="w-6 h-6" />
              اتصل بالفني
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
