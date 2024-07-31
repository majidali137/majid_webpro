"use client";
import Link from "next/link";
import Container from "../components/container/Container";
import React from "react";

const NavBar = () => {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const href = e.currentTarget.href.split("#")[1];
        window.scrollTo({
            top: document.getElementById(href)?.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <nav className="nowrap fixed bottom-10 left-0 right-0 z-50 my-0 mx-auto flex items-center justify-center gap-1 px-1 py-1 text-[#e4ded7] sm:w-[550px] md:p-2 lg:w-[600px]">
            <Container
                width="100%"
                height="50px"
                color="rgba(255, 255, 255, 0.1)"
                borderRadius={10}
                top="0px"
                left="0px"
                angle={0}
            >
                <nav className="nowrap fixed bottom-30 left-0 right-0 z-50 my-0 mx-auto flex items-center justify-center gap-1 rounded-lg px-1 py-1 text-[#e4ded7] sm:w-[383.3px] md:p-2 lg:w-[391.3px]">
                    <Link
                        href="#about"
                        data-blobity-magnetic="false"
                        onClick={handleScroll}
                        aria-label="Scroll to about section"
                    >
                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
                            ABOUT
                        </h4>
                    </Link>

                    {/* <Link
                        href="#services"
                        data-blobity-magnetic="false"
                        onClick={handleScroll}
                        aria-label="Scroll to About Section"
                    >
                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
                            SERVICES
                        </h4>
                    </Link> */}

                    <Link
                        href="#work"
                        data-blobity-magnetic="false"
                        onClick={handleScroll}
                        aria-label="Scroll to Work Work"
                    >
                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
                            WORK
                        </h4>
                    </Link>

                    <Link
                        href="#education"
                        data-blobity-magnetic="false"
                        onClick={handleScroll}
                        aria-label="Scroll to Contact education"
                    >
                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
                            EDUCATION
                        </h4>
                    </Link>
                    <Link
                        href="#skills"
                        data-blobity-magnetic="false"
                        onClick={handleScroll}
                        aria-label="Scroll to Contact Skills"
                    >
                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
                            SkILLS
                        </h4>
                    </Link>
                    <Link
                        href="#contact"
                        data-blobity-magnetic="false"
                        onClick={handleScroll}
                        aria-label="Scroll to Contact "
                    >
                        <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">
                        CONTACT
                        </h4>
                    </Link>
                </nav>
            </Container>
        </nav>
    );
};

export default NavBar;




















// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaBars, FaTimes } from "react-icons/fa";
// import Container from "../components/container/Container";

// const NavBar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
//         e.preventDefault();
//         const href = e.currentTarget.href.split("#")[1];
//         window.scrollTo({
//             top: document.getElementById(href)?.offsetTop,
//             left: 0,
//             behavior: "smooth",
//         });
//         setIsOpen(false); // Close menu on link click
//     };

//     return (
//         <nav className="fixed bottom-10 left-0 right-0 z-50 my-0 mx-auto flex items-center justify-center gap-1 px-1 py-1 text-[#e4ded7] sm:w-[550px] md:p-2 lg:w-[600px]">
//             <Container
//                 width="100%"
//                 height="500px"
//                 color="rgba(255, 255, 255, 0.1)"
//                 borderRadius={10}
//                 top="0px"
//                 left="0px"
//                 angle={0}
//             >
//                 <div className="flex items-center justify-between w-full">
//                     {/* <div className="text-xl font-bold">Brand</div> */}
//                     <nav className="nowrap hidden md:flex bottom-30 left-0 right-0 z-50 my-0 mx-auto items-center justify-center gap-1 rounded-lg px-1 py-1 text-[#e4ded7] sm:w-[383.3px] md:p-2 lg:w-[391.3px]">
//                         <Link href="#about" data-blobity-magnetic="false" onClick={handleScroll} aria-label="Scroll to Home Section">
//                             <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">ABOUT</h4>
//                         </Link>
//                         <Link href="#services" data-blobity-magnetic="false" onClick={handleScroll} aria-label="Scroll to About Section">
//                             <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">SERVICES</h4>
//                         </Link>
//                         <Link href="#work" data-blobity-magnetic="false" onClick={handleScroll} aria-label="Scroll to Work Section">
//                             <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">WORK</h4>
//                         </Link>
//                         <Link href="#education" data-blobity-magnetic="false" onClick={handleScroll} aria-label="Scroll to Contact Section">
//                             <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">EDUCATION</h4>
//                         </Link>
//                         <Link href="#skills" data-blobity-magnetic="false" onClick={handleScroll} aria-label="Scroll to Contact Section">
//                             <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">SKILLS</h4>
//                         </Link>
//                         <Link href="#contact" data-blobity-magnetic="false" onClick={handleScroll} aria-label="Scroll to Contact Section">
//                             <h4 className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px] md:py-1 md:px-4">CONTACT</h4>
//                         </Link>
//                     </nav>
//                     <div className="md:hidden">
//                         <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
//                             {isOpen ? (
//                                 <FaTimes className="w-6 h-6 text-[#e4ded7]" />
//                             ) : (
//                                 <FaBars className="w-6 h-6 text-[#e4ded7]" />
//                             )}
//                         </button>
//                     </div>
//                 </div>
//                 <motion.div
//                     initial={{ y: "100%" }}
//                     animate={{ y: isOpen ? "0%" : "100%" }}
//                     transition={{ type: "spring", stiffness: 300, damping: 30 }}
//                     className={`fixed bottom-0 left-0 right-0 top-0 z-40 h-20  bg-white flex flex-col items-center justify-center text-black md:hidden ${isOpen ? "block" : "hidden"}`}
//                 >
//                     <div className="flex flex-col space-y-4 px-4 py-2">
//                         <Link href="#about" onClick={handleScroll} className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px]">ABOUT</Link>
//                         <Link href="#services" onClick={handleScroll} className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px]">SERVICES</Link>
//                         <Link href="#work" onClick={handleScroll} className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px]">WORK</Link>
//                         <Link href="#education" onClick={handleScroll} className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px]">EDUCATION</Link>
//                         <Link href="#skills" onClick={handleScroll} className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px]">SKILLS</Link>
//                         <Link href="#contact" onClick={handleScroll} className="py-2 px-2 text-[12px] sm:px-4 sm:text-[14px]">CONTACT</Link>
//                     </div>
//                 </motion.div>
//             </Container>
//         </nav>
//     );
// };

// export default NavBar;
