"use client";

import type { Project } from "@/lib/projects";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Arch({ project }: { project: Project }) {
  return (
    <>
      {/* Database Schema */}
      <div>
        <Card className="bg-[#0A0A0A]/80 border-[#00A6ED]/20 transition-all duration-300 backdrop-blur-sm hover:border-[#00A6ED]/40">
          <CardContent className="pb-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="database-schema"
                className="border-[#00A6ED]/20 border-b-0"
              >
                <AccordionTrigger className="text-[#F1F0EA] hover:text-[#00A6ED] hover:no-underline font-mono">
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-[#00A6ED] font-mono">
                      Database Entity Relationship Diagram
                    </h4>
                    <p className="text-sm text-[#F1F0EA]/80 mt-1 font-mono">
                      View the complete database schema and relationships
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="bg-[#0A0A0A]/50 rounded-lg p-6 border border-[#00A6ED]/20">
                    <img
                      src={project.dbSchemaSvg || "/placeholder.svg"}
                      alt={`${project.title} Database Schema`}
                      className="w-full h-auto max-w-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "/placeholder.svg?height=400&width=800&text=Database+Schema+Diagram";
                      }}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>

      {/* High-Level Architecture */}
      <div>
        <Card className="bg-[#0A0A0A]/80 border-[#00A6ED]/20 transition-all duration-300 backdrop-blur-sm hover:border-[#00A6ED]/40">
          <CardContent className="pb-0">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="high-level-arch"
                className="border-[#00A6ED]/20"
              >
                <AccordionTrigger className="text-[#F1F0EA] hover:text-[#00A6ED] hover:no-underline font-mono">
                  <div className="text-left">
                    <h4 className="text-lg font-semibold text-[#00A6ED] font-mono">
                      System Workflow Overview
                    </h4>
                    <p className="text-sm text-[#F1F0EA]/80 mt-1 font-mono">
                      View the complete system workflow and interactions
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="bg-[#0A0A0A]/50 rounded-lg p-6 border border-[#00A6ED]/20">
                    <img
                      src={project.highLevelArchSvg || "/placeholder.svg"}
                      alt={`${project.title} High-Level Architecture`}
                      className="w-full h-auto max-w-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "/placeholder.svg?height=400&width=800&text=High-Level+Architecture+Diagram";
                      }}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
