"use client";

import { Button } from "@/components/ui/button";

export default function IntroSection() {
  const downloadResume = () => {
    const downloadUrl =
      "https://drive.google.com/file/d/19ocApaf-54xd_3d-3fXmUIP1X_C6RioH/view?usp=sharing";
    window.open(downloadUrl, "_blank");
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-2 sm:px-4 lg:px-8 relative">
      <div className="max-w-4xl mx-auto text-center w-full">
        <h2 className="text-xl px-4 sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-[#F1F0EA] font-mono">
          Hello! I'm <span className="text-[#00A6ED]">&#123; </span> Aditya
          Kirti <span className="text-[#00A6ED]">&#125;</span>
        </h2>
        <p className="text-xs sm:text-lg lg:text-xl font-mono text-[#F1F0EA]/80 mb-6 sm:mb-8 w-full text-balance px-4">
          A third year B.E. in IT student who is curiously learning{" "}
          <span className="text-[#00A6ED]">full stack web development</span> and
          trying to{" "}
          <span className="text-[#00A6ED]">solve real-world problems</span> by
          making a software solution for them.
        </p>
        <p className="text-xs sm:text-lg lg:text-xl font-mono text-[#F1F0EA]/80 mb-6 sm:mb-8 w-full text-balance px-4">
          I love <span className="text-[#00A6ED]">leetcoding</span> and finding
          ways to how data structures and algorithms help in my every day{" "}
          <span className="">life</span>.
        </p>
        <Button
          onClick={downloadResume}
          className="bg-[#0A0A0A]/80 hover:bg-[#040404]/70 border-[#00A6ED]/20 text-[#00A6ED]/90 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-mono rounded-lg transition-all duration-100 border"
        >
          Download Resume
        </Button>
      </div>
    </section>
  );
}
