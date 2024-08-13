"use client";
import { useEffect, useRef } from 'react';
import { FaHtml5, FaWordpressSimple } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiTypescript, SiReact, SiTailwindcss, SiNextdotjs, SiAstro } from 'react-icons/si';
import { BsBootstrap } from 'react-icons/bs';

const icons = [
    FaHtml5, IoLogoJavascript, SiTypescript, SiReact, SiTailwindcss, SiNextdotjs, BsBootstrap, FaWordpressSimple, SiAstro
];

const FrontendMovingBar = () => {
    const scrollContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const animateScroll = () => {
            const element = scrollContainer.current;
            if (!element) return; // Check if the element is null and return if true

            let maxScroll = element.scrollWidth - element.clientWidth;
            element.scrollLeft = maxScroll; // Start from the far right
            let reset = true;

            // Function to animate the scrolling
            const step = () => {
                if (reset && element.scrollLeft > 0) {
                    element.scrollLeft -= 0.5; // Decrease scrollLeft to move left to right
                } else {
                    element.scrollLeft = maxScroll; // Reset to far right once fully scrolled to the left
                    reset = true;
                }
                window.requestAnimationFrame(step);
            };

            window.requestAnimationFrame(step);
        };

        animateScroll();
    }, []);

    return (
        <div ref={scrollContainer} className="overflow-hidden whitespace-nowrap h-28 relative">
            {Array(10).fill([...icons]).flat().map((Icon, index) => (
                <div className="inline-block mx-4" key={index}>
                    <Icon className="sm:text-[80px] text-[40px]" key={index} />
                </div>
            ))}
        </div>
    );
};

export default FrontendMovingBar;
