import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import AudienceSection from '@/components/AudienceSection';
import AboutSection from '@/components/AboutSection';
import RoadmapSection from '@/components/RoadmapSection';
import WaitlistSection from '@/components/WaitlistSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AudienceSection />
        <AboutSection />
        <RoadmapSection />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  );
}
