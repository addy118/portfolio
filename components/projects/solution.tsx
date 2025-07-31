"use client";

import { Project } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Solution({ project }: { project: Project}) {
  return (
    <div>
      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-100">
            Proposed Solution & Key Features
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            {project.solution.description}
          </p>
          <div>
            <h4 className="text-lg font-semibold text-gray-200 mb-4">
              Key Features
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.solution.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}