import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowLeft, MessageSquare, User, Building, FileText, PhoneCall } from 'lucide-react';
import { Link } from 'react-router';

type FormStep = 1 | 2 | 3 | 4;

export default function Contact() {
  const [step, setStep] = useState<FormStep>(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    location: '',
    budget: '',
    message: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `السلام عليكم، أنا ${formData.name}. أرغب في استشارة لمشروع ${formData.projectType || 'بناء/تشطيب'} في ${formData.location || 'الدمام'}. رقم تواصلي: ${formData.phone}`
  );
  const whatsappUrl = `https://wa.me/966580369568?text=${whatsappMessage}`;

  const steps = [
    { number: 1, title: 'بياناتك' },
    { number: 2, title: 'المشروع' },
    { number: 3, title: 'التفاصيل' },
    { number: 4, title: 'الإرسال' },
  ];

  if (isSubmitted) {
    return (
      <main>
        <section className="darak-section-padding bg-[var(--darak-offwhite)] min-h-screen flex items-center">
          <div className="darak-container mx-auto px-4 text-center max-w-lg">
            <div className="bg-white rounded-lg p-10 shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="darak-heading-md text-[var(--darak-charcoal)] mb-3">
                تم إرسال طلبك بنجاح
              </h2>
              <p className="text-[var(--darak-charcoal-muted)] mb-6">
                شكراً {formData.name} على تواصلك. سيقوم فريقنا بالرد عليك خلال 24 ساعة.
              </p>
              
              <div className="space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-sm font-semibold transition-all inline-flex items-center gap-2 w-full justify-center"
                >
                  <MessageSquare className="w-5 h-5" />
                  متابعة عبر واتساب
                </a>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 text-[var(--darak-charcoal)] border border-gray-200 hover:border-[var(--darak-gold)] hover:text-[var(--darak-gold)] px-6 py-3 rounded-sm font-semibold transition-all w-full"
                >
                  <ArrowLeft className="w-4 h-4" />
                  العودة للرئيسية
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Page Header */}
      <section className="relative pt-32 pb-16 bg-[var(--darak-charcoal)]">
        <div className="absolute inset-0 opacity-20">
          <img src="/images/hero-villa.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 darak-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="darak-gold-line mx-auto mb-5" />
          <h1 className="darak-heading-lg text-white mb-4">
            تواصل <span className="text-[var(--darak-gold)]">معنا</span>
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            احصل على استشارة مجانية من خبراء دارك. نحن هنا لتحويل رؤيتك إلى واقع.
          </p>
        </div>
      </section>

      <section className="darak-section-padding bg-[var(--darak-offwhite)]">
        <div className="darak-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info Side */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[var(--darak-charcoal)] mb-4">
                  معلومات التواصل
                </h3>
                <p className="text-[var(--darak-charcoal-muted)] mb-6">
                  متواجدون لخدمتك في الدمام والمنطقة الشرقية. لا تتردد في التواصل معنا.
                </p>
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4 bg-white p-4 rounded-lg">
                  <div className="w-10 h-10 bg-[var(--darak-gold)]/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-[var(--darak-gold)]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--darak-charcoal)] block text-sm">العنوان</span>
                    <span className="text-[var(--darak-charcoal-muted)] text-sm">الدمام - المنطقة الشرقية، المملكة العربية السعودية</span>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-lg">
                  <div className="w-10 h-10 bg-[var(--darak-gold)]/10 rounded-lg flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5 text-[var(--darak-gold)]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--darak-charcoal)] block text-sm">الهاتف</span>
                    <a href="tel:+966580369568" className="text-[var(--darak-charcoal-muted)] text-sm hover:text-[var(--darak-gold)] transition-colors" dir="ltr">+966 58 036 9568</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-lg">
                  <div className="w-10 h-10 bg-[var(--darak-gold)]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-[var(--darak-gold)]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--darak-charcoal)] block text-sm">البريد الإلكتروني</span>
                    <a href="mailto:darak1907k@gmail.com" className="text-[var(--darak-charcoal-muted)] text-sm hover:text-[var(--darak-gold)] transition-colors">darak1907k@gmail.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 bg-white p-4 rounded-lg">
                  <div className="w-10 h-10 bg-[var(--darak-gold)]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-[var(--darak-gold)]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[var(--darak-charcoal)] block text-sm">ساعات العمل</span>
                    <span className="text-[var(--darak-charcoal-muted)] text-sm">الأحد - الخميس: 8 ص - 6 م</span>
                    <span className="text-[var(--darak-charcoal-muted)] text-sm block">السبت: 10 ص - 4 م</span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick Action */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg font-semibold transition-all inline-flex items-center gap-3 w-full justify-center shadow-lg"
              >
                <MessageSquare className="w-5 h-5" />
                <div className="text-right">
                  <span className="text-xs block opacity-90">تواصل سريع</span>
                  <span className="text-sm font-bold">مع المدير التنفيذي</span>
                </div>
              </a>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-[var(--darak-charcoal)] mb-2">
                    نموذج الاستشارة
                  </h3>
                  <p className="text-[var(--darak-charcoal-muted)] text-sm">
                    خطوات بسيطة للحصول على استشارة مخصصة لمشروعك
                  </p>
                </div>

                {/* Step Indicator */}
                <div className="flex items-center justify-between mb-8">
                  {steps.map((s, i) => (
                    <div key={s.number} className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                        step >= s.number
                          ? 'bg-[var(--darak-gold)] text-white'
                          : 'bg-gray-100 text-gray-400'
                      }`}>
                        {step > s.number ? <CheckCircle className="w-4 h-4" /> : s.number}
                      </div>
                      <span className={`hidden sm:block text-xs mr-2 ${
                        step >= s.number ? 'text-[var(--darak-charcoal)] font-medium' : 'text-gray-400'
                      }`}>
                        {s.title}
                      </span>
                      {i < steps.length - 1 && (
                        <div className={`w-8 sm:w-12 h-0.5 mx-2 ${
                          step > s.number ? 'bg-[var(--darak-gold)]' : 'bg-gray-200'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Step 1: Personal Info */}
                  {step === 1 && (
                    <div className="space-y-5 animate-in fade-in slide-in-from-left-4 duration-300">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-[var(--darak-charcoal)] mb-2">
                          <User className="w-4 h-4 text-[var(--darak-gold)]" />
                          الاسم الكامل *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => updateField('name', e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--darak-gold)] focus:ring-1 focus:ring-[var(--darak-gold)] transition-all"
                          placeholder="محمد العتيبي"
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-[var(--darak-charcoal)] mb-2">
                          <Phone className="w-4 h-4 text-[var(--darak-gold)]" />
                          رقم الجوال *
                        </label>
                        <input
                          type="tel"
                          required
                          dir="ltr"
                          value={formData.phone}
                          onChange={(e) => updateField('phone', e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--darak-gold)] focus:ring-1 focus:ring-[var(--darak-gold)] transition-all"
                          placeholder="05xxxxxxxx"
                        />
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-[var(--darak-charcoal)] mb-2">
                          <Mail className="w-4 h-4 text-[var(--darak-gold)]" />
                          البريد الإلكتروني (اختياري)
                        </label>
                        <input
                          type="email"
                          dir="ltr"
                          value={formData.email}
                          onChange={(e) => updateField('email', e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--darak-gold)] focus:ring-1 focus:ring-[var(--darak-gold)] transition-all"
                          placeholder="example@email.com"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2: Project Details */}
                  {step === 2 && (
                    <div className="space-y-5 animate-in fade-in slide-in-from-left-4 duration-300">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-[var(--darak-charcoal)] mb-2">
                          <Building className="w-4 h-4 text-[var(--darak-gold)]" />
                          نوع المشروع *
                        </label>
                        <select
                          required
                          value={formData.projectType}
                          onChange={(e) => updateField('projectType', e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--darak-gold)] focus:ring-1 focus:ring-[var(--darak-gold)] transition-all bg-white"
                        >
                          <option value="">اختر نوع المشروع</option>
                          <option value="فيلا سكنية">فيلا سكنية</option>
                          <option value="شقة سكنية">شقة سكنية</option>
                          <option value="مبنى تجاري">مبنى تجاري</option>
                          <option value="تجديد/ترميم">تجديد/ترميم</option>
                          <option value="ملحق خارجي">ملحق خارجي</option>
                          <option value="أخرى">أخرى</option>
                        </select>
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-[var(--darak-charcoal)] mb-2">
                          <MapPin className="w-4 h-4 text-[var(--darak-gold)]" />
                          موقع المشروع *
                        </label>
                        <select
                          required
                          value={formData.location}
                          onChange={(e) => updateField('location', e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--darak-gold)] focus:ring-1 focus:ring-[var(--darak-gold)] transition-all bg-white"
                        >
                          <option value="">اختر الموقع</option>
                          <option value="الدمام - الشاطئ">الدمام - الشاطئ</option>
                          <option value="الدمام - الفرسان">الدمام - الفرسان</option>
                          <option value="الدمام - أخرى">الدمام - أخرى</option>
                          <option value="الخبر">الخبر</option>
                          <option value="الظهران">الظهران</option>
                          <option value="القطيف">القطيف</option>
                          <option value="أخرى">أخرى</option>
                        </select>
                      </div>
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-[var(--darak-charcoal)] mb-2">
                          <FileText className="w-4 h-4 text-[var(--darak-gold)]" />
                          نطاق الميزانية المتوقع
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => updateField('budget', e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--darak-gold)] focus:ring-1 focus:ring-[var(--darak-gold)] transition-all bg-white"
                        >
                          <option value="">اختر النطاق</option>
                          <option value="أقل من 100,000 ريال">أقل من 100,000 ريال</option>
                          <option value="100,000 - 300,000 ريال">100,000 - 300,000 ريال</option>
                          <option value="300,000 - 500,000 ريال">300,000 - 500,000 ريال</option>
                          <option value="500,000 - 1,000,000 ريال">500,000 - 1,000,000 ريال</option>
                          <option value="أكثر من 1,000,000 ريال">أكثر من 1,000,000 ريال</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Message */}
                  {step === 3 && (
                    <div className="space-y-5 animate-in fade-in slide-in-from-left-4 duration-300">
                      <div>
                        <label className="flex items-center gap-2 text-sm font-medium text-[var(--darak-charcoal)] mb-2">
                          <FileText className="w-4 h-4 text-[var(--darak-gold)]" />
                          تفاصيل إضافية عن المشروع
                        </label>
                        <textarea
                          rows={6}
                          value={formData.message}
                          onChange={(e) => updateField('message', e.target.value)}
                          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--darak-gold)] focus:ring-1 focus:ring-[var(--darak-gold)] transition-all resize-none"
                          placeholder="صف لنا رؤيتك، متى تخطط لبدء المشروع، وأي تفاصيل أخرى تعتقد أنها مهمة..."
                        />
                      </div>

                      <div className="bg-[var(--darak-gold)]/5 border border-[var(--darak-gold)]/20 rounded-lg p-4">
                        <h4 className="font-bold text-[var(--darak-charcoal)] text-sm mb-2">ملخص الطلب</h4>
                        <ul className="space-y-1 text-sm text-[var(--darak-charcoal-muted)]">
                          <li>الاسم: {formData.name || '-'}</li>
                          <li>الجوال: {formData.phone || '-'}</li>
                          <li>نوع المشروع: {formData.projectType || '-'}</li>
                          <li>الموقع: {formData.location || '-'}</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Review */}
                  {step === 4 && (
                    <div className="space-y-5 animate-in fade-in slide-in-from-left-4 duration-300">
                      <div className="bg-[var(--darak-offwhite)] rounded-lg p-6 space-y-4">
                        <h4 className="font-bold text-[var(--darak-charcoal)]">تأكيد المعلومات</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-[var(--darak-charcoal-muted)] block text-xs">الاسم</span>
                            <span className="font-medium text-[var(--darak-charcoal)]">{formData.name}</span>
                          </div>
                          <div>
                            <span className="text-[var(--darak-charcoal-muted)] block text-xs">الجوال</span>
                            <span className="font-medium text-[var(--darak-charcoal)]" dir="ltr">{formData.phone}</span>
                          </div>
                          <div>
                            <span className="text-[var(--darak-charcoal-muted)] block text-xs">نوع المشروع</span>
                            <span className="font-medium text-[var(--darak-charcoal)]">{formData.projectType}</span>
                          </div>
                          <div>
                            <span className="text-[var(--darak-charcoal-muted)] block text-xs">الموقع</span>
                            <span className="font-medium text-[var(--darak-charcoal)]">{formData.location}</span>
                          </div>
                          <div>
                            <span className="text-[var(--darak-charcoal-muted)] block text-xs">الميزانية</span>
                            <span className="font-medium text-[var(--darak-charcoal)]">{formData.budget || 'لم يتم التحديد'}</span>
                          </div>
                          <div>
                            <span className="text-[var(--darak-charcoal-muted)] block text-xs">البريد الإلكتروني</span>
                            <span className="font-medium text-[var(--darak-charcoal)]">{formData.email || 'لم يتم التحديد'}</span>
                          </div>
                        </div>
                        {formData.message && (
                          <div>
                            <span className="text-[var(--darak-charcoal-muted)] block text-xs mb-1">التفاصيل الإضافية</span>
                            <p className="text-sm text-[var(--darak-charcoal)] bg-white p-3 rounded">{formData.message}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep((prev) => (prev - 1) as FormStep)}
                        className="text-[var(--darak-charcoal-muted)] hover:text-[var(--darak-charcoal)] text-sm font-medium transition-colors"
                      >
                        الخطوة السابقة
                      </button>
                    ) : (
                      <span />
                    )}

                    {step < 4 ? (
                      <button
                        type="button"
                        onClick={() => setStep((prev) => (prev + 1) as FormStep)}
                        className="bg-[var(--darak-charcoal)] hover:bg-[var(--darak-charcoal-light)] text-white px-6 py-2.5 rounded-sm font-semibold transition-all inline-flex items-center gap-2"
                      >
                        التالي
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="bg-[var(--darak-gold)] hover:bg-[var(--darak-gold-dark)] text-white px-6 py-2.5 rounded-sm font-semibold transition-all inline-flex items-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        إرسال الاستشارة
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
