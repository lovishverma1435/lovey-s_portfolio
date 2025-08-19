import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

function Fontui({
  words = [], // ✅ tumhare words
  typingSpeed = 200,
  deleteSpeed = 80,
  delayBetweenWords = 1500,
  cursorBlinkSpeed = 0.4,
  className = "",
  outofspan = "I am ", // ✅ span ke bahar ka text
  inspan = "", // ✅ span ke andar ka prefix text
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const controls = useAnimationControls();

  // Typing / Deleting logic
  useEffect(() => {
    const word = words[currentWordIndex];
    let timer;

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timer = setTimeout(() => {
          setCurrentText(word.substring(0, currentText.length - 1));
        }, deleteSpeed);
      }
    } else {
      if (currentText === word) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      } else {
        timer = setTimeout(() => {
          setCurrentText(word.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, words, typingSpeed, deleteSpeed, delayBetweenWords]);

  // Cursor blinking animation
  useEffect(() => {
    controls.start({
      opacity: [0.2, 1],
      transition: {
        duration: cursorBlinkSpeed,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls, cursorBlinkSpeed]);

  return (
    <div className="flex items-start justify-start">
      <div className={`font-semibold italic bg-gradient-to-r from-[#ff4974] to-[#4fc3f7] bg-clip-text text-transparent font-inter ${className}`}>
        <span className={`text-white`}>
          {outofspan}
        </span>
        <span className="text-customTeal">
          {inspan}
          {currentText}
        </span>
        <motion.span animate={controls} className="inline-block bg-gradient-to-r from-[#ff4974] to-[#4fc3f7] bg-clip-text text-transparent">
          |
        </motion.span>
      </div>
    </div>
  );
}

export default Fontui;