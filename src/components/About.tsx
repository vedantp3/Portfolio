import { motion } from 'framer-motion';
import { GraduationCap, School } from 'lucide-react';

const About = () => {
    return (
        <section className="py-20 bg-dark relative" id="about">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16"
                >
                    About <span className="text-gradient">Me</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            I am a final year Computer Science and Engineering student at Vellore Institute of Technology with a strong passion for building scalable web applications and exploring the depths of Artificial Intelligence.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            With experience in both frontend development and machine learning, I enjoy bridging the gap between intuitive user interfaces and intelligent backend systems. I'm currently focused on Generative AI and Full Stack Development.
                        </p>
                    </motion.div>

                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="glass p-6 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-primary/20 rounded-lg text-primary">
                                    <GraduationCap size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Vellore Institute of Technology</h3>
                                    <p className="text-gray-400">B.Tech in Computer Science and Engineering</p>
                                    <p className="text-sm text-gray-500 mt-1">May 2026 | CGPA: 8.47/10</p>
                                    <p className="text-sm text-gray-400 mt-2">Coursework: DSA, Database Systems, SQL, Machine Learning, AWS Cloud Architecture</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="glass p-6 rounded-2xl hover:bg-white/10 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-secondary/20 rounded-lg text-secondary">
                                    <School size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">Dr. Cyrus Poonawala International School</h3>
                                    <p className="text-gray-400">Secondary Education</p>
                                    <p className="text-sm text-gray-500 mt-1">Apr 2020</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
