import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-50 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-[#171a17]/15 bg-[#f5f3ee]/90 text-[#171a17] backdrop-blur-md transition-all duration-300 hover:bg-[#171a17] hover:text-[#f5f3ee] dark:border-[#f5f3ee]/20 dark:bg-[#171a17]/90 dark:text-[#f5f3ee] dark:hover:bg-[#f5f3ee] dark:hover:text-[#171a17]"
    >
      <ArrowUp size={16} strokeWidth={1.8} />
    </button>
  );
}

export default ScrollTopButton;