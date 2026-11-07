import CtaBand from '@/components/common/CtaBand';
import PageHero from '@/components/common/PageHero';
import AboutSection from '@/components/sections/AboutSection';
import ProcessSection from '@/components/sections/ProcessSection';

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="home-framing"
        eyebrow="About Us"
        title={
          <>
            Over <span className="italic text-brand-400">40 years</span> of building it right.
          </>
        }
        description="Chapman Construction has the resources, skills, equipment, and knowledge to handle any project, start to finish."
      />

      <AboutSection showLink={false} />

      <ProcessSection />
      <CtaBand />
    </>
  );
}
