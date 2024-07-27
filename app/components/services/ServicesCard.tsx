import Image from "next/image";
import AnimatedTitle from "../../animations/AnimatedTitle";
import AnimatedBody from "../../animations/AnimatedBody";
import { motion } from "framer-motion";
import Container from "../container/Container";
import React from "react";
import { ServicesProps } from "./ServicesDetails";
const ServicesCard = ({
    id,
    name,
    description,
    icon,
}: ServicesProps) => {
    return (
        <motion.div
            className={`relative  bg-cover bg-no-repeat bg-center z-10 h-[400px] w-full items-stretch justify-center py-0 sm:h-[600px] sm:w-[100%] md:h-[550px] md:w-[100%] lg:h-[400px]`}
            initial="initial"
            animate="animate"
        >
            <Container
                width="100%"
                height="100%"
                borderRadius={25}
                color="rgba(255, 255, 255, 0.1)"
                blur={false}
                grain={true}
                top="0px"
                left="0px"
                angle={0}
            >
                

                <div
                    className="absolute text-white mb-10  md:mb-16 lg:mb-14 " 
                >
                    <Image
                    src={icon}
                    alt={name}
                    width={100}
                    height={100}
                    className="rounded-full mx-auto mt-16 mb-6"
                    
                />
                    <AnimatedTitle
                        text={name}
                        className={
                            "max-w-[90%] text-[26px] text-center leading-none text-white md:text-[24px] md:leading-none lg:max-w-[450px] lg:text-[28px] lg:leading-none"
                        }
                        wordSpace={"mr-[0.25em]"}
                        charSpace={"-mr-[0.01em]"}
                    />
                    <AnimatedBody
                        text={description}
                        className={
                            "mt-4 w-[90%] max-w-[457px] text-[16px] font-semibold text-[#95979D] mx-4"
                        }
                    />

                </div>
            </Container>
        </motion.div>
    );
};

export default ServicesCard;