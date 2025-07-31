"use client";

import type { Project } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Problem({ project }: { project: Project }) {
  return (
    <div>
      <Card className="bg-[#0A0A0A]/80 border-[#00A6ED]/20 transition-all duration-300 backdrop-blur-sm hover:border-[#00A6ED]/40">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl font-bold text-[#00A6ED] font-mono">
            Problem Statement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#F1F0EA]/80 text-sm sm:text-base lg:text-lg leading-relaxed font-mono">
            {project.problemStatement}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
