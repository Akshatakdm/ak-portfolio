import { Link, useLocation, useNavigate } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

type HeaderProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
};

function Header({
  darkMode,
  setDarkMode,
}: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#f5f3ee]/90 backdrop-blur-md dark:bg-[#171a17]/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">

        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-bold tracking-tight"
        >
          AK
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm">
          <button
            type="button"
            onClick={() => scrollToSection("experience")}
            className="cursor-pointer transition-opacity hover:opacity-50"
          >
            Work
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("projects")}
            className="cursor-pointer transition-opacity hover:opacity-50"
          >
            Projects
          </button>

          <button
            type="button"
            onClick={() => scrollToSection("toolkit")}
            className="cursor-pointer transition-opacity hover:opacity-50"
          >
            Toolkit
          </button>

          {/* Theme Toggle */}
          <button
            type="button"
            aria-label={
              darkMode
                ? "Switch to light mode"
                : "Switch to dark mode"
            }
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-[#171a17]/15 transition hover:bg-[#171a17] hover:text-[#f5f3ee] dark:border-[#f5f3ee]/20 dark:hover:bg-[#f5f3ee] dark:hover:text-[#171a17]"
          >
            {darkMode ? (
              <Sun size={15} strokeWidth={1.8} />
            ) : (
              <Moon size={15} strokeWidth={1.8} />
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;