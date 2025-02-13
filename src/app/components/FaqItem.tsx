"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#90C645] rounded-lg overflow-hidden">
      {/* Question */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 py-4 flex justify-between items-center 
                   bg-[#90C645] bg-opacity-25 hover:bg-[#D4EDB5] transition"
      >
        <span className="text-lg font-semibold text-gray-900">{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Plus className="text-gray-700" />
        </motion.span>
      </button>

      {/* Answer - Animated Slide Down */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="px-6 py-4 bg-white text-gray-700 text-left"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
