import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; 

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button only after scrolling down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll smoothly to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      // fade in/out + fixed globally
      className={`fixed bottom-6 right-6 flex items-center justify-center
        w-12 h-12 rounded-full bg-gray-300 text-black shadow-lg
        transition-all duration-500 hover:bg-gray-200
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
        z-[200]`}
    >
      <ArrowUp size={22} />
    </button>
  );
};

export default ScrollToTopButton;
