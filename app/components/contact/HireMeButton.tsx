import { motion } from 'framer-motion';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { CiLinkedin } from "react-icons/ci";
import { SiFiverr } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import Image from 'next/image';
import Link from 'next/link';
const HireMeButton = () => {
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

    <div className="flex flex-col items-center justify-center  z-30 relative mt-10 sm:mt-0">

      <div className="flex space-x-4 mb-14">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#FFD600]">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-4  rounded-full bg-[#00000061] border-[#FFD600] border-2">
            <FaFacebook size={30} />
          </motion.div>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#FFD600]">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-4  rounded-full bg-[#00000061] border-[#FFD600] border-2">
            <FaGithub size={30} />
          </motion.div>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#FFD600]">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-4  rounded-full bg-[#00000061] border-[#FFD600] border-2">
            {/* <TbBrandFiverr size={30}/> */}
            <Image src="/fiverr-1.svg" width={30} height={30} alt='fiverr' />
          </motion.div>
        </a>
        <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer" className="text-[#FFD600]">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="p-4 bg-[#00000061] border-[#FFD600] border-2 rounded-full">
            <CiLinkedin size={30} />
          </motion.div>
        </a>
      </div>

      <Link
        href="#contact"
        data-blobity-magnetic="false"
        onClick={handleScroll}
        aria-label="Scroll to about section">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative px-24 text-xl py-4 bg-[#00000061] border-[#FFD600] text-[#FFD600] font-bold rounded-md border-2  "
        >
          HIRE ME!
        </motion.button>
      </Link>
    </div>
  );
};

export default HireMeButton;
