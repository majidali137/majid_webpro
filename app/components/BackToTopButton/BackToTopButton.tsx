"use client";
// components/BackToTopButton.js
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoIosArrowUp } from "react-icons/io";

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="fixed sm:bottom-8 bottom-24 right-8 z-50">
            {isVisible && (
                <motion.button
                    className="p-3 rounded-full bg-[#FFD600] text-white hover:bg-[#F57F17] focus:outline-none focus:ring-2 focus:ring-[#F57F17]"
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                >
                    <IoIosArrowUp className="h-6 w-6" />
                </motion.button>
            )}
        </div>
    );
};

export default BackToTopButton;
