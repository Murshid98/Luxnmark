"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-brand-black text-brand-yellow sticky top-0 z-50 shadow-md border-b border-brand-yellow/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href="/" className="font-bold text-xl tracking-wider">
                            CAR PERFUME
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                href="/"
                                className="hover:bg-brand-yellow hover:text-brand-black px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                            >
                                Home
                            </Link>
                            <Link
                                href="#products"
                                className="hover:bg-brand-yellow hover:text-brand-black px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                            >
                                Products
                            </Link>
                            <Link
                                href="#contact"
                                className="hover:bg-brand-yellow hover:text-brand-black px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <button className="p-2 rounded-full hover:bg-brand-yellow hover:text-brand-black transition-colors duration-300">
                            <ShoppingCart size={24} />
                        </button>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-brand-yellow hover:text-brand-black hover:bg-brand-yellow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-black focus:ring-white"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-black border-t border-brand-yellow/20"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link
                                href="/"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-yellow hover:text-brand-black transition-colors duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="#products"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-yellow hover:text-brand-black transition-colors duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Products
                            </Link>
                            <Link
                                href="#contact"
                                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-brand-yellow hover:text-brand-black transition-colors duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
