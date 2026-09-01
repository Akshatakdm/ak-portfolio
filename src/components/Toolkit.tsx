const toolkit = {
  Frontend: [
    "React",
    "JavaScript",
    "jQuery",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind CSS",
    "Responsive Design",
    "Redux",
  ],

  "Backend & API": [
    "Node.js",
    "Express",
    "PHP",
    "MySQL",
    "CRUD",
    "REST APIs",
  ],

  "Tools & Platforms": [
    "Git",
    "Bitbucket",
    "VS Code",
    "Figma",
    "Zeplin",
    "Chrome DevTools",
    "Postman",
  ],

  "DevOps & Deployment": [
    "cPanel",
    "Linux",
    "WinSCP",
    "PuTTY",
    "FTP",
    "AWS S3",
  ],

  Security: [
    "VAPT Fixes",
    "Cookie / Session Security",
    "CAPTCHA",
    "Rate Limiting",
  ],
};

function Toolkit() {
  return (
    <section
      id="toolkit"
      className="border-t border-[#171a17]/10 dark:border-[#f5f3ee]/10"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-32">

        {/* Section Heading */}
        <p className="mb-16 text-xs font-semibold uppercase tracking-[0.2em] text-[#687267] dark:text-[#a8aea5]">
          Toolkit
        </p>

        {/* Toolkit Categories */}
        <div className="space-y-12">
          {Object.entries(toolkit).map(([category, skills]) => (
            <div
              key={category}
              className="grid gap-4 md:grid-cols-[220px_1fr]"
            >
              <h2 className="font-semibold">
                {category}
              </h2>

              <p className="max-w-3xl leading-8 text-[#687267] dark:text-[#a8aea5]">
                {skills.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Toolkit;