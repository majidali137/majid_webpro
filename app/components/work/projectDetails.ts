import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiMysql,
    SiRedux,
    SiHeadlessui
} from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaWordpress, FaPhp, FaCcStripe } from "react-icons/fa";
import { IconType } from "react-icons";
import { FaElementor } from "react-icons/fa6";


export type ProjectProps = {
    id: number;
    name: string;
    description: string;
    technologies: IconType[];
    techNames: string[];
    techLinks: string[];
    github?: string;
    demo: string;
    image: string;
    available: boolean;
};

export const projects = [
    {
        // Full Stack and custom websites
        id: 0,
        name: "Power Flow",
        description:
            "Power Flow is a full-stack Q&A platform built with Next.js, Tailwind CSS, and MongoDB, offering functionalities similar to Stack Overflow.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, DiMongodb],
        techNames: ["Full Stack"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.mongodb.com/"],
        github: "https://github.com/majidali137/power_flow",
        demo: "https://power-flow.vercel.app/",
        image: "/projects/power-flow.jpg",
        available: true,
    },

    {
        id: 1,
        name: "Imaginify",
        description:
            "Imaginify is a full-stack AI-powered image editing app built with Next.js, Tailwind CSS, and MongoDB for seamless design.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, DiMongodb, FaCcStripe],
        techNames: ["Full Stack"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://www.mongodb.com/", "https://stripe.com/"],
        github: "https://github.com/majidali137/ai_saas_app",
        demo: "imaginify-img.vercel.app/",
        image: "/projects/Imaginify.jpg",
        available: true,
    },
    {
        id: 2,
        name: "Portfolio",
        description:
            "Showcase your work with a sleek, modern portfolio built using React.js and styled with Tailwind CSS for a dynamic, responsive design.",
        technologies: [SiReact, SiTailwindcss, SiRedux, SiHeadlessui],
        techNames: ["Full Stack"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://www.mongodb.com/", "https://stripe.com/"],
        github: "https://github.com/majidali137/ai_saas_app",
        demo: "https://majid.power-devs.com/",
        image: "/projects/Portfolio.jpg",
        available: true,
    },


    //  WordPress Websites
    {
        id: 3,
        name: "Power Funnels",
        description:
            "Power Funnels is a WordPress-based digital marketing agency specializing in creating high-converting sales funnels and marketing strategies.",
        technologies: [FaWordpress, FaElementor, FaPhp],
        techNames: ["WordPress"],
        techLinks: ["https://astro.build/", "https://www.typescriptlang.org/", "https://reactjs.org/"],
        github: "https://github.com/thewaqasPro/power-funnels",
        demo: "https://power-funnels.com/",
        image: "/projects/power-funnels.jpg",
        available: true,
    },

    {
        id: 4,
        name: "TRT Colombia",
        description:
            "TRT Colombia: A WordPress-based platform for scheduling online doctor appointments, providing seamless access to medical consultations in Colombia.",
        technologies: [FaWordpress, FaElementor, FaPhp, SiMysql],
        techNames: ["WordPress"],
        techLinks: ["https://wordpress.org/", "https://elementor.com/", "https://www.mysql.com/", "https://php.org/"],
        // github: "https://github.com/",
        demo: "https://trtcolombia.com/",
        image: "/projects/trt-colombia-banner.jpg",
        available: true,
    },
    {
        id: 5,
        name: "Vitality Tulsa Physical Therapy",
        description:
            "Vitality Tulsa Physical Therapy: A WordPress site offering expert physical therapy services in Tulsa, featuring user-friendly appointment scheduling and information.",
        technologies: [FaWordpress, FaElementor, SiMysql, FaPhp],
        techNames: ["WordPress"],
        techLinks: ["https://wordpress.org/", "https://elementor.com/", "https://www.mysql.com/", "https://php.org/"],
        // github: "https://github.com/",
        demo: "https://vitalitytulsa.com/",
        image: "/projects/vitalitytulsa-banner.jpg",
        available: true,
    },
    {
        id: 6,
        name: "Lee Futcher",
        description:
            "Lee Futcher’s project, built with WordPress, features a sleek, user-friendly website showcasing professional expertise, services, and portfolio",
        technologies: [FaWordpress, FaElementor, SiMysql, FaPhp],
        techNames: ["WordPress "],
        techLinks: ["https://wordpress.org/", "https://elementor.com/", "https://www.mysql.com/", "https://php.org/"],
        // github: "https://github.com/",
        demo: "https://leefutcher.com/",
        image: "/projects/leefutcher-banner.jpg",
        available: true,
    },

];

