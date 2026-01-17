import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const projects = [
    {
        title: "RAG-Based Personalized Chatbot",
        tech: ["LangChain", "Flask", "Python", "Vector DB"],
        description: "A Retrieval-Augmented Generation (RAG) chatbot delivering context-aware responses from domain-specific data. Improved answer relevance by 30% and reduced hallucinations by 25%.",
        link: "#",
        github: "#"
    },
    {
        title: "Property Rental Management System",
        tech: ["React", "Supabase", "Blockchain", "JavaScript"],
        description: "Full-stack platform for property listing and rental management. Features blockchain-based file integrity verification (SHA-256) for tamper-proof document validation.",
        link: "#",
        github: "#"
    },
    {
        title: "ML Data Processing & Model Dev",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        description: "Structured ML project focused on data preprocessing and model evaluation. Improved accuracy by 20-25% through feature normalization and hyperparameter tuning.",
        link: "#",
        github: "#"
    }
];

const Projects = () => {
    return (
        <section className="py-20 bg-dark" id="projects">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16"
                >
                    Featured <span className="text-gradient">Projects</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-6 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                                    <Code2 size={24} />
                                </div>
                                <div className="flex gap-3">
                                    <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                                        <Github size={20} />
                                    </a>
                                    <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/5">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
