import type { FC } from "react";
import type { Skill } from "./why-me";

export const RenderSkill: FC<{ skills: Skill[] }> = ({ skills }) => {
  return (
    <div className="flex gap-2 sm:gap-3 lg:gap-4 mb-3 sm:mb-4 items-center justify-center flex-wrap px-2">
      {skills.map((skill, i) => (
        <div
          key={i}
          className="text-xs sm:text-base lg:text-lg font-medium text-[#F1f0ea]/70 bg-[#00A6ED]/10 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 gap-1 sm:gap-2 flex items-center justify-between rounded-full max-w-max"
        >
          <img
            width="20"
            height="20"
            className="w-3 h-3 sm:w-6 sm:h-6 lg:w-7 lg:h-7"
            src={skill.image || "/placeholder.svg"}
            alt={skill.name}
            title={skill.name}
          />
          <div className="whitespace-nowrap">{skill.name}</div>
        </div>
      ))}
    </div>
  );
};
