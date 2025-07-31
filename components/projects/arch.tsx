"use client";

import { Project } from "@/lib/projects";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="database-schema"
                className="border-gray-700"
              >
                <AccordionTrigger className="text-gray-200 hover:text-gray-100 hover:no-underline">
                  <div className="text-left">
                    <h4 className="text-lg font-semibold">
                      Database Entity Relationship Diagram
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">
                      View the complete database schema and relationships
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 mt-4">
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
        <Card className="bg-gray-900/50 border-gray-800">
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem
                value="high-level-arch"
                className="border-gray-700"
              >
                <AccordionTrigger className="text-gray-200 hover:text-gray-100 hover:no-underline">
                  <div className="text-left">
                    <h4 className="text-lg font-semibold">
                      System Workflow Overview
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">
                      View the complete system workflow and 
                      interactions
                    </p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 mt-4">
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
