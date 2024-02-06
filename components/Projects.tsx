import { projects } from "@/constants/constant";
import { FiGithub } from "react-icons/fi";
import { FaLink } from "react-icons/fa";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="container mx-auto px-5 pb-10 md:px-0" id="projects">
      <h1 className="mb-5 text-4xl text-blue-500">Projects</h1>

      <div className="flex items-center justify-between flex-wrap">
        {projects.map((project) => (
          <div
            className="bg-zinc-800 bg-opacity-20 hover:border-gray-500 transition-all duration-500 border-gray-800 border rounded-md p-6 w-full md:w-[49%] flex flex-col justify-between items-center mb-5 gap-4"
            key={project.id}
          >
            <div className="w-full flex items-center justify-end gap-5">
              <Link href={project.githubLink} target="_blank">
                <FiGithub size={20} />
              </Link>
              <Link href={project.liveLink} target="_blank">
                <FaLink size={24} />
              </Link>
            </div>
            <div className="image-container">
              <img src={project.image} alt={project.title} className="w-90 h-65 object-cover full hover:-translate-y-1 transition-transform" />
            </div>
            <h3>{project.title.toUpperCase()}</h3>
            <div className="flex gap-2 flex-wrap items-center justify-center">
              {project.technologies.map((tech, index) => (
                <span key={index} className="text-blue-500 text-sm">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
