import Hero from '@/sections/Hero';
import ServicesGrid from '@/sections/ServicesGrid';
import Workflow from '@/sections/Workflow';
import Stats from '@/sections/Stats';
import ProjectsMap from '@/sections/ProjectsMap';
import BeforeAfter from '@/sections/BeforeAfter';
import Testimonials from '@/sections/Testimonials';
import CTASection from '@/sections/CTASection';

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <Workflow />
      <Stats />
      <ProjectsMap />
      <BeforeAfter />
      <Testimonials />
      <CTASection />
    </main>
  );
}
