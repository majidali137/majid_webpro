import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import Image from "next/image";


const About = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row item-center   pt-16  md:pt-20  lg:pt-20  px-4 sm:px-12 bg-[#0E1016] bg-cover">


                {/* Description section */}
                <section
                    className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center "
                    id="about"
                >
                    <div className="mx-auto flex w-[90%] flex-col  justify-center lg:max-w-[1212.8px]">
                        <AnimatedTitle
                            text={"Majid Ali"}
                            className={
                                "mb-2 text-left text-[45px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[40px] md:mb-5 md:text-[50px] lg:text-[70px]"
                            }
                            subtitle="Professional Web Developer"
                            subClassName="mt-2 mb-5 sm:mt-0  text-[35px] sm:text-[35px] md:mb-10 md:text-[45px] lg:text-[px] font-semibold leading-[1em] tracking-tighter text-[#e4ded7]"
                            wordSpace={"mr-[14px]"}
                            charSpace={"mr-[0.001em]"}
                        />

                        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20 text-justify">
                            <div className="mb-10 flex w-[100%] flex-col gap-4 text-[16px]   leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[18px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[18px] ">
                                <AnimatedBody text="I am a specialized freelance Web Designer & Developer, Graphics Designer, HTML CSS, Boostrap, Tailwind CSS javaScript, React, WordPress & on-site and off-site SEO Expert. I specialize in developing and marketing superior quality professional React and custom websites for my clients. I can create a website that won’t just suit your requirements but also take care of your budget." />

                                <AnimatedBody
                                    delay={0.1}
                                    text="If you want to discuss any type of projects in React, JavaScript, HTML CSS, Boostrap and Tailwind CSS & WordPress you can easily contact me through the following links.I can create a website that won’t just suit your requirements but also take care of your budget.I have a computer science background, knowledge of architecture planning, and scaling. Feel free to contact me"
                                />

                                <AnimatedBody
                                    delay={0.2}
                                    text="Right now, I’m working on some exciting projects that I can’t wait to share with you. But I’m always open to new opportunities and collaborations."
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Image section */}

                <div>
                    <Image
                        src="/majid.png"
                        alt="majid ali"
                        width={1000}
                        height={1000}
                        className="rounded-[25px] bg-[#303238d2] "
                    />

                </div>

            </div>
        </>
    );
};

export default About;
