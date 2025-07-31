"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, FileQuestionIcon, Github } from "lucide-react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import projects from "@/lib/showcase";
import { Badge } from "./ui/badge";

export const ShowcaseSection = () => {
  const router = useRouter();

  return (
    <section
      id="showcase"
      className="py-12 sm:py-16 lg:py-20 px-2 sm:px-4 lg:px-8 text-center relative font-mono"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 sm:mb-8 font-bold text-[#F1F0EA]">
            Showcase
          </h2>
          <p className="text-[#00A6ED] text-balance text-xs sm:text-lg mb-4 px-2">
            Some tools I've designed and developed from scratch to solve
            real-world problems.
          </p>
        </div>
        <div className="space-y-8 sm:space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-[#0A0A0A]/80 border-[#00A6ED]/20 overflow-hidden transition-all duration-300 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div
                    className={`p-4 sm:p-6 lg:p-8 flex flex-col justify-between ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-[#00A6ED]">
                        {project.name}
                      </h3>
                      <div className="text-[#F1F0EA]/70 text-xs sm:text-sm lg:text-lg mb-4 sm:mb-6 px-2 sm:px-4 leading-relaxed text-justify">
                        {project.description.map((list, i) => (
                          <li
                            key={i}
                            className="flex items-start text-start font-extralight text-sm sm:text-base py-1 sm:py-2 before:content-['➤'] before:mr-4 before:ml-1 before:text-[#00A6ED]/60 before:font-bold before:font-mono"
                          >
                            {list}
                          </li>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-2">
                      {project?.stack.map((tech) => (
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
                  <div
                    className={`flex flex-col gap-4 items-center justify-center p-4 sm:p-6 lg:p-8 ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full max-w-[500px] h-auto object-cover rounded"
                    />

                    <div className="flex items-center justify-between gap-4">
                      <Button
                        onClick={() => {
                          window.open(project.github, "_blank");
                        }}
                        className="bg-[#0A0A0A]/80 hover:bg-[#040404]/70 border-[#00A6ED]/20 text-[#00A6ED]/90 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-mono rounded-lg transition-all duration-100 border"
                      >
                        <Github color="#00A6ED" />
                        <span className="text-[#F1F0EA]">GitHub</span>
                      </Button>

                      <Button
                        onClick={() => {
                          window.open(project.live, "_blank");
                        }}
                        className="bg-[#0A0A0A]/80 hover:bg-[#040404]/70 border-[#00A6ED]/20 text-[#00A6ED]/90 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-mono rounded-lg transition-all duration-100 border"
                      >
                        <ExternalLink color="#00A6ED" />
                        <span className="text-[#F1F0EA]">Live</span>
                      </Button>

                      <Button
                        onClick={() => {
                          router.push(
                            `/projects/${project.name.toLowerCase()}`
                          );
                        }}
                        className="bg-[#0A0A0A]/80 hover:bg-[#040404]/70 border-[#00A6ED]/20 text-[#00A6ED]/90 px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-mono rounded-lg transition-all duration-100 border"
                      >
                        <FileQuestionIcon color="#00A6ED" />
                        <span className="text-[#F1F0EA]">Know More</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
