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

            <div className="text-white relative px-8  max-w-2xl mx-auto  mt-10" >
                <h1 className='mb-2 text-center text-[35px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[30px] md:mb-5 md:text-[40px] lg:text-[60px]'>Website Redesigns</h1>
                <p className='mt-4 mb-5 sm:mt-0 text-left text-[16px] sm:text-[20px] md:mb-10 md:text-[20px] lg:text-[20px] font-medium'> Welcome to our ultimate results library! Included below are featured website redesigns that Power Funnels has designed for our clients in all types of industries, from: Blockchain, E-Commerce, Medical & more!</p>
            </div>


            <RecentWork />
            <Footer />

        </>

    );
};

export default page;