"use client"
import { useEffect, useRef } from 'react';
import {  SiPostgresql, SiMysql, SiMongodb, SiNodedotjs, SiAppwrite, SiTwilio } from 'react-icons/si';
import { RiSupabaseFill } from "react-icons/ri";
import { FaPhp } from "react-icons/fa";


const icons = [
    SiPostgresql, SiMysql, SiMongodb, SiNodedotjs, SiAppwrite, SiTwilio, RiSupabaseFill,FaPhp
];

const BackendMovingBar = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateScroll = () => {
      const element = scrollContainer.current;
      if (!element) return; // Check if the element is null and return if true

      let reset = false;

      // Function to animate the scrolling
      const step = () => {
        if (!reset && element.scrollLeft < element.scrollWidth - element.clientWidth) {
          element.scrollLeft += 1.5; // Adjust scrolling speed here
        } else {
          element.scrollLeft = 0;
          reset = false;
        }
        window.requestAnimationFrame(step);
      };

      window.requestAnimationFrame(step);
    };

    animateScroll();
  }, []);

  return (
    <div ref={scrollContainer} className="overflow-hidden whitespace-nowrap h-28 relative ">
      {Array(10).fill([...icons]).flat().map((Icon, index) => ( // Increase number of repeats for longer sequences
          <div className="inline-block mx-4">
          <Icon className="sm:text-[80px] text-[40px]" key={index} />
        </div>
      ))}
    </div>
  );
};

export default BackendMovingBar;