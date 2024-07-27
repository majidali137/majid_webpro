import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";


const Hero = () => {
    return (
        <motion.section
            className="relative z-10 flex h-[100vh] w-full justify-center"
            id="home"
            initial="initial"
            animate="animate"
        >
            <HeroBackground />


            <div className="mt-10 flex flex-col items-center justify-center sm:mt-0">

                <div
                    className={`relative flex flex-col items-center justify-center ${inter.className} pointer-events-none`}
                >
                    <AnimatedTitle
                        text={"Hi I'm Majid Ali."}
                        className={
                            "mb-1 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-10 md:text-[60px] lg:text-[80px]"
                        }
                        subtitle={"Full Stack Web Developer"}
                        subClassName="mt-2 sm:mt-1 text-center text-[40px] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px] font-bold leading-[1em] tracking-tighter text-[#bd39ae]"
                        wordSpace={"mr-[10px]"}
                        charSpace={"mr-[0.001em]"}
                    />

                </div>

            </div>


        </motion.section>
    );
};

export default Hero;
