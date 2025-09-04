import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "./ThemeProvider";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  // body background set
  if (theme === true) {
    document.body.style.background =
      "linear-gradient(to bottom right, #f9f9f9, #dcdcdc)";
  } else {
    document.body.style.background =
      "linear-gradient(to bottom right, #0d0d0d, #1a1a1a)";
  }

  return (
    <div className="relative flex w-fit items-center rounded-full bg-white/10 backdrop-blur-md shadow-lg p-1 ">
      {/* Light Button */}
      <button
        className={`relative z-10 flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
          theme === true ? "text-white" : "text-slate-400"
        }`}
        onClick={() => setTheme(true)}
      >
        <FiSun className="text-lg" />
        <span className="hidden md:inline">Light</span>
      </button>

      {/* Dark Button */}
      <button
        className={`relative z-10 flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
          theme === false ? "text-white" : "text-slate-400"
        }`}
        onClick={() => setTheme(false)}
      >
        <FiMoon className="text-lg" />
        <span className="hidden md:inline">Dark</span>
      </button>

      {/* Animated Background */}
      <div
        className={`absolute inset-0 z-0 flex ${
          theme === false ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 shadow-md"
        />
      </div>
    </div>
  );
};

export default Theme;
