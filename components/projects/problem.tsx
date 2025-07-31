"use client";

import { Project } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Problem({ project }: { project: Project }) {
  return (
    <div>
      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-100">
            Problem Statement
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300 text-lg leading-relaxed">
            {project.problemStatement}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
