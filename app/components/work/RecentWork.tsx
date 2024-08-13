// "use client"
// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { projects } from './projectDetails';
// import Link from 'next/link';

// const categories = [
//     'All Categories',
//     'Full Stack',
//     'WordPress',
// ];

// const RecentWork = () => {
//     const [activeCategory, setActiveCategory] = useState('All Categories');
//     const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//     const filteredProjects = projects.filter((project) => {
//         if (activeCategory === 'All Categories') return true;
//         return project.techNames.includes(activeCategory);
//     });

//     return (
//         <div className="container mx-auto px-4 py-8 max-w-[1400px]">
//             {/* Dropdown for mobile */}
//             <div className="w-full flex justify-center sm:hidden mb-10">
//                 <div className="relative w-full max-w-xs">
//                     <button
//                         className="w-full bg-[#00000061] border-[#FFD600] text-[#FFD600] rounded-md border-2 py-2 shadow-md"
//                         onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//                     >
//                         {activeCategory} <span>{isDropdownOpen ? '▲' : '▼'}</span>
//                     </button>
//                     {isDropdownOpen && (
//                         <div className="absolute left-0 top-full mt-2 w-full bg-[#000000a5] border-[#FFD600] text-[#FFD600] shadow-md rounded-md z-10">
//                             {categories.map((category) => (
//                                 <button
//                                     key={category}
//                                     onClick={() => {
//                                         setActiveCategory(category);
//                                         setIsDropdownOpen(false);
//                                     }}
//                                     className={`w-full border-[#FFD600] border text-left py-2 px-4 mb-2 ${
//                                         activeCategory === category ? 'text-[#FFD600]' : 'text-white'
//                                     } hover:bg-gray-100`}
//                                 >
//                                     {category}
//                                 </button>
//                             ))}
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Tab bar for larger screens */}
//             <div className="w-full justify-center py-4 mb-6 hidden sm:flex">
//                 <div className="bg-gray-900 sm:rounded-md flex flex-wrap space-x-2 px-4 py-2 shadow-sm max-w-full justify-center">
//                     {categories.map((category) => (
//                         <motion.button
//                             key={category}
//                             onClick={() => setActiveCategory(category)}
//                             className={`${activeCategory === category
//                                     ? 'bg-[#00000061] border-[#FFD600] text-[#FFD600] rounded-md border-2 shadow-md'
//                                     : 'text-gray-300'
//                                 } px-4 py-2 rounded-full focus:outline-none mb-2`}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             {category}
//                         </motion.button>
//                     ))}
//                 </div>
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                 <AnimatePresence>
//                     {filteredProjects.map((project) => (
//                         <motion.div
//                             key={project.id}
//                             className="relative overflow-hidden bg-gray-800 rounded-lg shadow-lg"
//                             whileHover={{ scale: 1.02 }}
//                             whileTap={{ scale: 0.98 }}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             <motion.img
//                                 src={project.image}
//                                 alt={project.name}
//                                 className="w-full h-auto object-cover"
//                                 initial={{ scale: 1 }}
//                                 whileHover={{ scale: 1.1 }}
//                                 transition={{ duration: 0.3 }}
//                             />
//                             <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
//                                 <h3 className="text-white text-2xl font-semibold mb-2">
//                                     {project.name}
//                                 </h3>
//                                 <p className="text-gray-400 text-sm mb-4 px-2">
//                                     {project.description}
//                                 </p>
//                                 <div className="flex space-x-2 mb-4">
//                                     {project.technologies.map((Icon, index) => (
//                                         <Icon key={index} className="text-white h-6 w-6" />
//                                     ))}
//                                 </div>
//                                 <Link
//                                     href={project.demo}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                 >
//                                     <motion.button
//                                         whileHover={{ scale: 1.1 }}
//                                         whileTap={{ scale: 0.9 }}
//                                         className="relative px-6 text-md py-2 bg-[#00000061] border-[#FFD600] text-[#FFD600] font-bold rounded-md border-2  "
//                                     >
//                                         View Demo
//                                     </motion.button>
//                                 </Link>
//                             </div>
//                         </motion.div>
//                     ))}
//                 </AnimatePresence>
//             </div>
//         </div>
//     );
// };

