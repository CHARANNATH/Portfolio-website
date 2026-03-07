import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
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
            transition: { duration: 0.6 },
        },
    };

    const socialLinks = [
        {
            name: 'Email',
            icon: Mail,
            href: 'mailto:charannath.chowdary@example.com',
            color: 'hover:text-red-600 dark:hover:text-red-400',
        },
        {
            name: 'GitHub',
            icon: Github,
            href: 'https://github.com/charannath',
            color: 'hover:text-gray-800 dark:hover:text-gray-200',
        },
        {
            name: 'LinkedIn',
            icon: Linkedin,
            href: 'https://linkedin.com/in/charannath',
            color: 'hover:text-blue-600 dark:hover:text-blue-400',
        },
        {
            name: 'Twitter',
            icon: Twitter,
            href: 'https://twitter.com/charannath',
            color: 'hover:text-blue-400 dark:hover:text-blue-300',
        },
    ];

    return (
        <section id="contact" className="section bg-white dark:bg-slate-900">
            <div className="container mx-auto max-w-3xl">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Title */}
                    <motion.h2 variants={itemVariants} className="section-title">
                        Let's Connect
                    </motion.h2>

                    {/* Subtitle */}
                    <motion.p variants={itemVariants} className="section-subtitle mb-12">
                        I'd love to hear from you. Feel free to reach out for collaborations, opportunities, or just a friendly chat!
                    </motion.p>

                    {/* Main CTA */}
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <a
                            href="mailto:charannath.chowdary@example.com?subject=Let's%20Connect&body=Hi%20Charannath,%0D%0A%0D%0AI'd%20like%20to%20connect%20with%20you."
                            className="inline-block px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl text-lg"
                        >
                            Get In Touch
                        </a>
                    </motion.div>

                    {/* Divider */}
                    <motion.div variants={itemVariants} className="flex items-center gap-4 my-12">
                        <div className="flex-1 h-px bg-gray-200 dark:bg-slate-700"></div>
                        <span className="text-gray-600 dark:text-gray-400 font-semibold">OR</span>
                        <div className="flex-1 h-px bg-gray-200 dark:bg-slate-700"></div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={itemVariants} className="text-center">
                        <p className="text-gray-600 dark:text-gray-400 font-semibold mb-6">
                            Connect with me on other platforms:
                        </p>
                        <div className="flex justify-center gap-8">
                            {socialLinks.map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2, rotate: 10 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`text-gray-600 dark:text-gray-400 transition-colors duration-200 ${social.color}`}
                                        aria-label={social.name}
                                        title={social.name}
                                    >
                                        <Icon size={32} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Email Contact Info */}
                    <motion.div variants={itemVariants} className="mt-12 pt-12 border-t border-gray-200 dark:border-slate-700 text-center">
                        <p className="text-gray-600 dark:text-gray-400 mb-2">
                            Or directly reach out to me at:
                        </p>
                        <a
                            href="mailto:charannath.chowdary@example.com"
                            className="text-lg font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            charannath.chowdary@example.com
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;