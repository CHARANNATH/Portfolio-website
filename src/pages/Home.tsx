import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home: React.FC = () => {
    return (
        <div className="flex flex-col">
            <Header />
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;