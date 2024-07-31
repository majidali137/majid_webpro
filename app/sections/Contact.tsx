import { inter } from "../fonts/inter";
import "../animations/animate.css";
import AnimatedTitle from "../animations/AnimatedTitle";
import { motion } from "framer-motion";
import ContactBackground from "../components/background/ContactBackground";
import React from "react";
import ContactForm from "../components/contact/ContactForm";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import SocialIcon from "../components/contact/SocialIcon";


const Contact = () => {
    return (
        <section id="contact" className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center  pb-12  md:pb-44  lg:pb-30">
            <motion.section
                className="relative z-10  h-full w-full "
                id="contact"
                initial="initial"
                animate="animate"

            >
                <ContactBackground />


                <div className="mt-10 flex flex-col items-center justify-center sm:mt-0 mx-auto " >

                    <div
                        className={`relative flex flex-col items-center justify-center ${inter.className} pointer-events-none`}
                    >
                        <AnimatedTitle
                            text={"Contact"}
                            className={
                                "mb-1 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-10 md:text-[60px] lg:text-[80px]"
                            }
                            subtitle={"How Can I Help You?"}
                            subClassName="mt-4 sm:mt-1 px-6 text-center text-[30px] sm:text-[35px] md:mb-16 md:text-[45px] lg:text-[50px] font-semibold leading-[1em] tracking-tighter text-[#FFD600]"

                            wordSpace={"mr-[12px]"}
                            charSpace={"mr-[0.001em]"}
                        />

                    </div>

                </div>



                <div className="flex flex-col lg:flex-row sm:mx-auto items-center lg:items-start space-y-4 w-full lg:space-y-0 lg:space-x-8 py-8 sm:place-content-center">
                    <ContactForm />

                    <div className="items-center justify-center space-y-4 py-8 z-20">
                        <SocialIcon icon={<FaMapMarkerAlt />} text="Sheikhupura, Pakistan" type="address" />
                        <SocialIcon icon={<FaPhoneAlt />} text="+92 305 3006555" type="phone" />
                        <SocialIcon icon={<FaEnvelope />} text="themajidpro@gmail.com" type="email" />
                    </div>

                </div>

                {/* <HireMeButton /> */}


            </motion.section>
        </section>
    );
};

export default Contact;
