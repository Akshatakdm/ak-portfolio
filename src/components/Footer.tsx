function Footer() {
  return (
    <footer className="border-t border-[#171a17]/10 dark:border-[#f5f3ee]/10">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          {/* Resume */}
          <div>
            <p className="text-lg font-semibold">
              Want to work together?
            </p>

            <p className="mt-2 text-[#687267]">
              Here&apos;s the formal version of me.
            </p>

            <a
              href="/public/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex border-b border-[#171a17] pb-1 text-sm font-medium transition-opacity hover:opacity-50"
            >
              Download Resume ↓
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-3 text-sm md:text-right">
            <a
              href="https://github.com/Akshatakdm"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-50"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/akshata-kadam-68bba3138/"
              target="_blank"
              rel="noreferrer"
              className="transition-opacity hover:opacity-50"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:kadam.akshata64@gmail.com"
              className="transition-opacity hover:opacity-50"
            >
              Email ↗
            </a>
          </div>
        </div>        
      </div>
    </footer>
  );
}

export default Footer;