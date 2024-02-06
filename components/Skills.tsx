import { frontendSkills } from "@/constants/constant";

const Skills = () => {
  return (
    <div className="container mx-auto px-5 md:px-0 mb-10" id="skills">
      <h1 className="mb-5 text-4xl text-blue-500">Skills</h1>
      <div className="flex gap-2 flex-wrap">
        {frontendSkills.map((skill) => (
          <div
            key={skill.name}
            className="border rounded bg-zinc-900 p-1.5 w-fit border-gray-800 text-sm"
          >
            <img src={skill.image} alt={skill.name} style={{width: "32px", height: "32px"}} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
