import React from 'react';
import { motion } from 'framer-motion';
import { skillsByCategory, certifications } from '../data/skills';
import { Award } from 'lucide-react';

const Skills: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="skills" className="section bg-white dark:bg-slate-900">
            <div className="container mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Title */}
                    <motion.h2 variants={itemVariants} className="section-title">
                        Skills & Expertise
                    </motion.h2>

                    {/* Skills by Category */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
                        {skillsByCategory.map((category, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemVariants}
                                className="card p-6"
                            >
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    {category.category}
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIdx) => (
                                        <motion.span
                                            key={skillIdx}
                                            whileHover={{ scale: 1.05 }}
                                            className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-semibold rounded-full text-sm hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors cursor-default"
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <motion.div variants={itemVariants} className="mt-16 pt-16 border-t border-gray-200 dark:border-slate-700">
                        <h3 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                            Certifications
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {certifications.map((cert, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={itemVariants}
                                    className="card p-6 flex items-start gap-4 card-hover"
                                >
                                    <Award className="text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                            {cert.name}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                                            {cert.issuer}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;