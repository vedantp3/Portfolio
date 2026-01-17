import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { name, email, message } = formData;

        const subject = `Portfolio Contact from ${name}`;
        const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

        window.location.href = `mailto:work.vedant0505@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="py-20 bg-dark" id="contact">
            <div className="container mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-bold text-center mb-16"
                >
                    Get In <span className="text-gradient">Touch</span>
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                        <p className="text-gray-400 mb-8">
                            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <a href="mailto:work.vedant0505@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <span>work.vedant0505@gmail.com</span>
                            </a>

                            <a href="tel:+919322484449" className="flex items-center gap-4 text-gray-300 hover:text-primary transition-colors group">
                                <div className="p-3 bg-white/5 rounded-lg group-hover:bg-primary/20 transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <span>+91 9322484449</span>
                            </a>

                            <div className="flex items-center gap-4 text-gray-300">
                                <div className="p-3 bg-white/5 rounded-lg">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <span>Vellore, Tamil Nadu / Kolhapur, Maharashtra</span>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-8">
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary transition-colors border border-white/10">
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-white/10 hover:text-primary transition-colors border border-white/10">
                                <Linkedin className="w-6 h-6" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                placeholder="Your message..."
                                required
                            />
                        </div>
                        <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                            Send Message
                            <Send className="w-4 h-4" />
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
