import { motion } from 'framer-motion';
import { ExternalLink, Github, Code2 } from 'lucide-react';

const projects = [
    {
        title: "Multimodal Math Mentor",
        tech: ["Python", "Streamlit", "LangChain", "FAISS", "Google Gemini", "Groq API"],
        description: "An intelligent math tutoring system that accepts problems via text, image (OCR using Gemini Vision), and audio (ASR transcription). Features a multi-agent architecture with RAG pipeline for accurate mathematical solutions.",
        features: [
            "Multimodal input: text, image & audio",
            "RAG pipeline with FAISS vector store",
            "Multi-agent architecture for parsing & solving",
            "Human-in-the-Loop feedback system",
            "Rate limit handling with exponential backoff"
        ],
        link: "#",
        github: "#"
    },
    {
        title: "RAG-Based Personalized Chatbot",
        tech: ["LangChain", "Flask", "Python", "Vector DB"],
        description: "A Retrieval-Augmented Generation (RAG) chatbot delivering context-aware responses from domain-specific data. Improved answer relevance by 30% and reduced hallucinations by 25%.",
        features: [
            "Context-aware response generation",
            "Vector database for semantic search",
            "Custom knowledge base integration",
            "Real-time query processing"
        ],
        link: "https://github.com/vedantp3/RAG-based-Chatbot",
        github: "https://github.com/vedantp3/RAG-based-Chatbot"
    },
    {
        title: "Property Rental Management System",
        tech: ["React", "Supabase", "Blockchain", "JavaScript"],
        description: "Full-stack platform for property listing and rental management. Features blockchain-based file integrity verification (SHA-256) for tamper-proof document validation.",
        features: [
            "Property listing & search",
            "Blockchain document verification",
            "User authentication & profiles",
            "Real-time notifications"
        ],
        link: "#",
        github: "#"
    },
    {
        title: "ML Data Processing & Model Dev",
        tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
        description: "Structured ML project focused on data preprocessing and model evaluation. Improved accuracy by 20-25% through feature normalization and hyperparameter tuning.",
        features: [
            "Automated data preprocessing",
            "Feature engineering pipeline",
            "Model comparison & evaluation",
            "Visualization dashboards"
        ],
        link: "https://github.com/vedantp3/ml-project",
        github: "https://github.com/vedantp3/ml-project"
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
                            className="glass p-6 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 flex flex-col"
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

                            <p className="text-gray-400 text-sm mb-4">
                                {project.description}
                            </p>

                            {/* Key Features */}
                            <div className="mb-6">
                                <h4 className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">Key Features</h4>
                                <ul className="space-y-1">
                                    {project.features.map((feature, i) => (
                                        <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                            <span className="text-primary mt-1">•</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

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
