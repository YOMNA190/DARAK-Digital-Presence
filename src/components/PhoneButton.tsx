import { Phone } from 'lucide-react';

export default function PhoneButton() {
  const phoneNumber = '+966580369568';

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="fixed bottom-24 left-6 z-50 group"
      aria-label="اتصل بنا الآن"
    >
      <div className="relative">
        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" />
        
        {/* Button */}
        <div className="relative flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3.5 rounded-full shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
          <Phone className="w-6 h-6 fill-white" />
          <div className="flex flex-col items-start">
            <span className="text-xs font-medium opacity-90">اتصل الآن</span>
            <span className="text-sm font-bold">متاحون لخدمتك</span>
          </div>
        </div>
      </div>
    </a>
  );
}
