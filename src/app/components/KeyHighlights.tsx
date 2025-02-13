import { motion } from "framer-motion";
import Image from "next/image";

const KeyHighlights = () => {
  const highlights = [
    "In-person sessions with industry experts.",
    "Immersive learning in Auroville's unique, sustainable ecosystem.",
    "Hands-on projects and real-world case studies.",
    "Paid (3-6 months) Internships with Yuvabe for the top 5 students of the course.",
    "Certification recognized by universities and employers.",
    "Affordable and inclusive, with scholarships available.",
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white text-center">
      {/* Title */}
      <h2 className="text-6xl font-semibold text-[#90C465] mb-10">Key Highlights</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-center">
        {/* Left Side Highlights */}
        <div className="space-y-10">
          {highlights.slice(0, 3).map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#90C645] bg-opacity-25 border border-1 border-[#90C645] p-4 rounded-lg shadow-md text-black text-left w-[320px] h-[90px]"
            >
              {text}
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center"
        >
          <Image src="/img/plant.png" alt="Growing Plant" width={300} height={300} />
          <p className="  bg-[#90C645] bg-opacity-25 border border-1 border-[#90C645] p-4 rounded-lg shadow-md text-black text-left w-[320px] h-[90px] z-50">
            Grow with Yuvabe’s signature Evolve Program.
          </p>
        </motion.div>

        {/* Right Side Highlights */}
        <div className="space-y-10">
          {highlights.slice(3, 6).map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-[#90C645] bg-opacity-25 border border-1 border-[#90C645] p-3 rounded-lg shadow-md text-black text-left w-[320px] h-[90px]"
            >
              {text}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
