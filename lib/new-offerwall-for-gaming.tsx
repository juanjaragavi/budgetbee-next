import type { GamingQuizConfig } from "@/lib/gaming-quiz-config";

interface GamingOfferwallProps {
  config: GamingQuizConfig;
}

export default function GamingOfferwall({ config }: GamingOfferwallProps) {
  const texts = JSON.stringify({
    loading: config.loadingMessage,
    ctaTitle: "Exclusive rewards are waiting for you!",
    ctaButton: "Claim my rewards",
    ctaDisclaimer: "To continue, it will be necessary to watch an ad.",
  });

  return (
    <div
      data-topads-quiz=""
      data-quiz-accent={config.themeColor}
      data-topads-texts={texts}
      aria-hidden="true"
      style={{
        position: "fixed",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: 0,
        overflow: "hidden",
        opacity: 0,
        pointerEvents: "none",
        whiteSpace: "nowrap",
        clipPath: "inset(50%)",
      }}
    >
      {config.questions.map((q) => (
        <div key={q.id} data-quiz-question="">
          <span
            data-question-text=""
            style={{
              all: "unset",
              display: "block",
            }}
          >
            {q.question}
          </span>
          {q.options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              data-answer=""
              style={{
                all: "unset",
                display: "block",
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}
