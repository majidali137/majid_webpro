import React from 'react';
import AnimatedTitle from '../animations/AnimatedTitle';
import ServicesGrid from '../components/services/ServicesGrid';



const Services = () => {
    return (
        <>
            <div className='bg-[#0E1016]   px-6 w-full '>

                {/* Heading section */}

                <div className="bg-[#0E1016] bg-cover mt-20 sm:mt-32 px-6 max-w-2xl mx-auto" id="services">
                    <AnimatedTitle
                        text={"My Services"}
                        className={
                            "mb-2 text-center text-[45px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[30px] md:mb-5 md:text-[40px] lg:text-[60px]"
                        }
                        subtitle="I can provide these services for you. I specialize in these services. I have great experience and high level skills."
                        subClassName="mt-4 mb-5  sm:mt-0 text-left  text-[18px] sm:text-[20px] md:mb-10 md:text-[20px] lg:text-[20px] font-medium"
                        wordSpace={"mr-[6px]"}
                        charSpace={"mr-[0em]"}
                    />
                </div>

                {/* Service Section  */}

                <ServicesGrid />


            </div>



        </>
    );
};

export default Services;