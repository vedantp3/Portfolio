import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ChevronDown, Download, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';

const Hero = () => {
    const [text, setText] = useState('');
    const fullText = "Full Stack Developer & AI/ML Enthusiast";
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < fullText.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + fullText.charAt(index));
                setIndex((prev) => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [index]);

    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-darker">
            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px] animate-pulse-fast" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px] animate-pulse-fast" />

                {/* Floating Particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute bg-white/10 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                            scale: Math.random() * 0.5 + 0.5,
                        }}
                        animate={{
                            y: [null, Math.random() * -100],
                            opacity: [0, 0.5, 0],
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        style={{
                            width: Math.random() * 4 + 1 + 'px',
                            height: Math.random() * 4 + 1 + 'px',
                        }}
                    />
                ))}
            </div>

            <div className="z-10 text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col items-center"
                >
                    {/* Open to Work Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-emerald-500/10 border border-emerald-500/30 rounded-full backdrop-blur-sm">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </span>
                        <span className="text-emerald-400 font-medium text-sm">Open to Work</span>
                    </div>
                    <h2 className="text-xl md:text-2xl text-primary font-mono mb-4">Hello, I'm</h2>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-bold mb-6 text-white tracking-tight relative group cursor-default"
                >
                    <span className="relative inline-block transition-transform duration-300 group-hover:-translate-y-2">
                        Vedant <span className="text-gradient">Patil</span>
                    </span>
                </motion.h1>

                <div className="h-8 md:h-12 mb-8">
                    <p className="text-lg md:text-2xl text-gray-400 font-mono">
                        {text}
                        <span className="animate-pulse">|</span>
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex justify-center gap-6 mb-12"
                >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-primary/50 group hover:scale-110">
                        <Github className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-primary/50 group hover:scale-110">
                        <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors" />
                    </a>
                    <a href="mailto:work.vedant0505@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-primary/50 group hover:scale-110">
                        <Mail className="w-6 h-6 text-gray-300 group-hover:text-primary transition-colors" />
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                >
                    <div className="flex flex-wrap justify-center gap-4">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 border border-primary/50 rounded-full text-white font-bold hover:bg-white/10 transition-all hover:border-primary"
                        >
                            <Eye className="w-5 h-5" />
                            View Resume
                        </a>
                        <a
                            href="/resume.pdf"
                            download="Vedant_Patil_Resume.pdf"
                            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-bold hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(0,242,255,0.3)] hover:shadow-[0_0_30px_rgba(0,242,255,0.5)]"
                        >
                            <Download className="w-5 h-5" />
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <ChevronDown className="w-8 h-8 text-gray-500" />
            </motion.div>
        </section>
    );
};

export default Hero;
