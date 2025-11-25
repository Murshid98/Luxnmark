"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Check } from "lucide-react";

export default function ProductCard() {
    return (
        <section id="products" className="py-20 bg-neutral-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-yellow mb-4">
                        The Ultimate Package
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Everything you need for a fresh and stylish ride.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                    {/* Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 relative h-96 rounded-2xl overflow-hidden border border-brand-yellow/20 flex items-center justify-center shadow-2xl shadow-brand-yellow/10"
                    >
                        <Image
                            src="/product-perfume.png"
                            alt="Premium Car Perfume and Badge"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>

                    {/* Product Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="w-full md:w-1/2 text-left"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Premium Car Perfume + Badge
                        </h3>
                        <p className="text-4xl font-bold text-brand-yellow mb-6">
                            ₹249 <span className="text-lg text-gray-500 font-normal line-through">₹499</span>
                        </p>

                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center text-gray-300">
                                <Check className="text-brand-yellow mr-3" /> Long-lasting fragrance
                            </li>
                            <li className="flex items-center text-gray-300">
                                <Check className="text-brand-yellow mr-3" /> Premium Car Badge included
                            </li>
                            <li className="flex items-center text-gray-300">
                                <Check className="text-brand-yellow mr-3" /> Elegant design
                            </li>
                            <li className="flex items-center text-gray-300">
                                <Check className="text-brand-yellow mr-3" /> Easy to install
                            </li>
                        </ul>

                        <button className="w-full md:w-auto bg-brand-yellow text-brand-black font-bold py-3 px-8 rounded-lg hover:bg-white transition-colors duration-300">
                            Order Now
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
