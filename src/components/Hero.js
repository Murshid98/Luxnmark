"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-black to-brand-yellow/10 opacity-50" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-6xl md:text-8xl font-extrabold text-brand-yellow tracking-tight mb-6"
                >
                    PREMIUM CAR PERFUME
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
                >
                    Elevate your driving experience with our exclusive fragrance.
                    <br />
                    <span className="text-brand-yellow font-semibold">
                        Includes a Free Car Badge.
                    </span>
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <Link
                        href="#products"
                        className="inline-block bg-brand-yellow text-brand-black font-bold py-4 px-10 rounded-full text-lg hover:bg-white hover:text-brand-black transition-all duration-300 transform hover:scale-105 shadow-lg shadow-brand-yellow/20"
                    >
                        Shop Now
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
