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
                className="relative h-[90vh] sm:h-full  z-10 py-16 sm:py-27 md:py-24 lg:py-26 lg:pt-36 w-full justify-center "
                id="home"
                initial="initial"
                animate="animate"
            >
                <HeroBackground />


                <div className="my-auto  mt-[110px] sm:mt-0 flex flex-col items-center justify-center ">

                    <div
                        className={`relative mt-2 flex flex-col items-center justify-center ${inter.className} pointer-events-none`}
                    >
                        <AnimatedTitle
                            text={"Hi I'm Majid Ali."}
                            className={
                                "py-[10px] text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] sm:py-[20px]  md:text-[60px] lg:text-[80px]"
                            }
                            subtitle={"Full Stack Web Developer"}
                            subClassName="py-[10px] sm:mt-1 text-center text-[40px] sm:text-[45px] sm:my-[20px]  md:text-[60px] lg:text-[80px] font-bold leading-[1em] tracking-tighter text-[#FFD600]"
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
