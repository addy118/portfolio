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
    <div className="min-h-screen">
      <Background />
      <Navbar />
      <div className="container pt-28 mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-12">
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
