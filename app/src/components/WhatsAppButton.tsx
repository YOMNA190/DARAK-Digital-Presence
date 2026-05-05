import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const whatsappMessage = encodeURIComponent(
    'السلام عليكم، أتواصل معكم من موقع شركة دارك للمقاولات. أرغب في الحصول على استشارة مجانية لمشروعي.'
  );
  const whatsappUrl = `https://wa.me/966580369568?text=${whatsappMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 group"
      aria-label="تواصل معنا عبر واتساب"
    >
      <div className="relative">
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500/30 animate-ping" />
        
        {/* Button */}
        <div className="relative flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3.5 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <MessageCircle className="w-6 h-6 fill-white" />
          <div className="flex flex-col items-start">
            <span className="text-xs font-medium opacity-90">تواصل مباشر</span>
            <span className="text-sm font-bold">مع المدير التنفيذي</span>
          </div>
        </div>
      </div>
    </a>
  );
}
