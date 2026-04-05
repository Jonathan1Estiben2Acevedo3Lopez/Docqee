import { HeroSection } from '@/components/landing/HeroSection';
import { HowItWorksSection } from '@/components/landing/HowItWorksSection';
import { SiteFooter } from '@/components/landing/SiteFooter';
import { SiteHeader } from '@/components/landing/SiteHeader';
import { UniversityPartnersSection } from '@/components/landing/UniversityPartnersSection';
import { Seo } from '@/components/ui/Seo';
import { landingContent } from '@/content/landingContent';

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip" id="top">
      <Seo
        description={landingContent.meta.description}
        imagePath={landingContent.meta.imagePath}
        title={landingContent.meta.title}
      />
      <a className="skip-link" href="#main-content">
        Saltar al contenido
      </a>
      <SiteHeader navigation={landingContent.navigation} />
      <main id="main-content" tabIndex={-1}>
        <HeroSection hero={landingContent.hero} />
        <HowItWorksSection steps={landingContent.steps} />
        <UniversityPartnersSection universities={landingContent.universities} />
      </main>
      <SiteFooter footer={landingContent.footer} />
    </div>
  );
}
