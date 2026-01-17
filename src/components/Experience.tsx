import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        company: "Walstar Technologies",
        role: "AI/ML Intern",
        period: "Jun 2025 - Jul 2025",
        location: "Kolhapur, Maharashtra",
        description: [
            "Designed and implemented a domain-specific chatbot using LLMs with RAG for accurate responses.",
            "Integrated LangChain-based document retrieval and real-time web scraping, improving query accuracy by 30%.",
            "Developed a Python-based OMR analysis system (OpenCV, OCR) with 95% accuracy, reducing manual checking time by 80%."
        ]
    },
    {
        company: "Fyaril AB",
        role: "Frontend Developer Intern",
        period: "May 2025 - Jul 2025",
        location: "Skane, Sweden (Remote)",
        description: [
            "Revamped the Help Center portal, integrating collapsible FAQs and instant search, resulting in 40% faster navigation.",
            "Optimized frontend performance, decreasing page load time by 30% through DOM optimization and asset compression."
        ]
    }
];

const Experience = () => {
    return (
        <section className="py-20 bg-darker" id="experience">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16"
                >
                    Work <span className="text-gradient">Experience</span>
                </motion.h2>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-white/10" />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Dot */}
                            <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#00f2ff] z-10 mt-6" />

                            <div className="flex-1 md:w-1/2" />

                            <div className="flex-1 md:w-1/2 pl-8 md:pl-0">
                                <div className={`glass p-6 rounded-2xl hover:border-primary/30 transition-colors ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                                    }`}>
                                    <div className="flex items-center gap-3 mb-2">
                                        <Briefcase className="text-primary w-5 h-5" />
                                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                                    </div>
                                    <h4 className="text-lg text-secondary font-semibold mb-1">{exp.company}</h4>
                                    <p className="text-sm text-gray-500 mb-4">{exp.period} | {exp.location}</p>
                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-gray-400 text-sm flex items-start gap-2">
                                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
