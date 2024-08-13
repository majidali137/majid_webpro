"use client"
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const images = [
    '/projects/Imaginify.jpg',
    'projects/trt-colombia-banner.jpg',
    '/projects/power-flow.jpg',
    '/projects/Portfolio.jpg',
]

const variants = {
    enter: (direction: number) => {
        return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }
    },
    center: {
        x: 0,
        opacity: 1,
        transition: {
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
        },
    },
    exit: (direction: number) => {
        return {
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            transition: {
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 },
            },
        }
    },
}

export default function Carousel() {
    const [[currentIndex, direction], setCurrentIndex] = useState<[number, number]>([0, 0])

    // Automatically change images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext()
        }, 3000) // 3000ms = 5s
        return () => clearInterval(interval)
    }, [currentIndex])

    const handleNext = () => {
        setCurrentIndex([currentIndex + 1 >= images.length ? 0 : currentIndex + 1, 1])
    }

    const handlePrev = () => {
        setCurrentIndex([currentIndex - 1 < 0 ? images.length - 1 : currentIndex - 1, -1])
    }

    return (
        <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    key={currentIndex}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                >
                    <img
                        src={images[currentIndex]}
                        alt={`Slide ${currentIndex}`}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black opacity-60"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
                        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">
                            FEATURED WEBSITE REDESIGNS
                        </h2>
                        <Link href="/" prefetch={false}>
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="px-6 mt-5 py-3 bg-[#00000061] border-[#FFD600] text-[#FFD600] font-bold rounded-md border-2"
                            >
                                Go Back To Home Page
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </AnimatePresence>

            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 py-2 px-4 rounded-full"
            >
                &#10094;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 py-2 px-4 rounded-full"
            >
                &#10095;
            </button>
        </div>
    )
}
