"use client";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface Platform {
  logo: string;
  name: string;
  link: string;
  username: string;
  stats: {
    easy: number;
    medium: number;
    hard: number;
    total: number;
  };
}

export default function Platform({ platforms }: { platforms: Platform[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-6">
      {platforms.map((platform, index) => (
        <Card
          key={index}
          className="bg-[#0A0A0A]/80 border-[#00A6ED]/20 transition-all duration-300 cursor-pointer backdrop-blur-sm"
          onClick={() => window.open(platform.link, "_blank")}
        >
          <CardContent className="p-4 sm:p-6 text-center">
            <img
              src={platform.logo || "/placeholder.svg"}
              alt={`${platform.name} logo`}
              className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-lg"
            />
            <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
              <h3 className="text-lg sm:text-xl font-semibold text-[#00A6ED]">
                {platform.name}
              </h3>
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-[#00A6ED]" />
            </div>

            <div className="space-y-2">
              <p className="text-[#F1F0EA] font-medium text-sm sm:text-base">
                Total Problems:{" "}
                <span className="text-[#00A6ED]">{platform.stats.total}</span>
              </p>

              <div className="grid grid-cols-3 gap-1 sm:gap-2 text-xs sm:text-sm">
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-1 sm:p-2">
                  <div className="text-green-400 font-medium">Easy</div>
                  <div className="text-[#F1F0EA]">{platform.stats.easy}</div>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-1 sm:p-2">
                  <div className="text-yellow-400 font-medium">Medium</div>
                  <div className="text-[#F1F0EA]">{platform.stats.medium}</div>
                </div>
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-1 sm:p-2">
                  <div className="text-red-400 font-medium">Hard</div>
                  <div className="text-[#F1F0EA]">{platform.stats.hard}</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
