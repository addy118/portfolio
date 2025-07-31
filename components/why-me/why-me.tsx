import { RenderSkill } from "./render-skill";
import { skills } from "../../lib/skills";

export interface Skill {
  name: string;
  image: string;
}

export interface SkillCardProps {
  skill: Skill;
  key: number;
}

const row1 = skills.slice(0, 4);
const row2 = skills.slice(4, 8);
const row3 = skills.slice(8, 13);

export default function WhyAdityaSection() {
  return (
    <section
      id="why-aditya"
      className="py-12 sm:py-16 lg:py-20 px-2 sm:px-4 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto font-mono text-center">
        <h2 className="text-[#00A6ED] text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-6 sm:mb-8">
          Why me?
        </h2>
        <h6 className="text-xs sm:text-lg lg:text-xl text-balance mb-6 sm:mb-8 text-[#F1F0EA] px-2">
          Because, I am skilled in working with the following technologies and
          tools and can help build software that is needed by you.
        </h6>

        <div className="space-y-3 sm:space-y-4">
          <RenderSkill skills={row1} />
          <RenderSkill skills={row2} />
          <RenderSkill skills={row3} />
        </div>
      </div>
    </section>
  );
}
