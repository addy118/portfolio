import Navbar from "@/components/navbar";
import IntroSection from "@/components/intro";
import WhyAdityaSection from "@/components/why-me/why-me";
import { ShowcaseSection } from "@/components/showcase";
import { PerformanceSection } from "@/components/performance/performance";
import InstallationSection from "@/components/installation";

export default function Home() {
  return (
    <div className="min-h-screen text-[#F1F0EA] relative">
      {/* radial elemental background */}
      <div className="modern-bg">
        <div className="base-gradient"></div>
        <div className="radial-mesh"></div>
        <div className="elemental-texture"></div>
        <div className="dot-matrix"></div>
        <div className="accent-elements">
          <div className="accent-element"></div>
          <div className="accent-element"></div>
          <div className="accent-element"></div>
        </div>
        <div className="noise-overlay"></div>
      </div>

      {/* Content layer */}
      <div className="content-layer">
        <Navbar />
        <main>
          <div className="flex items-start justify-between"></div>
          <IntroSection />
          <WhyAdityaSection />
          <ShowcaseSection />
          <PerformanceSection />
          <InstallationSection />
        </main>
      </div>
    </div>
  );
}
