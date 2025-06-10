import { FC } from "react";
import { SkillCardProps } from "./why-aditya-section";

export const SkillCard: FC<SkillCardProps> = ({ skill, key }) => {
  return (
    <div
      key={key}
      className="text-lg font-medium text-[#F1f0ea]/70 bg-[#00A6ED]/10 px-4 py-2 gap-2 flex items-center justify-between rounded-full max-w-max"
    >
      <img width="30" src={skill.image} alt={skill.name} title={skill.name} />
      <div>{skill.name}</div>
    </div>
  );
};
