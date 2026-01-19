import { motion } from 'framer-motion';
import { Trophy, Code2, Award } from 'lucide-react';

const activities = [
    {
        title: "Finalist, Shine India Health Startups",
        description: "Ranked among the top teams across South India for innovative healthcare solutions.",
        icon: Trophy,
        highlight: "Top Finalist"
    },
    {
        title: "ANIMATION CLUB Hackathon - Webwiz",
        description: "Participated in a 24-hour hackathon focusing on creative web development.",
        icon: Code2,
        highlight: "24-Hour Hackathon"
    }
];

const Activities = () => {
    return (
        <section className="py-20 bg-dark" id="activities">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16"
                >
                    Extra-Curricular <span className="text-gradient">Activities</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {activities.map((activity, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="glass p-6 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl text-primary group-hover:from-primary/30 group-hover:to-secondary/30 transition-colors">
                                    <activity.icon size={28} />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                                        <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                                            {activity.title}
                                        </h3>
                                        <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full border border-primary/20">
                                            {activity.highlight}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {activity.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Decorative element */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex justify-center mt-12"
                >
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                        <Award className="w-5 h-5 text-primary" />
                        <span className="text-gray-400 text-sm">Always looking for new challenges!</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Activities;
