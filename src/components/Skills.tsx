import { motion } from 'framer-motion';
import {
    FaPython, FaJava, FaJs, FaReact, FaNodeJs, FaHtml5, FaCss3, FaAws, FaDocker, FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
    SiTypescript, SiCplusplus, SiC, SiR, SiMysql, SiPostgresql, SiMongodb, SiSupabase,
    SiFlask, SiDjango, SiTailwindcss,
    SiPandas, SiNumpy, SiPytorch, SiTensorflow, SiScikitlearn, SiOpencv, SiLangchain
} from 'react-icons/si';
import { TbBrandFramerMotion, TbBrandVscode } from 'react-icons/tb';

const skillsData = [
    {
        category: "Languages & Core",
        items: [
            { name: "Python", icon: FaPython, color: "#3776AB" },
            { name: "Java", icon: FaJava, color: "#007396" },
            { name: "C", icon: SiC, color: "#A8B9CC" },
            { name: "C++", icon: SiCplusplus, color: "#00599C" },
            { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
            { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
            { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
            { name: "CSS3", icon: FaCss3, color: "#1572B6" },
            { name: "SQL", icon: SiMysql, color: "#4479A1" },
            { name: "R", icon: SiR, color: "#276DC3" }
        ]
    },
    {
        category: "Frameworks & Libraries",
        items: [
            { name: "React", icon: FaReact, color: "#61DAFB" },

            { name: "Node.js", icon: FaNodeJs, color: "#339933" },

            { name: "Flask", icon: SiFlask, color: "#000000" },
            { name: "Django", icon: SiDjango, color: "#092E20" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Framer Motion", icon: TbBrandFramerMotion, color: "#0055FF" },

            { name: "Pandas", icon: SiPandas, color: "#150458" },
            { name: "NumPy", icon: SiNumpy, color: "#013243" }
        ]
    },
    {
        category: "AI & Tools",
        items: [
            { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
            { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
            { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
            { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
            { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
            { name: "Docker", icon: FaDocker, color: "#2496ED" },
            { name: "AWS", icon: FaAws, color: "#FF9900" },
            { name: "Git", icon: FaGitAlt, color: "#F05032" },
            { name: "GitHub", icon: FaGithub, color: "#181717" },
            { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
            { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
            { name: "VS Code", icon: TbBrandVscode, color: "#007ACC" }
        ]
    }
];

const MarqueeRow = ({ items, direction = "left", speed = 20 }: { items: any[], direction?: "left" | "right", speed?: number }) => {
    return (
        <div className="relative flex overflow-hidden py-4 group">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-darker to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-darker to-transparent z-10" />

            <motion.div
                initial={{ x: direction === "left" ? 0 : "-50%" }}
                animate={{ x: direction === "left" ? "-50%" : 0 }}
                transition={{
                    duration: speed,
                    ease: "linear",
                    repeat: Infinity,
                }}
                className="flex gap-6 flex-shrink-0 px-3"
            >
                {[...items, ...items, ...items].map((skill, index) => (
                    <div
                        key={index}
                        className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 hover:border-primary/50 transition-colors cursor-default flex items-center gap-3 group/item"
                    >
                        <skill.icon className="w-6 h-6 transition-transform group-hover/item:scale-110" style={{ color: skill.color }} />
                        <span className="text-gray-300 font-medium text-lg group-hover/item:text-white transition-colors whitespace-nowrap">
                            {skill.name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

const Skills = () => {
    return (
        <section className="py-20 bg-darker overflow-hidden" id="skills">
            <div className="container mx-auto px-4 mb-12">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center"
                >
                    Technical <span className="text-gradient">Arsenal</span>
                </motion.h2>
            </div>

            <div className="space-y-8">
                <MarqueeRow items={skillsData[0].items} direction="left" speed={30} />
                <MarqueeRow items={skillsData[1].items} direction="right" speed={30} />
                <MarqueeRow items={skillsData[2].items} direction="left" speed={35} />
            </div>
        </section>
    );
};

export default Skills;
