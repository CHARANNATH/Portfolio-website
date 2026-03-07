import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
        },
    };

    const handleResumeDownload = () => {
        // Create a simple resume PDF or link to it
        const link = document.createElement('a');
        link.href = '/assets/Resume_charannath.pdf'; 
        link.download = 'Charannath_Chowdary_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 dark:from-slate-900 via-purple-50 dark:via-slate-800 to-white dark:to-slate-900 flex items-center justify-center py-20 md:py-0">
            <motion.div
                className="container mx-auto px-4 text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Main Heading */}
                <motion.div variants={itemVariants} className="mb-6">
                    <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                        Hi, I'm{' '}
                        <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Charannath Chowdary Unnam
                        </span>
                    </h1>
                </motion.div>

                {/* Role */}
                <motion.div variants={itemVariants} className="mb-6">
                    <h2 className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 font-semibold">
                        Systems Engineer at Infosys
                    </h2>
                </motion.div>

                {/* Description */}
                <motion.div variants={itemVariants} className="mb-8 max-w-2xl mx-auto">
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                        Passionate software engineer building scalable applications and solving complex problems. 
                        Experienced in Java, web development, and algorithmic problem-solving. Let me build something amazing for you.
                    </p>
                </motion.div>

                {/* Education Badge */}
                <motion.div variants={itemVariants} className="mb-8">
                    <div className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold">
                        B.Tech in Computer Science • Sree Vidyanikethan Engineering College
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a
                        href="#projects"
                        className="inline-block px-8 py-3 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                    >
                        View My Projects
                    </a>
                    <button
                        onClick={handleResumeDownload}
                        className="inline-block px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-semibold rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transform hover:scale-105 transition-all duration-200"
                    >
                        Download Resume
                    </button>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    variants={itemVariants}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center"
                >
                    <a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                        <ChevronDown size={32} />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;