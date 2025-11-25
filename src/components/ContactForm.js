"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("sending");

        // EmailJS credentials
        const SERVICE_ID = "service_7ogrb5f";
        const TEMPLATE_ID = "service_7ogrb5f";
        const PUBLIC_KEY = "r3qdpwG3Z_RIN13BP";

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(
                (result) => {
                    console.log(result.text);
                    setStatus("success");
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    setStatus("error");
                }
            );
    };

    return (
        <section id="contact" className="py-20 bg-brand-black text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-yellow mb-4">
                        Get in Touch
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Have questions? We'd love to hear from you.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="flex items-start space-x-4">
                            <div className="bg-brand-yellow p-3 rounded-full text-brand-black">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-yellow">Phone</h3>
                                <p className="text-gray-300">+91 8113932004</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-brand-yellow p-3 rounded-full text-brand-black">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-yellow">Email</h3>
                                <p className="text-gray-300">abdullamurshidkv@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="bg-brand-yellow p-3 rounded-full text-brand-black">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-brand-yellow">Location</h3>
                                <p className="text-gray-300">Adivaram, Kozhikode, Kerala</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-neutral-900 p-8 rounded-2xl border border-brand-yellow/20"
                    >
                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full bg-brand-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full bg-brand-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full bg-brand-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-colors"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="w-full bg-brand-yellow text-brand-black font-bold py-3 px-8 rounded-lg hover:bg-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </button>
                            {status === "success" && (
                                <p className="text-green-500 text-center mt-4">Message sent successfully!</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-500 text-center mt-4">Failed to send message. Please try again.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
