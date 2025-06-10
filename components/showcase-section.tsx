"use client";

import { Card, CardContent } from "@/components/ui/card";

const projects = [
  {
    name: "Fairshare",
    description: [
      "A smart, responsive full-stack PWA to manage and split group expenses with ease.",
      "Implemented secure Google OAuth login, direct UPI payments, PDF exports, email reminders, and a custom optimization algorithm that reduces settlement steps by up to 60%.",
    ],
    link: "https://fairshare.adityakirti.tech",
    image: "/fairshare_1898x863.png",
    stack:
      "TypeScript, PostgreSQL, React, Redux, RTK Query, Express, Node.js, Tailwind",
  },
  {
    name: "Cloudvault",
    description: [
      "A full-stack on-the-go cloud storage for uploading, retrieving, and sharing files with up to 10-file batch uploads and 99% uptime.",
      "Features secure JWT auth with auto token rotation, intuitive breadcrumb navigation, and Supabase-powered storage with shareable links and 5MB/file upload limit.",
    ],
    link: "https://cloudvault.adityakirti.tech",
    image: "/cloudvault_1919x904.png",
    stack: "PostgreSQL, React, Multer, Express, Node.js, Supabase, Tailwind",
  },
];

export const ShowcaseSection = () => {
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
                            className="text-start font-extralight text-sm sm:text-base py-1 sm:py-2"
                          >
                            {list}
                          </li>
                        ))}
                      </div>
                    </div>

                    <p className="font-extralight text-[#00A6ED]/80 px-2 sm:px-6 text-xs sm:text-sm">
                      {project?.stack}
                    </p>
                  </div>
                  <div
                    className={`flex items-center justify-center p-4 sm:p-6 lg:p-8 ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full max-w-[500px] h-auto object-cover rounded"
                    />
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
