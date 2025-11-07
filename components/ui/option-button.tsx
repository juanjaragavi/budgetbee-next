"use client";

import { motion } from "framer-motion";

interface OptionButtonProps {
  id: string;
  label: string;
  selected: boolean;
  onClick: () => void;
  delay?: number;
  className?: string;
}

export default function OptionButton({
  id,
  label,
  selected,
  onClick,
  delay = 0,
  className = "",
}: OptionButtonProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={`option-button flex items-center justify-between w-full px-4 py-3 rounded-lg border-2 transition-all ${
        selected
          ? "border-[#F7B500] bg-[#FFF9E6]"
          : "border-gray-200 bg-white hover:border-gray-300"
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
    >
      <span className="text-left text-gray-900 font-medium text-sm">
        {label}
      </span>
      <div
        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
          selected
            ? "border-[#F7B500] bg-[#F7B500]"
            : "border-gray-300 bg-white"
        }`}
      >
        {selected && <div className="w-2 h-2 rounded-full bg-white" />}
      </div>
    </motion.button>
  );
}
