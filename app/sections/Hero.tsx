import { inter } from "../fonts/inter";
import { motion } from "framer-motion";
import HeroBackground from "../components/background/HeroBackground";
import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import HireMeButton from "../components/contact/HireMeButton";


const Hero = () => {
    return (

        <>
            <motion.section
                className="relative z-10 h-[85vh] sm:h-[100vh] w-full justify-center "
                id="home"
                initial="initial"
                animate="animate"
            >
                <HeroBackground />


                <div className="mt-10  flex flex-col items-center justify-center sm:mt-14">

                    <div
                        className={`relative mt-28 flex flex-col items-center justify-center ${inter.className} pointer-events-none`}
                    >
                        <AnimatedTitle
                            text={"Hi I'm Majid Ali."}
                            className={
                                "mb-1 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-10 md:text-[60px] lg:text-[80px]"
                            }
                            subtitle={"Full Stack Web Developer"}
                            subClassName="mt-2 sm:mt-1 text-center text-[40px] sm:text-[45px] md:mb-10 md:text-[60px] lg:text-[80px] font-bold leading-[1em] tracking-tighter text-[#FFD600]"
                            wordSpace={"mr-[12px]"}
                            charSpace={"mr-[0.001em]"}
                        />

                    </div>

                </div>

                <HireMeButton />

            </motion.section>


        
        </>
           
           
    );
};

export default Hero;