// export default RecentWork;







"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "./projectDetails";
import Link from "next/link";

const categories = ["All Categories", "Full Stack", "WordPress"] as const;

type Category = typeof categories[number];

const RecentWork = () => {
    const [activeCategory, setActiveCategory] = useState<Category>("All Categories");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [visibleProjects, setVisibleProjects] = useState<Record<Category, number>>({
        "All Categories": 4,
        "Full Stack": 4,
        "WordPress": 4,
    });

    const filteredProjects = projects.filter((project) => {
        if (activeCategory === "All Categories") return true;
        return project.techNames.includes(activeCategory);
    });

    const handleShowMore = () => {
        setVisibleProjects((prevVisibleProjects) => ({
            ...prevVisibleProjects,
            [activeCategory]: prevVisibleProjects[activeCategory] + 4,
        }));
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-[1400px]">
            {/* Dropdown for mobile */}
            <div className="w-full flex justify-center sm:hidden mb-10">
                <div className="relative w-full max-w-xs">
                    <button
                        className="w-full bg-[#00000061] border-[#FFD600] text-[#FFD600] rounded-md border-2 py-2 shadow-md"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        {activeCategory} <span>{isDropdownOpen ? "▲" : "▼"}</span>
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute left-0 top-full mt-2 w-full bg-[#000000a5] border-[#FFD600] text-[#FFD600] shadow-md rounded-md z-10">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setActiveCategory(category);
                                        setIsDropdownOpen(false);
                                        // Reset to initial visible projects when category changes
                                        setVisibleProjects((prevVisibleProjects) => ({
                                            ...prevVisibleProjects,
                                            [category]: 4,
                                        }));
                                    }}
                                    className={`w-full border-[#FFD600] border text-left py-2 px-4 mb-2 ${activeCategory === category
                                        ? "text-[#FFD600]"
                                        : "text-white"
                                    } hover:bg-gray-100`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Tab bar for larger screens */}
            <div className="w-full justify-center py-4 mb-6 hidden sm:flex">
                <div className="bg-gray-900 sm:rounded-md flex flex-wrap space-x-2 px-4 py-2 shadow-sm max-w-full justify-center">
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                // Reset to initial visible projects when category changes
                                setVisibleProjects((prevVisibleProjects) => ({
                                    ...prevVisibleProjects,
                                    [category]: 4,
                                }));
                            }}
                            className={`${activeCategory === category
                                ? "bg-[#00000061] border-[#FFD600] text-[#FFD600] rounded-md border-2 shadow-md"
                                : "text-gray-300"
                            } px-4 py-2 rounded-full focus:outline-none mb-2`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <AnimatePresence>
                    {filteredProjects
                        .slice(0, visibleProjects[activeCategory])
                        .map((project) => (
                            <motion.div
                                key={project.id}
                                className="relative overflow-hidden bg-gray-800 rounded-lg shadow-lg"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <motion.img
                                    src={project.image}
                                    alt={project.name}
                                    className="w-full h-auto object-cover"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                                    <h3 className="text-white text-2xl font-semibold mb-2">
                                        {project.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-4 px-2">
                                        {project.description}
                                    </p>
                                    <div className="flex space-x-2 mb-4">
                                        {project.technologies.map((Icon, index) => (
                                            <Icon key={index} className="text-white h-6 w-6" />
                                        ))}
                                    </div>
                                    <Link
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="relative px-6 text-md py-2 bg-[#00000061] border-[#FFD600] text-[#FFD600] font-bold rounded-md border-2"
                                        >
                                            View Demo
                                        </motion.button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                </AnimatePresence>
            </div>

            {visibleProjects[activeCategory] < filteredProjects.length && (
                <div className="flex justify-center mt-8">
                    <motion.button
                        onClick={handleShowMore}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 bg-[#00000061] border-[#FFD600] text-[#FFD600] font-bold rounded-md border-2"
                    >
                        Show More
                    </motion.button>
                </div>
            )}
        </div>
    );
};

export default RecentWork;
