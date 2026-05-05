import { useEffect, useRef, useState } from 'react';
import { Building2, Users, CheckCircle, Calendar } from 'lucide-react';

const stats = [
  { icon: Building2, value: 150, suffix: '+', label: 'مشروع منجز' },
  { icon: Users, value: 98, suffix: '%', label: 'نسبة رضا العملاء' },
  { icon: CheckCircle, value: 12, suffix: '+', label: 'سنة خبرة' },
  { icon: Calendar, value: 350, suffix: '+', label: 'يوم عمل سنوياً' },
];

function AnimatedCounter({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <span>
      {count}{suffix}
    </span>
  );
}

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-[var(--darak-gold)]">
      <div className="darak-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <stat.icon className="w-6 h-6 text-white/80" />
                <span className="text-3xl md:text-4xl font-bold text-white">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                </span>
              </div>
              <span className="text-white/90 text-sm font-medium">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
