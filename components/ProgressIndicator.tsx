"use client";

export default function ProgressIndicator({ step }: { step: number }) {
  const steps = [
    { number: 1, label: "Preferences" },
    { number: 2, label: "Income" },
    { number: 3, label: "Details" },
  ];

  return (
    <div className="flex justify-center items-start gap-4 mb-6">
      {steps.map((s, index) => (
        <div key={s.number} className="flex flex-col items-center">
          {/* Step circle */}
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
              step >= s.number
                ? "bg-[#F7B500] text-gray-900"
                : "bg-gray-300 text-gray-500"
            }`}
          >
            {step > s.number ? "✓" : s.number}
          </div>
          {/* Step label */}
          <div
            className={`mt-1 text-xs font-medium ${
              step >= s.number ? "text-gray-900" : "text-gray-400"
            }`}
          >
            {s.label}
          </div>
          {/* Connector line */}
          {index < steps.length - 1 && (
            <div className="absolute top-5 left-1/2 w-16 h-0.5 bg-gray-300 -translate-x-1/2 hidden sm:block" />
          )}
        </div>
      ))}
    </div>
  );
}
