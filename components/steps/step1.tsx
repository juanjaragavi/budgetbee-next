"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import OptionButton from "../ui/option-button";
import { step1Strings } from "@/lib/strings";
import { commonStrings } from "@/lib/constants";
import ProgressIndicator from "../ProgressIndicator";

interface Step1Props {
  formData: {
    preference: string;
  };
  updateFormData: (data: { preference: string }) => void;
}

export default function Step1({ formData, updateFormData }: Step1Props) {
  const [selected, setSelected] = useState(formData.preference);

  const options = step1Strings.options;

  const handleSelect = (id: string) => {
    setSelected(id);
    updateFormData({ preference: id });
  };

  return (
    <div className="space-y-6">
      <ProgressIndicator step={1} />

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">
          {step1Strings.title}
        </h2>
        <motion.h3
          className="text-lg font-semibold text-[#F7B500]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {step1Strings.question}
        </motion.h3>
      </div>

      <motion.div
        className="space-y-3 mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, staggerChildren: 0.1 }}
      >
        {options.map((option, index) => (
          <OptionButton
            key={option.id}
            id={option.id}
            label={option.label}
            selected={selected === option.id}
            onClick={() => handleSelect(option.id)}
            delay={0.1 * index}
            className="pregunta_1"
          />
        ))}
      </motion.div>

      <div className="mt-8 pt-4">
        <p className="text-center text-xs text-gray-500">
          {commonStrings.copyright}
        </p>
      </div>
    </div>
  );
}
