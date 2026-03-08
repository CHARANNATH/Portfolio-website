import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const experiences = [
    {
      title: "Systems Engineer",
      company: "Infosys – Hyderabad, India",
      duration: "2025 July – Present",
      description: "Working as a Systems Engineer involved in developing and maintaining enterprise-level applications. Contributing to backend logic, debugging applications, and collaborating with cross-functional teams to deliver scalable and efficient solutions. Participating in code reviews and improving application performance."
    },
    {
      title: "Associate Software Engineer Intern",
      company: "Accenture – India",
      duration: "2025-Feb – 2025-June",
      description: "Worked on enterprise software development and application support projects. Assisted in implementing new features, resolving bugs, and improving system functionality while collaborating with senior developers and project teams."
    }
  ];

  return (
    <section id="experience" className="section bg-white dark:bg-slate-900">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Title */}
          <motion.h2 variants={itemVariants} className="section-title">
            Experience
          </motion.h2>

          {/* Experience Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card p-6"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 mb-4">{exp.duration}</p>
                <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;