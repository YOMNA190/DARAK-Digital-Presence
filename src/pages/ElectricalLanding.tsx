import { Check, Phone, MessageSquare, Shield, Clock, Award, Zap, Search, PenTool as Tool, Hammer, Star, AlertTriangle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import SEO from '@/components/SEO';

const subServices = [
  {
    id: 1,
    title: 'تأسيس كهرباء جديد',
    description: 'تمديد شبكات كهربائية كاملة للمباني الجديدة بأعلى معايير السلامة.',
    icon: '⚡',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'صيانة كهرباء',
    description: 'تصليح الأعطال الكهربائية واستبدال اللوحات والمفاتيح التالفة.',
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'تركيب لوحات توزيع',
    description: 'تركيب لوحات كهربائية حديثة ومنظمة بمعايير السلامة العالمية.',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'تركيب إنارة',
    description: 'إنارة داخلية وخارجية LED بأحدث التصاميم الموفرة للطاقة.',
    icon: '💡',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'تركيب داتا وشبكات',
    description: 'تمديد كابلات الشبكة والاتصالات وأنظمة الأمان الحديثة.',
    icon: '🌐',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'كشف أعطال كهربائية',
    description: 'كشف دقيق للأعطال والتماسات الكهرباء بأحدث الأجهزة المتخصصة.',
    icon: '🔍',
    image: 'https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1000&auto=format&fit=crop'
  },
];

const whyChooseUs = [
  {
    title: '45 فني معتمد',
    description: 'خبرة تزيد عن 8 سنوات لكل فني في مجال الكهرباء.',
    icon: Award,
  },
  {
    title: 'ضمان سنتين',
    description: 'نقدم ضماناً مكتوباً على جميع أعمال التركيب.',
    icon: Shield,
  },
  {
    title: 'معايير معتمدة',
    description: 'مطابقة للكود السعودي للكهرباء والمعايير العالمية.',
    icon: Check,
  },
  {
    title: 'تراخيص رسمية',
    description: 'مرخص من الجهات المختصة وعضو في الغرفة التجارية.',
    icon: Zap,
  },
];

const processSteps = [
  {
    id: 1,
    title: 'طلب الخدمة',
    description: 'تواصل معنا لتحديد احتياجاتك الكهربائية.',
    icon: Phone,
  },
  {
    id: 2,
    title: 'المعاينة الفنية',
    description: 'فحص دقيق للموقع وتحديد المتطلبات.',
    icon: Search,
  },
  {
    id: 3,
    title: 'عقد العمل',
    description: 'توقيع عقد واضح مع تحديد السعر والمدة.',
    icon: Hammer,
  },
  {
    id: 4,
    title: 'التنفيذ والضمان',
    description: 'إنجاز العمل بأعلى جودة مع شهادة الضمان.',
    icon: Tool,
  },
];

const testimonials = [
  {
    name: 'محمود، الدمام',
    text: 'فنيوهم محترفين جداً، شغل الكهرباء بتاعهم دقيق وآمن. الضمان اللي قدموه أعطاني راحة بال كاملة.',
    rating: 5,
  },
  {
    name: 'سارة، الخبر',
    text: 'استخدموا مواد أصلية معتمدة وكانوا ملتزمين بالمواعيد. أنصح بهم بشدة.',
    rating: 5,
  },
  {
    name: 'خالد، الظهران',
    text: 'كشفوا عطل كهربائي كان صعب جداً بسرعة واحترافية. فنيين ممتازين.',
    rating: 5,
  },
];

const faqs = [
  {
    question: 'هل الضمان شامل اللوحات؟',
    answer: 'نعم، الضمان يشمل اللوحات والتركيبات التي تتم من خلالنا لمدة سنتين.',
  },
  {
    question: 'كم مدة تأسيس كهرباء فيلا؟',
    answer: 'تعتمد على مراحل البناء، لكن عادة ما تستغرق من أسبوع إلى 10 أيام لكل مرحلة.',
  },
  {
    question: 'هل الكهرباء حسب كود السعودية؟',
    answer: 'نعم، جميع أعمالنا مطابقة تماماً للكود السعودي للكهرباء (SBC).',
  },
  {
    question: 'هل تقدمون خدمة الصيانة الدورية؟',
    answer: 'نعم، نوفر عقود صيانة دورية للتأكد من سلامة التركيبات الكهربائية.',
  },
];

export default function ElectricalLanding() {
  const whatsappMessage = encodeURIComponent('السلام عليكم، أرغب في الاستفسار عن خدمات الكهرباء المعتمدة من شركة دارك.');
  const whatsappUrl = `https://wa.me/966580369568?text=${whatsappMessage}`;
  const phoneNumber = '+966580369568';

  return (
    <main className="bg-white">
      <SEO 
        title="كهرباء معتمدة بالدمام | تركيب وتصليح بمعايير سعودية - شركة دارك"
        description="أفضل خدمات الكهرباء في الدمام والخبر. تأسيس كهرباء، صيانة أعطال، وتركيب إنارة بضمان سنتين. اتصل الآن."
        keywords="كهرباء بالدمام, فني كهرباء معتمد, تأسيس كهرباء, صيانة كهرباء, دارك للمقاولات"
      />

      {/* 1. Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-[var(--darak-charcoal)]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop" 
            alt="كهرباء معتمدة - شركة دارك" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[var(--darak-charcoal)] via-[var(--darak-charcoal)]/80 to-transparent" />
        </div>
        
        <div className="relative z-10 darak-container px-4 py-20">
          <div className="max-w-3xl">
            <div className="darak-gold-line mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              كهرباء معتمدة بالدمام <br />
              <span className="text-[var(--darak-gold)]">تركيب وتصليح بمعايير سعودية</span>
            </h1>
            <p className="text-white/90 text-xl md:text-2xl mb-10 font-medium">
              فنيون معتمدون | ضمان سنتين | كشف أعطال دقيق
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${phoneNumber}`} className="darak-btn-primary !px-10 !py-5 text-lg">
                <Phone className="w-6 h-6" />
                اطلب فني كهرباء معتمد
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
            <p className="darak-body max-w-2xl mx-auto">نقدم حلولاً متكاملة لكافة احتياجات الكهرباء المنزلية والتجارية بأعلى معايير الأمان.</p>
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
            <h2 className="darak-heading-lg text-[var(--darak-charcoal)] mb-4">خطوات التنفيذ</h2>
            <p className="darak-body">عملية منظمة تضمن لك جودة التنفيذ وراحة البال.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold mb-2">عطل كهربائي أو تأسيس جديد؟</h2>
                <p className="text-xl text-white/90">لا تخاطر بسلامتك، فريقنا المحترف جاهز لخدمتك بأعلى معايير الأمان.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href={`tel:${phoneNumber}`} className="bg-white text-[#e63946] px-10 py-5 rounded-sm font-bold hover:bg-gray-100 transition-all flex items-center gap-2 text-xl shadow-xl">
                <Phone className="w-6 h-6" />
                اتصل الآن
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-10 py-5 rounded-sm font-bold hover:bg-[#128C7E] transition-all flex items-center gap-2 text-xl shadow-xl">
                <MessageSquare className="w-6 h-6" />
                واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 bg-[var(--darak-offwhite)]">
        <div className="darak-container px-4">
          <div className="text-center mb-16">
            <h2 className="darak-heading-lg text-[var(--darak-charcoal)] mb-4">أسئلة شائعة</h2>
            <p className="darak-body">إجابات على أكثر الأسئلة التي يطرحها عملاؤنا.</p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-bold text-[var(--darak-charcoal)] hover:text-[var(--darak-gold)]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
}
