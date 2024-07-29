"use client"
import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface ProgressBarProps {
  skill: string;
  percentage: number;
  color:string;
}

const ProgressBar = ({ skill, percentage, color }: ProgressBarProps) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  const checkVisibility = (entry: IntersectionObserverEntry) => {
    // Trigger animation when the element is visible
    if (entry.isIntersecting) {
      controls.start({ width: `${percentage}%` });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => checkVisibility(entry),
      {
        threshold: 0.5,  // Trigger when 50% of the element is in view
        rootMargin: "0px"
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, percentage]);

  // Handle scroll to retrigger animations smoothly
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          controls.start({ width: `${percentage}%` });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [controls, percentage]);

  return (
    <>
    <p className='text-white text-[18px] pb-2 px-5 uppercase'>{skill}</p>
    <div ref={ref} className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
        
      <motion.div
        className="h-full flex items-center justify-center text-white text-sm"
        style={{ backgroundColor: color }}  // Use color prop for background color
        initial={{ width: 0 }}
        animate={controls}
        transition={{ duration: 2, ease: "easeOut" }}  // Slower and smoother transition
      >
       <p className='text-[9px]'>{` ${percentage}%`}</p> 
      </motion.div>
    </div>
    </>
  );
};

export default ProgressBar;

