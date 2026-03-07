import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
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

    return (
        <section id="about" className="section bg-gray-50 dark:bg-slate-800">
            <div className="container mx-auto">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Title */}
                    <motion.h2 variants={itemVariants} className="section-title">
                        About Me
                    </motion.h2>

                    {/* Content Grid */}
                    <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
                        {/* Text Content */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Charannath Chowdary</span>, 
                                a Systems Engineer at <span className="font-semibold">Infosys</span>, based in Hyderabad. 
                                With a strong foundation in software development and a passion for technology, 
                                I enjoy crafting efficient and scalable solutions that make a real difference.
                            </p>

                            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                My journey in tech has equipped me with a diverse skill set spanning multiple programming 
                                languages and frameworks. I specialize in developing web applications and have a keen interest 
                                in exploring emerging technologies. I believe in the power of collaboration and continuous learning.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <span className="badge">Problem Solver</span>
                                <span className="badge">Full-Stack Developer</span>
                                <span className="badge">Team Player</span>
                            </div>
                        </motion.div>

                        {/* Stats */}
                        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
                            <div className="card card-hover p-6 text-center">
                                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">3+</div>
                                <div className="text-gray-600 dark:text-gray-400">Years in Tech</div>
                            </div>
                            <div className="card card-hover p-6 text-center">
                                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">10+</div>
                                <div className="text-gray-600 dark:text-gray-400">Projects Completed</div>
                            </div>
                            <div className="card card-hover p-6 text-center">
                                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">4</div>
                                <div className="text-gray-600 dark:text-gray-400">Certifications</div>
                            </div>
                            <div className="card card-hover p-6 text-center">
                                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">100%</div>
                                <div className="text-gray-600 dark:text-gray-400">Dedication</div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;