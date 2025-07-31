"use client";

import { Project } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "../ui/badge";

export default function TechStack({ project }: { project: Project }) {
  return (
    <div>
      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-100">
            Technology Stack
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.techStack.map((category, index) => (
              <div key={index} className="space-y-3">
                <h4 className="text-lg font-semibold text-gray-200">
                  {category.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-lg font-medium text-[#F1f0ea]/70 bg-[#00A6ED]/10 px-4 py-2 gap-2 flex items-center justify-between rounded-full max-w-max"
                    >
                      {tech}
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
