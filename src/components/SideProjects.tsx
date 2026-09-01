import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function SideProjects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 border-t border-[#171a17]/10 dark:border-[#f5f3ee]/10"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">

        {/* Section Heading */}
        <p className="mb-12 text-xs font-semibold uppercase tracking-[0.2em] text-[#687267] dark:text-[#a8aea5]">
          Things I Built
        </p>

        {/* Projects */}
        <div>
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/work/${project.slug}`}
              className="group block border-b border-[#171a17]/10 py-8 dark:border-[#f5f3ee]/10"
            >
              <div className="flex items-center justify-between gap-6">

                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.12em] text-[#687267] dark:text-[#a8aea5]">
                    {project.category}
                  </p>

                  <h2 className="text-2xl font-semibold tracking-tight transition-transform duration-300 group-hover:translate-x-2">
                    {project.name}
                  </h2>

                  <p className="mt-3 max-w-xl text-[#687267] dark:text-[#a8aea5]">
                    {project.shortDescription}
                  </p>

                  <p className="mt-5 text-xs uppercase tracking-[0.12em] text-[#687267] dark:text-[#a8aea5]">
                    {project.stack.slice(0, 4).join(" · ")}
                  </p>
                </div>

                {/* Arrow */}
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>

              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SideProjects;