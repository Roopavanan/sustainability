"use client";

import { motion, AnimatePresence } from "framer-motion";
import FaqItem from "./FaqItem";

const faqs = [
  {
    question: "How does this internship differ from online courses?",
    answer: "This internship provides hands-on experience, real projects, and mentorship.",
  },
  {
    question: "What career opportunities can I expect post-internship?",
    answer: "You can explore roles in AI, ML, Data Science, and Software Development.",
  },
  {
    question: "Will I receive a certificate?",
    answer: "Yes! A certification will be provided upon successful completion.",
  },
  {
    question: "Can I apply if I have no prior AI/ML experience?",
    answer: "Absolutely! This program is designed for beginners as well as experienced learners.",
  },
  {
    question: "Who is eligible to apply for the AI & ML internship?",
    answer: "Anyone with a passion for AI & ML can apply, irrespective of academic background.",
  },
  {
    question: "How does this internship differ from online courses?",
    answer: "This internship provides hands-on experience, real projects, and mentorship.",
  },
  {
    question: "What career opportunities can I expect post-internship?",
    answer: "You can explore roles in AI, ML, Data Science, and Software Development.",
  },
  {
    question: "Will I receive a certificate?",
    answer: "Yes! A certification will be provided upon successful completion.",
  },
  {
    question: "Can I apply if I have no prior AI/ML experience?",
    answer: "Absolutely! This program is designed for beginners as well as experienced learners.",
  },
  {
    question: "Who is eligible to apply for the AI & ML internship?",
    answer: "Anyone with a passion for AI & ML can apply, irrespective of academic background.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-3xl md:text-4xl font-bold text-[#7CB518]"
      >
        Interactive FAQs
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
        className="text-gray-600 mt-2"
      >
        Click each question to reveal the answer
      </motion.p>

      {/* FAQ Items */}
      <div className="mt-8 max-w-4xl mx-auto space-y-4">
        <AnimatePresence>
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: index * 0.1 }}
            >
              <FaqItem question={faq.question} answer={faq.answer} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
