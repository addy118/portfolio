"use client";

import { Project } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Challenges({ project }: { project: Project}) {
  return (
    <div>
      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-100">
            Technical Challenges Faced
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {project.challenges.map((item, index) => (
              <li key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <span className="text-gray-300">{item.challenge}</span>
              </li>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}