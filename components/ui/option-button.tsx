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
      className={`option-button flex items-center justify-between w-full pl-5 pr-5 py-4 rounded-xl border-2 transition-all shadow-sm ${
        selected
          ? "border-[#F7B500] bg-[#FFF9E6] shadow-md"
          : "border-gray-300 bg-white hover:border-[#F7B500] hover:shadow-md"
      } ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="text-left text-gray-900 font-semibold text-base flex-1 pr-4">
        {label}
      </span>
      <div
        className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ml-auto ${
          selected
            ? "border-[#F7B500] bg-[#F7B500] shadow-sm"
            : "border-gray-400 bg-white"
        }`}
      >
        {selected && <div className="w-3 h-3 rounded-full bg-white" />}
      </div>
    </motion.button>
  );
}
