import { motion } from 'framer-motion';
import { Award, ExternalLink, Cloud, Database } from 'lucide-react';

const certifications = [
    {
        title: "Google Cloud Generative AI",
        issuer: "Google Cloud",
        icon: Cloud,
        link: "https://drive.google.com/file/d/1X4t5EINE1_j_H02ZdDmoMcRIx3gUJkFj/view?usp=drive_link",
        color: "#4285F4"
    },
    {
        title: "Complete SQL BootCamp",
        issuer: "SQL Certification",
        icon: Database,
        link: "https://drive.google.com/file/d/1YdxChxy8TkK_1z9nmu86u7b7-DXA1cpY/view?usp=drive_link",
        color: "#F7931E"
    }
];

const Certifications = () => {
    return (
        <section className="py-20 bg-darker" id="certifications">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16"
                >
                    <span className="text-gradient">Certifications</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-6 rounded-2xl group hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-transparent hover:border-primary/30"
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className="p-4 rounded-xl transition-colors"
                                    style={{ backgroundColor: `${cert.color}20` }}
                                >
                                    <cert.icon size={28} style={{ color: cert.color }} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                                        {cert.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">{cert.issuer}</p>
                                </div>
                                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                                </div>
                            </div>

                            {/* Hover indicator */}
                            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 group-hover:text-primary transition-colors">
                                <Award className="w-4 h-4" />
                                <span>Click to view certificate</span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
