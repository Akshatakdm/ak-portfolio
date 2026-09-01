const experiences = [
  {
    company: "Communequation Media",
    role: "Full Stack Developer",
    period: "Jun 2025 - Present",
    description:
      "Building custom webinar platforms for enterprise clients, from React interfaces and APIs to databases, analytics and production deployments.",
  },
  {
    company: "Urja Communications",
    role: "Frontend Developer",
    period: "Oct 2022 - Jun 2025",
    description:
      "Worked across large BFSI websites and AMC projects, focusing on frontend development, performance, SEO, security and production releases.",
  },
  {
    company: "3 Minds Digital",
    role: "Web Developer",
    period: "Sep 2021 - Jul 2022",
    description:
      "Built and maintained client websites from scratch, translating designs into responsive interfaces with reusable frontend components.",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-t border-[#171a17]/10 dark:border-[#f5f3ee]/10"
    >
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">

        {/* Section Heading */}
        <p className="mb-12 text-xs font-semibold uppercase tracking-[0.2em] text-[#687267] dark:text-[#a8aea5]">
          Experience
        </p>

        {/* Experience List */}
        <div>
          {experiences.map((experience) => (
            <div
              key={`${experience.company}-${experience.period}`}
              className="border-b border-[#171a17]/10 py-8 dark:border-[#f5f3ee]/10"
            >
              {/* Company / Role / Period */}
              <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto] md:items-start md:gap-8">

                {/* Company */}
                <h2 className="text-xl font-semibold tracking-tight">
                  {experience.company}
                </h2>

                {/* Role */}
                <p className="text-[#687267] dark:text-[#a8aea5]">
                  {experience.role}
                </p>

                {/* Period */}
                <p className="text-sm text-[#687267] dark:text-[#a8aea5] md:text-right">
                  {experience.period}
                </p>
              </div>

              {/* Description */}
              <p className="mt-5 max-w-5xl text-base leading-7 text-[#687267] dark:text-[#a8aea5]">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;