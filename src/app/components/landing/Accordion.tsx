"use client";

import { useState } from "react";

interface AccordionItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

function AccordionItem({ question, answer, defaultOpen = false }: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-start justify-between gap-6 py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg font-medium text-navy md:text-xl">
          {question}
        </span>
        <span
          className="mt-1 shrink-0 text-sage transition-transform duration-200"
          aria-hidden="true"
          style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="pb-6 pr-8">
          <p className="leading-relaxed text-ink/80">{answer}</p>
        </div>
      )}
    </div>
  );
}

const faqs = [
  {
    question: "Are you private equity?",
    answer:
      "No. We are two individuals looking to acquire and personally operate one business for the long term. We are not a fund, and we are not looking to quickly resell a company.",
  },
  {
    question: "What happens if I contact you?",
    answer:
      "We will respond personally to schedule a brief, confidential conversation. There is no pressure and no obligation. Our goal is simply to learn about your business and understand what a thoughtful next chapter might look like for you.",
  },
  {
    question: "Will my information remain confidential?",
    answer:
      "Absolutely. We treat every inquiry with discretion. We will not share your information with third parties, and we are happy to sign a mutual non-disclosure agreement if you prefer.",
  },
  {
    question: "Am I obligated to sell if we speak?",
    answer:
      "Not at all. A conversation is simply a conversation. Many owners reach out to explore options without any intention of selling immediately. We respect that and will never pressure you.",
  },
  {
    question: "How do you approach succession conversations?",
    answer:
      "We begin by listening. Every business is different, and what matters most to each owner is personal. We focus on understanding your company, your people, and your goals — then determine together whether there may be a respectful path forward.",
  },
];

export default function FAQ() {
  return (
    <section className="border-t border-border bg-card px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-content">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-navy md:text-4xl">
          Frequently Asked Questions
        </h2>

        <div className="mt-10">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
