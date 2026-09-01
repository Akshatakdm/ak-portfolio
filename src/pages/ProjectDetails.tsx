import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { getProjectBySlug } from "../data/projects";

function ProjectDetails() {
    const { slug } = useParams();

    const project = slug ? getProjectBySlug(slug) : undefined;

    if (!project) {
        return (
            <section className="mx-auto flex min-h-[70vh] max-w-6xl items-center px-6 md:px-10">
                <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-[#687267] dark:text-[#a8aea5]">
                        404
                    </p>

                    <h1 className="mt-4 text-5xl font-semibold tracking-tight">
                        Project not found.
                    </h1>

                    <Link
                        to="/"
                        className="mt-8 inline-flex items-center gap-2 border-b border-[#171a17] pb-1 text-sm dark:border-[#f5f3ee]"
                    >
                        <ArrowLeft size={15} />
                        Back home
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-12 md:px-10 md:pb-24 md:pt-20">
            {/* Back */}
            <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-[#687267] transition-opacity hover:opacity-50 dark:text-[#a8aea5]"
            >
                <ArrowLeft size={15} />
                Back
            </Link>

            {/* Header */}
            <div className="mt-20 max-w-4xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#687267] dark:text-[#a8aea5]">
                    {project.category}
                </p>

                <h1 className="mt-5 text-6xl font-semibold leading-[0.9] tracking-[-0.05em] md:text-8xl">
                    {project.name}
                </h1>

                <p className="mt-8 max-w-2xl text-xl leading-8 text-[#687267] dark:text-[#a8aea5]">
                    {project.description}
                </p>
            </div>

            
            {/* Project Image */}
            <div className="mt-16 overflow-hidden rounded-sm bg-[#dedbd2] dark:bg-[#292f29] md:mt-20">
                <img
                    src={project.image}
                    alt={project.name}
                    className="block h-auto w-full"
                />
            </div>

            {/* Content */}
            <div className="mt-24 grid gap-16 md:grid-cols-[220px_1fr]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#687267] dark:text-[#a8aea5]">
                    The Idea
                </p>

                <p className="max-w-2xl text-lg leading-8">
                    {project.idea}
                </p>
            </div>

            <div className="mt-20 grid gap-16 md:grid-cols-[220px_1fr]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#687267] dark:text-[#a8aea5]">
                    The Build
                </p>

                <p className="max-w-2xl text-lg leading-8">
                    {project.built}
                </p>
            </div>

            {/* Stack */}
            <div className="mt-20 grid gap-16 md:grid-cols-[220px_1fr]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#687267] dark:text-[#a8aea5]">
                    Toolkit
                </p>

                <div className="flex max-w-2xl flex-wrap gap-x-4 gap-y-3">
                    {project.stack.map((technology) => (
                        <span
                            key={technology}
                            className="text-lg text-[#687267] dark:text-[#a8aea5]"
                        >
                            {technology}
                        </span>
                    ))}
                </div>
            </div>

            {/* Learned */}
            <div className="mt-20 grid gap-16 md:grid-cols-[220px_1fr]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#687267] dark:text-[#a8aea5]">
                    What I Learned
                </p>

                <p className="max-w-2xl text-lg leading-8">
                    {project.learned}
                </p>
            </div>

            {/* Links */}
            {(project.liveUrl || project.githubUrl) && (
                <div className="mt-24 flex flex-wrap gap-6 border-t border-[#171a17]/10 pt-8 dark:border-[#f5f3ee]/10">
                    {project.liveUrl && (
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-50"
                        >
                            View Live
                            <ExternalLink size={15} />
                        </a>
                    )}

                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-50"
                        >
                            GitHub ↗
                        </a>
                    )}
                </div>
            )}
        </section>
    );
}

export default ProjectDetails;