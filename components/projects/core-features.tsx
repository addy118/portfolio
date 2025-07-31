"use client";

import type { Project } from "@/lib/projects";
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
      <Card className="bg-[#0A0A0A]/80 transition-all duration-300 backdrop-blur-sm border-[#00A6ED]/20  hover:border-[#00A6ED]/40">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl font-bold text-[#00A6ED] font-mono">
            Core Feature Workflows
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {project.coreFeatures.map((feature, index) => (
              <AccordionItem
                key={index}
                value={`feature-${index}`}
                className="mb-4 border-b-0 border border-[#00A6ED]/20  hover:border-[#00A6ED]/40 rounded-md px-4"
              >
                <AccordionTrigger className="text-[#F1F0EA] hover:text-[#00A6ED] hover:no-underline font-mono ">
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-[#00A6ED] font-mono">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-[#F1F0EA]/80 mt-1 font-mono">
                      {feature.description}
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="bg-[#0A0A0A]/50 rounded-lg p-6 border border-[#00A6ED]/20">
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
