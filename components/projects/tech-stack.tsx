"use client";

import type { Project } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";

export default function TechStack({ project }: { project: Project }) {
  return (
    <div>
      <Card className="bg-[#0A0A0A]/80 border-[#00A6ED]/20 transition-all duration-300 backdrop-blur-sm hover:border-[#00A6ED]/40">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl font-bold text-[#00A6ED] font-mono">
            Technology Stack
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.techStack.map((category, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-lg font-semibold text-[#F1F0EA]/80 font-mono">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="default"
                      className="text-lg font-medium text-[#F1f0ea]/70 bg-[#00A6ED]/10 gap-2 flex items-center justify-between rounded-full max-w-max"
                    >
                      <p className="font-extralight text-[#00A6ED]/80 text-xs sm:text-sm hover:text-[#000] cursor-pointer">
                        {tech}
                      </p>
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
