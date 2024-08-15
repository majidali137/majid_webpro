'use client';
import React from 'react';
import Carousel from '../components/work/Carousel';
import RecentWork from '../components/work/RecentWork';
import Footer from '../sections/Footer';

const page = () => {
    return (
        <>
            <div className=" mb-20">
                <Carousel />
            </div>

            <div className=" relative px-8   max-w-3xl mx-auto  mt-10" >
                <h1 className='mb-2 text-center  text-[35px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[30px] md:mb-5 md:text-[40px] lg:text-[60px]'>Recent Projects</h1>
                <p className='mt-4 mb-5 sm:mt-0 text-start text-[16px]  sm:text-[16px] md:mb-10 md:text-[18px] lg:text-[18px] font-[400] text-[#e9e5e0]'> Explore the projects built by Majid Ali, showcasing expertise in full-stack development and WordPress. These projects highlight my skills and experience, demonstrating my ability to create dynamic and effective web solutions.</p>
            </div>


            <RecentWork />
            <Footer />

        </>

    );
};

export default page;