"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import OptionButton from "../ui/option-button";
import { step2Strings } from "@/lib/strings";
import { commonStrings } from "@/lib/constants";
import ProgressIndicator from "../ProgressIndicator";

interface Step2Props {
  formData: {
    income: string;
  };
  updateFormData: (data: { income: string }) => void;
}

export default function Step2({ formData, updateFormData }: Step2Props) {
  const [selected, setSelected] = useState(formData.income);

  const options = step2Strings.options;

  const handleSelect = (id: string) => {
    setSelected(id);
    updateFormData({ income: id });
  };

  return (
    <div className="space-y-6">
      <ProgressIndicator step={2} />

      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">
          {step2Strings.title}
        </h2>
        <motion.h3
          className="text-lg font-semibold text-[#F7B500]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {step2Strings.question}
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
            className="pregunta_2"
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
