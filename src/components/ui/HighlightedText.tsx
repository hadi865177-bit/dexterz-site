import React from "react";
import { motion } from "framer-motion";

interface HighlightedTextProps {
  children: React.ReactNode;
  highlightColor?: string; // e.g. "#fef08a"
  className?: string;
  highlightOpacity?: number;
}

const HighlightedText: React.FC<HighlightedTextProps> = ({
  children,
  highlightColor = "#fef08a",
  className = "",
  highlightOpacity = 0.2,
}) => {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}>
      {/* the marker band */}
      <span
        aria-hidden="true"
        className="
          absolute
          left-[-0.12em] right-[-0.12em]
          bottom-[0.12em]
          h-[0.46em]
          -skew-x-6
          -z-10
          block
        "
        style={{
          backgroundColor: highlightColor,
          opacity: highlightOpacity,
          width: "90%",
          margin: "0 auto",
        }}
      />
      {/* the text */}
      <span className="relative">{children}</span>
    </motion.span>
  );
};

export default HighlightedText;
