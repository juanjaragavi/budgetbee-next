"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

export interface ChatQuestion {
  id: string;
  botMessage: string;
  options: { label: string; value: string }[];
}

export interface GamingChatEntryProps {
  /** Bot persona name */
  botName: string;
  /** Greeting message from the bot */
  greeting: string;
  /** Array of 2-4 chat questions */
  questions: ChatQuestion[];
  /** Journey identifier for GA4 step tracking (e.g. "chat-robux-01") */
  journeyId: string;
  /** Theme color hex */
  themeColor: string;
  /** Lighter shade for hover */
  themeColorLight: string;
  /** Success message shown after all questions */
  successMessage: string;
  /** CTA button text */
  ctaButtonText: string;
  /** Secondary link text */
  ctaSecondaryText?: string;
  /** Destination URL */
  redirectTo: string;
}

interface ChatBubble {
  type: "bot" | "user";
  text: string;
}

export default function GamingChatEntry({
  botName,
  greeting,
  questions,
  journeyId,
  themeColor,
  themeColorLight,
  successMessage,
  ctaButtonText,
  ctaSecondaryText = "Watch a short ad to continue",
  redirectTo,
}: GamingChatEntryProps) {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatBubble[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(-1);
  const [isTyping, setIsTyping] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [showCta, setShowCta] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // Add a bot message with typing delay
  const addBotMessage = useCallback((text: string, delay = 1200) => {
    setIsTyping(true);
    setShowOptions(false);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setMessages((prev) => [...prev, { type: "bot", text }]);
        setIsTyping(false);
        resolve();
      }, delay);
    });
  }, []);

  // Initial greeting
  useEffect(() => {
    const init = async () => {
      await addBotMessage(`Hi! I'm ${botName}. ${greeting}`, 800);
      if (questions.length > 0) {
        setCurrentQuestion(0);
        await addBotMessage(questions[0].botMessage, 1000);
        setShowOptions(true);
      }
    };
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, showOptions, showCta, scrollToBottom]);

  const handleAnswer = useCallback(
    async (label: string) => {
      // Add user message
      setMessages((prev) => [...prev, { type: "user", text: label }]);
      setShowOptions(false);

      const nextIndex = currentQuestion + 1;
      if (nextIndex < questions.length) {
        setCurrentQuestion(nextIndex);
        await addBotMessage(questions[nextIndex].botMessage);
        setShowOptions(true);
      } else {
        // All questions done
        await addBotMessage(successMessage, 1500);
        setShowCta(true);
      }
    },
    [currentQuestion, questions, addBotMessage, successMessage],
  );

  const handleCta = useCallback(() => {
    router.push(redirectTo);
  }, [router, redirectTo]);

  const q =
    currentQuestion >= 0 && currentQuestion < questions.length
      ? questions[currentQuestion]
      : null;

  return (
    <section className="w-full min-h-screen flex flex-col bg-white">
      {/* Chat area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 max-w-2xl mx-auto w-full">
        <div className="space-y-4">
          {messages.map((msg, i) => {
            return (
              <div key={`msg-${i}`}>
                <div
                  className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-base ${
                      msg.type === "user"
                        ? "text-white rounded-br-sm"
                        : "bg-gray-100 text-gray-800 rounded-bl-sm"
                    }`}
                    style={
                      msg.type === "user"
                        ? { backgroundColor: themeColor }
                        : undefined
                    }
                  >
                    {msg.text}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Typing indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-sm">
                <div className="flex space-x-1.5">
                  <span
                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  />
                  <span
                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  />
                  <span
                    className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Options */}
          {showOptions && q && (
            <div
              id={`paso-${currentQuestion + 1}-${journeyId}`}
              className="space-y-2 pt-2"
            >
              {q.options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleAnswer(option.label)}
                  className="w-full py-3.5 px-5 rounded-xl text-white font-semibold text-base transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] shadow-md"
                  style={{ backgroundColor: themeColor }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = themeColorLight)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = themeColor)
                  }
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}

          {/* Final CTA */}
          {showCta && (
            <div className="pt-4 space-y-3">
              <button
                type="button"
                onClick={handleCta}
                className="w-full py-4 px-6 rounded-xl text-white font-bold text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
                style={{ backgroundColor: themeColor }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor = themeColorLight)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor = themeColor)
                }
              >
                {ctaButtonText}
              </button>
              <button
                type="button"
                onClick={handleCta}
                className="w-full text-sm text-gray-500 underline hover:text-gray-700 transition-colors"
              >
                {ctaSecondaryText}
              </button>
            </div>
          )}

          <div ref={chatEndRef} />
        </div>
      </div>

      {/* Ad Slot 1 — Below chat content */}
      <div className="w-full max-w-2xl mx-auto px-4">
        <div
          id="av_top"
          className="items-center justify-center flex w-full my-8"
        ></div>
      </div>

      {/* Footer */}
      <div className="text-center py-4 text-xs text-gray-400 border-t">
        <a href="/terms" className="hover:underline">
          Terms
        </a>
        {" | "}
        <a href="/privacy-policy" className="hover:underline">
          Privacy
        </a>
      </div>
    </section>
  );
}
