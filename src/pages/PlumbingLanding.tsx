import { Check, Phone, MessageSquare, Shield, Clock, Award, Droplets, Search, PenTool as Tool, Waves, Star, AlertTriangle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEO from '@/components/SEO';

const subServices = [
  {
    id: 1,
    title: 'تأسيس سباكة جديدة',
    description: 'تركيب مواسير وشبكات صحية للمباني الجديدة والفلل بأعلى المعايير.',
    icon: '🚰',
    image: '/images/plumbing/new-construction.jpg'
  },
  {
    id: 2,
    title: 'صيانة سباكة',
    description: 'تصليح تسريبات، تبديل خلاطات، صيانة دورية بأيدي خبراء.',
    icon: '🔧',
    image: '/images/plumbing/maintenance.jpg'
  },
  {
    id: 3,
    title: 'كشف تسربات المياه',
    description: 'كشف إلكتروني دقيق بدون تكسير باستخدام أحدث التقنيات.',
    icon: '🔍',
    image: '/images/plumbing/leak-detection.jpg'
  },
  {
    id: 4,
    title: 'تركيب سخانات مياه',
    description: 'تركيب وتبديل سخانات كهرباء وغاز مع ضمان السلامة.',
    icon: '🌡️',
    image: '/images/plumbing/heater.jpg'
  },
  {
    id: 5,
    title: 'تركيب خلاطات ومغاسل',
    description: 'تركيب وتبديل جميع أنواع الخلاطات والمغاسل بلمسة احترافية.',
    icon: '🚿',
    image: '/images/plumbing/fixtures.jpg'
  },
  {
    id: 6,
    title: 'تأسيس حمامات ومطابخ',
    description: 'تركيب كامل لسباكة المطابخ والحمامات بتصاميم عصرية.',
    icon: '🛁',
    image: '/images/plumbing/kitchen-bath.jpg'
  },
];

const whyChooseUs = [
  {
    title: '45 فني معتمد',
    description: 'خبرة تزيد عن 8 سنوات لكل فني في السوق السعودي.',
    icon: Award,
  },
  {
    title: 'ضمان 2 سنة',
    description: 'نقدم ضماناً مكتوباً على كل التركيبات لضمان راحة بالك.',
    icon: Shield,
  },
  {
    title: 'استجابة خلال 4 ساعات',
    description: 'فريقنا جاهز للوصول إليك بسرعة فائقة في حالات الطوارئ.',
    icon: Clock,
  },
  {
    title: 'مرخص ومعتمد',
    description: 'مرخص من وزارة الإسكان وعضو في الغرفة التجارية.',
    icon: Check,
  },
];

const processSteps = [
  {
    id: 1,
    title: 'اتصل أو ارسل واتساب',
    description: 'تواصل معنا لتحديد المشكلة أو الخدمة المطلوبة.',
    icon: Phone,
  },
  {
    id: 2,
    title: 'فني يصلك في 4 ساعات',
    description: 'نرسل أفضل الفنيين المتخصصين لموقعك فوراً.',
    icon: Clock,
  },
  {
    id: 3,
    title: 'معاينة وعرض سعر',
    description: 'فحص دقيق وتقديم عرض سعر شفاف قبل البدء.',
    icon: Search,
  },
  {
    id: 4,
    title: 'تنفيذ فوري + ضمان',
    description: 'إنجاز العمل بأعلى جودة مع تسليم شهادة الضمان.',
    icon: Tool,
  },
];

const testimonials = [
  {
    name: 'محمد، الدمام',
    text: 'سرعة في الاستجابة، شغل نظيف، والضمان ده اللي فرق معاي. الفني كان محترف جداً وفاهم شغله.',
    rating: 5,
  },
  {
    name: 'أحمد، الخبر',
    text: 'تعاملت معهم في تأسيس فيلتي الجديدة، دقة في المواعيد وجودة في المواد المستخدمة. أنصح بهم بشدة.',
    rating: 5,
  },
  {
    name: 'خالد، الظهران',
    text: 'كشفوا لي تسريب كان متعبني سنين بدون تكسير. وفروا علي مبالغ كبيرة كانت هتروح في التكسير والترميم.',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'هل تقدمون ضماناً على أعمال السباكة؟',
    answer: 'نعم، شركة دارك تقدم ضماناً لمدة سنتين على جميع أعمال التركيب والصيانة لضمان جودة الخدمة.',
  },
  {
    question: 'كم يستغرق وصول الفني في حالات الطوارئ؟',
    answer: 'نلتزم بالوصول إليك خلال 4 ساعات كحد أقصى داخل الدمام والخبر والظهران.',
  },
  {
    question: 'هل الفنيون لديكم معتمدون؟',
    answer: 'نعم، جميع الفنيين لدينا معتمدون وذوي خبرة تزيد عن 8 سنوات، والشركة مرخصة من وزارة الإسكان.',
  },
  {
    question: 'هل تقدمون خدمة كشف تسربات المياه بدون تكسير؟',
    answer: 'نعم، نستخدم أحدث الأجهزة الإلكترونية لكشف التسربات بدقة عالية، مما يوفر عليك تكاليف التكسير والترميم.',
  },
];

export default function PlumbingLanding() {
  const whatsappMessage = encodeURIComponent('السلام عليكم، أرغب في الاستفسار عن خدمة السباكة المعتمدة من شركة دارك.');
  const whatsappUrl = `https://wa.me/966580369568?text=${whatsappMessage}`;
  const phoneNumber = '+966580369568';

  return (
    <main className="bg-white">
      <SEO 
        title="سباكة معتمدة بالدمام | تركيب وصيانة 24 ساعة - شركة دارك"
        description="أفضل سباك في الدمام والخبر. خدمات سباكة معتمدة، كشف تسربات بدون تكسير، تأسيس شبكات بضمان سنتين. استجابة خلال 4 ساعات. اتصل الآن."
        keywords="سباك بالدمام, شركة سباكة بالدمام, كشف تسربات المياه بالدمام, فني سباكة معتمد, صيانة سباكة منزلية, دارك للمقاولات"
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-[var(--darak-charcoal)]">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/plumbing/hero.jpg" 
            alt="فني سباكة معتمد - شركة دارك" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--darak-charcoal)] via-[var(--darak-charcoal)]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 darak-container px-4 py-20">
          <div className="max-w-3xl">
            <div className="darak-gold-line mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              سباكة معتمدة بالدمام <br />
              <span className="text-[var(--darak-gold)]">تركيب وصيانة 24 ساعة</span>
            </h1>
            <p className="text-white/90 text-xl md:text-2xl mb-10 font-medium">
              45 فني معتمد | ضمان 2 سنة | استجابة خلال 4 ساعات
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${phoneNumber}`} className="darak-btn-primary !px-10 !py-5 text-lg">
                <Phone className="w-6 h-6" />
                اتصل الآن
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-sm font-bold hover:bg-[#128C7E] transition-all flex items-center gap-2 text-lg shadow-lg">
                <MessageSquare className="w-6 h-6" />
                تواصل واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Services Cards */}
      <section className="py-24 bg-[var(--darak-offwhite)]">
        <div className="darak-container px-4">
          <div className="text-center mb-16">
            <h2 className="darak-heading-lg text-[var(--darak-charcoal)] mb-4">خدماتنا المتخصصة</h2>
            <div className="darak-gold-line mx-auto mb-6" />
            <p className="darak-body max-w-2xl mx-auto">نقدم حلولاً متكاملة لكافة احتياجات السباكة المنزلية والتجارية بأعلى معايير الإتقان.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subServices.map((service) => (
              <div key={service.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-md">
                    {service.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[var(--darak-charcoal)] mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed h-12 overflow-hidden">{service.description}</p>
                  <a href={whatsappUrl} className="w-full darak-btn-secondary !py-3 flex justify-center items-center gap-2 border-[var(--darak-gold)] text-[var(--darak-gold)] hover:bg-[var(--darak-gold)] hover:text-white">
                    اطلب الخدمة
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="darak-container px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="flex flex-col p-8 bg-[var(--darak-charcoal)] rounded-lg text-white darak-card-hover border-b-4 border-[var(--darak-gold)]">
                <item.icon className="w-12 h-12 text-[var(--darak-gold)] mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/70 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process Steps */}
      <section className="py-24 bg-[var(--darak-offwhite)]">
        <div className="darak-container px-4">
          <div className="text-center mb-16">
            <h2 className="darak-heading-lg text-[var(--darak-charcoal)] mb-4">كيف نعمل؟</h2>
            <p className="darak-body">خطوات بسيطة تضمن لك جودة التنفيذ وراحة البال.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connection Line for Desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-[var(--darak-gold)]/20 -translate-y-1/2 z-0" />
            
            {processSteps.map((step, index) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white border-2 border-[var(--darak-gold)] rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:bg-[var(--darak-gold)] transition-colors duration-300">
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-[var(--darak-gold)] text-white rounded-full flex items-center justify-center font-bold">
                    {step.id}
                  </span>
                  <step.icon className="w-10 h-10 text-[var(--darak-gold)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[var(--darak-charcoal)] mb-3">{step.title}</h3>
                <p className="text-gray-600 px-4">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="py-24 bg-white">
        <div className="darak-container px-4">
          <div className="text-center mb-16">
            <h2 className="darak-heading-lg text-[var(--darak-charcoal)] mb-4">آراء عملاء دارك</h2>
            <p className="darak-body">ثقة عملاؤنا هي سر نجاحنا واستمرارنا.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="p-8 bg-[var(--darak-offwhite)] rounded-2xl relative">
                <div className="flex mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[var(--darak-gold)] text-[var(--darak-gold)]" />
                  ))}
                </div>
                <p className="text-lg italic text-[var(--darak-charcoal-muted)] mb-6 leading-relaxed">
                  "{item.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[var(--darak-gold)]/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-[var(--darak-gold)]" />
                  </div>
                  <span className="font-bold text-[var(--darak-charcoal)]">{item.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Emergency CTA */}
      <section className="py-20 bg-[#e63946] text-white">
        <div className="darak-container px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
                <AlertTriangle className="w-12 h-12 text-white" />
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">تسريب ماء؟ محتاج سباك فوري؟</h2>
                <p className="text-xl text-white/90">فريقنا جاهز 24 ساعة. استجابة خلال 4 ساعات.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${phoneNumber}`} className="bg-white text-[#e63946] px-10 py-5 rounded-sm font-bold hover:bg-gray-100 transition-all flex items-center gap-2 text-xl shadow-xl">
                <Phone className="w-6 h-6" />
                اتصل الآن: {phoneNumber}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-sm font-bold hover:bg-[#128C7E] transition-all flex items-center gap-2 text-xl shadow-xl">
                <MessageSquare className="w-6 h-6" />
                واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Footer CTA */}
      <section className="py-24 bg-[var(--darak-charcoal)] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--darak-gold)]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[var(--darak-gold)]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        
        <div className="relative z-10 darak-container px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">جاهز تبدأ مشروعك؟</h2>
          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
            لا تتردد في التواصل معنا للحصول على استشارة مجانية وعرض سعر دقيق لمشروعك القادم.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href={`tel:${phoneNumber}`} className="darak-btn-primary !px-12 !py-5 text-xl">
              اتصل بنا
            </a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="darak-btn-secondary !border-white !text-white hover:!bg-white hover:!text-[var(--darak-charcoal)] !px-12 !py-5 text-xl">
              احصل على عرض مجاني
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section (Retained but updated style) */}
      <section className="py-24 bg-[var(--darak-offwhite)]">
        <div className="darak-container px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="darak-heading-lg text-[var(--darak-charcoal)] mb-4">الأسئلة الشائعة</h2>
            <div className="darak-gold-line mx-auto mb-6" />
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-lg border border-gray-100 shadow-sm">
                <AccordionTrigger className="text-right font-bold text-[var(--darak-charcoal)] hover:text-[var(--darak-gold)] transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-right text-[var(--darak-charcoal-muted)] leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </main>
  );
}
