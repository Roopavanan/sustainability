"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  { id: 1, name: "Shalini kumar", role: "Sustainability Lead Facilitator", image: "/img/team/shalini.jpg" },
  { id: 2, name: "Sanjeevani", role: "Evolve Facilitator", image: "/img/team/sanjeevani.heic" },
  { id: 3, name: "Ashwini Bakshi", role: "Inner Growth Facilitator", image: "/img/team/ashwini.jpg" },
  { id: 4, name: "Lucas Dengal", role: "Expert in Health, Hygiene and Nutrient Cycle", image: "/img/team/lucas.jpeg" },
  { id: 5, name: "Joss Brook", role: "Auroville Pioneer, Pitchandikulam Forests", image: "/img/team/joss.jpg" },
  { id: 6, name: "Rishi Kapoor", role: " Expertise in Solar Energy", image: "/img/team/rishi.jpg" },
  { id: 7, name: "Anshul", role: "Expertise in Soil Science and Agroecology", image: "/img/team/anshul.png" },
  { id: 8, name: "Thara Jasmine", role: "Sustainability Content Analyst", image: "/img/team/thara.jpg" },
  { id: 9, name: "Amila Suman", role: "Sustainability Content Analyst", image: "/img/team/amila.jpeg" },
  { id: 10, name: "Rahul Palekar", role: "Circular Economy Expert", image: "/img/team/rahul.jpg" },
  { id: 11, name: "Ujjay Mohan", role: "Impact Catalyst ESG Expert", image: "/img/team/ujjay.jpg" },
  { id: 12, name: "Rithika", role: "Social Impact Expert", image: "/img/team/rithika.jpg" },
  { id: 13, name: "Vijai Krishnaraj", role: "Water Expert, Auroville ", image: "/img/team/vijai.jpg" },
];

const TeamSection = () => {
  return (
    <section className="py-12 text-center">
      <h2 className="text-[#90C645] text-6xl font-bold mb-8">Our Team</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative w-[233px] h-[372px] rounded-2xl overflow-hidden shadow-xl"
            >
              {/* Image Section */}
              <Image
                src={member.image}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />

              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1B360F] to-transparent p-4 text-center">
                <h3 className="text-white text-lg font-semibold">{member.name}</h3>
                <p className="text-white text-sm">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
