"use client";

import type { Project } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Challenges({ project }: { project: Project }) {
  return (
    <div>
      <Card className="bg-[#0A0A0A]/80 border-[#00A6ED]/20 transition-all duration-300 backdrop-blur-sm hover:border-[#00A6ED]/40">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl font-bold text-[#00A6ED] font-mono">
            Technical Challenges Faced
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {project.challenges.map((item, index) => (
              <li
                key={index}
                className="flex items-start text-start font-extralight text-sm sm:text-base py-1 sm:py-2 before:content-['➤'] before:mr-4 before:ml-1 before:text-[#00A6ED]/60 before:font-bold before:font-mono"
              >
                <span className="text-[#F1F0EA]/80 font-mono">
                  {item.challenge}
                </span>
              </li>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// ↳
// ➢
// ➤
// ⇀
