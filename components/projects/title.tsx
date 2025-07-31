"use client";

import type { Project } from "@/lib/projects";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export default function Title({ project }: { project: Project }) {
  return (
    <div className="text-center space-y-4 pt-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#00A6ED] font-mono">
        {project.title}
      </h1>
      <p className="text-xs sm:text-lg lg:text-xl text-[#F1F0EA]/80 font-mono px-4">
        {project.tagline}
      </p>
      <div className="flex items-center justify-center gap-4">
        <Button
          onClick={() => {
            window.open(project.githubUrl, "_blank");
          }}
          className="bg-[#0A0A0A]/80 hover:bg-[#040404]/70 border-[#00A6ED]/20 text-[#00A6ED]/90 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-mono rounded-lg transition-all duration-100 border"
        >
          <Github color="#00A6ED" />
          <span className="text-[#F1F0EA]">GitHub</span>
        </Button>

        <Button
          onClick={() => {
            window.open(project.liveDemoUrl, "_blank");
          }}
          className="bg-[#0A0A0A]/80 hover:bg-[#040404]/70 border-[#00A6ED]/20 text-[#00A6ED]/90 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-mono rounded-lg transition-all duration-100 border"
        >
          <ExternalLink color="#00A6ED" />
          <span className="text-[#F1F0EA]">Live</span>
        </Button>
      </div>
    </div>
  );
}
