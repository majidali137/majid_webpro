// // components/SocialIcon.js

// import { motion } from "framer-motion";
// import { ReactNode } from "react";

// interface SocialIconProps {
//     icon: ReactNode;
//     text: string;
// }

// const SocialIcon = ({ icon, text }: SocialIconProps) => {
//     return (
//         <section className="z-20 ">

//             <motion.div
//                 className="flex items-center justify-center px-6 py-10 max-w-sm bg-[#00000061] rounded-lg shadow-lg"
//                 whileHover={{ scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//             >
//                 <div className="flex items-center space-x-4">
//                     <div className="text-[#FFD600] text-[25px]">{icon}</div>
//                     <span className="text-white font-medium">{text}</span>
//                 </div>
//             </motion.div>
//         </section>
//     );
// };

// export default SocialIcon;















import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SocialIconProps {
    icon: ReactNode;
    text: string;
    type: 'phone' | 'email' | 'address';  // Added a new 'type' prop to determine the link type
}

const SocialIcon = ({ icon, text, type }: SocialIconProps) => {
    // Function to render link based on the type
    const renderLink = () => {
        if (type === 'phone') {
            return <a href={`tel:${text}`} className="text-white font-medium">{text}</a>;
        } else if (type === 'email') {
            return <a href={`mailto:${text}`} className="text-white font-medium">{text}</a>;
        } else {
            return <span className="text-white font-medium">{text}</span>;
        }
    };

    return (
        <section className="z-20">
            <motion.div
                className="flex items-center justify-center px-6 py-10 max-w-sm bg-[#00000061] rounded-lg shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <div className="flex items-center space-x-4">
                    <div className="text-[#FFD600] text-[25px]">{icon}</div>
                    {renderLink()}
                </div>
            </motion.div>
        </section>
    );
};

export default SocialIcon;

