"use client";

import type { Project } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Solution({ project }: { project: Project }) {
  return (
    <div>
      <Card className="bg-[#0A0A0A]/80 border-[#00A6ED]/20 transition-all duration-300 backdrop-blur-sm hover:border-[#00A6ED]/40">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl font-bold text-[#00A6ED] font-mono">
            Proposed Solution & Key Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-[#F1F0EA]/80 text-sm sm:text-base lg:text-lg leading-relaxed font-mono">
            {project.solution.description}
          </p>
          <div>
            <h4 className="text-lg font-semibold text-[#00A6ED] mb-4 font-mono">
              Key Features
            </h4>
            <ul className="space-y-2">
              {project.solution.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start text-start font-extralight text-sm sm:text-base py-1 sm:py-2 before:content-['➤'] before:mr-4 before:ml-1 before:text-[#00A6ED]/60 before:font-bold before:font-mono"
                >
                  <span className="text-[#F1F0EA]/80 font-mono">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
