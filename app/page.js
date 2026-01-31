import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SpecialtiesSection from '@/components/SpecialtiesSection';
import SupportSection from '@/components/SupportSection';
import IntroSection from '@/components/IntroSection';
import FAQSection from '@/components/FAQSection';
import ProfessionalBackgroundSection from '@/components/ProfessionalBackgroundSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SpecialtiesSection />
      <SupportSection />
      <IntroSection />
      <FAQSection />
      <ProfessionalBackgroundSection />
      <Footer />
    </main>
  );
}
