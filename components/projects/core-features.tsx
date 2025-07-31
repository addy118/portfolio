"use client";

import { Project } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function CoreFeatures({ project }: { project: Project }) {
  return (
    <div>
      <Card className="bg-gray-900/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-100">
            Core Feature Workflows
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {project.coreFeatures.map((feature, index) => (
              <AccordionItem
                key={index}
                value={`feature-${index}`}
                className="border-gray-700"
              >
                <AccordionTrigger className="text-gray-200 hover:text-gray-100 hover:no-underline">
                  <div className="text-left">
                    <h4 className="text-lg font-semibold">{feature.title}</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      {feature.description}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 mt-4">
                    <img
                      src={feature.svg || "/placeholder.svg"}
                      alt={`${feature.title} Architecture`}
                      className="w-full h-auto max-w-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `/placeholder.svg?height=300&width=700&text=${encodeURIComponent(
                          feature.title
                        )}`;
                      }}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
