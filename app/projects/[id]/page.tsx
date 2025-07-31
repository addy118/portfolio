"use client";

import { projects } from "@/lib/projects";
import { notFound, useParams } from "next/navigation";

import Title from "@/components/projects/title";
import Problem from "@/components/projects/problem";
import Solution from "@/components/projects/solution";
import TechStack from "@/components/projects/tech-stack";
import CoreFeatures from "@/components/projects/core-features";
import Challenges from "@/components/projects/challenges";
import FutureScope from "@/components/projects/future-scope";
import Navbar from "@/components/navbar";
import Background from "@/components/background";
import Arch from "@/components/projects/arch";

export default function ProjectPage() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen text-[#F1F0EA] font-mono relative">
      <Background />
      <Navbar />
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-12 pb-16">
        <div className="content-layer max-w-4xl mx-auto space-y-12">
          <Title project={project} />

          <Problem project={project} />

          <Solution project={project} />

          <TechStack project={project} />

          <Arch project={project} />

          <CoreFeatures project={project} />

          <Challenges project={project} />

          <FutureScope project={project} />
        </div>
      </div>
    </div>
  );
}
