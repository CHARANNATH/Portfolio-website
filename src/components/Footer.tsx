import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ];

    const socialLinks = [
        { icon: Github, href: 'https://github.com/CHARANNATH', label: 'GitHub' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/charannathchowdary-unnam/', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:unnamcharannathchowdary@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="bg-gray-900 dark:bg-slate-950 text-white">
            <div className="container mx-auto px-4 py-12">
                {/* Main Footer Content */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* About Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            Charannath Chowdary
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Systems Engineer passionate about building innovative software solutions and creative web applications.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            {socialLinks.map((social, idx) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={idx}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                                        aria-label={social.label}
                                    >
                                        <Icon size={24} />
                                    </motion.a>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 my-8"></div>

                {/* Bottom Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
                        © {currentYear} Charannath Chowdary. Made with
                        <Heart size={16} className="text-red-500 animate-pulse" />
                        by Charannath. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-xs mt-2">
                        Built with React, Vite, and Tailwind CSS
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;