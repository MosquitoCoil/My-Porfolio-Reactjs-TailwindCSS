import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaGithub,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiFlask,
  SiMysql,
  SiCanva,
  SiExpo,
} from "react-icons/si";

const techStack = [
  {
    category: "Design & Prototyping",
    items: [
      { name: "Figma", icon: <FaFigma size={40} className="text-pink-500" /> },
      {
        name: "Adobe Photoshop",
        icon: (
          <img
            src="/icons/photoshop.svg"
            alt="Photoshop"
            className="w-10 h-10"
          />
        ),
      },
      {
        name: "Canva",
        icon: <SiCanva size={40} className="text-cyan-500" />,
      },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      {
        name: "HTML5",
        icon: <FaHtml5 size={40} className="text-orange-600" />,
      },
      { name: "CSS3", icon: <FaCss3Alt size={40} className="text-blue-600" /> },
      {
        name: "Bootstrap",
        icon: <SiBootstrap size={40} className="text-purple-600" />,
      },
      {
        name: "TailwindCSS",
        icon: <SiTailwindcss size={40} className="text-cyan-400" />,
      },
      {
        name: "ReactJS",
        icon: <FaReact size={40} className="text-cyan-500" />,
      },
    ],
  },
  {
    category: "Mobile Development",
    items: [
      {
        name: "React Native",
        icon: <FaReact size={40} className="text-cyan-500" />,
      },
      { name: "Expo", icon: <SiExpo size={40} className="text-orange-400" /> },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Flask", icon: <SiFlask size={40} className="text-gray-600" /> },
      { name: "MySQL", icon: <SiMysql size={40} className="text-blue-600" /> },
      {
        name: "phpMyAdmin",
        icon: <FaPython size={40} className="text-yellow-500" />,
      },
    ],
  },
  {
    category: "Other Tools & Technologies",
    items: [
      {
        name: "Visual Studio Code",
        icon: (
          <img src="/icons/vscode.svg" alt="VScode" className="w-10 h-10" />
        ),
      },
      {
        name: "GitHub",
        icon: <FaGithub size={40} className="text-gray-300" />,
      },
      {
        name: "Visual Basic",
        icon: <FaPython size={40} className="text-purple-700" />,
      },
    ],
  },
];

export default function TechStack() {
  return (
    <motion.section
      className="bg-gray-950 text-white py-16 font-mono"
      id="TechStack"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Tech Stack
        </motion.h2>
        <p className="text-center text-gray-300 mb-12">
          These are the tools and technologies I work with.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {techStack.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 shadow-md hover:border-cyan-400 hover:shadow-cyan-400 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4">{section.category}</h3>
              <div className="flex flex-wrap gap-4">
                {section.items.map((tech, i) => (
                  <motion.div
                    key={i}
                    className="flex flex-col items-center w-20"
                    whileHover={{ scale: 1.2 }}
                  >
                    {tech.icon}
                    <span className="text-sm mt-2 text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
