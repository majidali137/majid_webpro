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
            "open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
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
            "Developed an virtual mall by using Three.js and Typescript..",
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
            "Developed an virtual mall by using Three.js and Typescript..",
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
            "Developed an virtual mall by using Three.js and Typescript..",
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
            "This website was built with WordPress by using elementor and fully animated.",
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
            "This website was built with WordPress by using elementor and fully animated.",
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
            "This website was built with WordPress by using elementor and fully animated.",
        technologies: [FaWordpress, FaElementor, SiMysql, FaPhp],
        techNames: ["WordPress "],
        techLinks: ["https://wordpress.org/", "https://elementor.com/", "https://www.mysql.com/", "https://php.org/"],
        // github: "https://github.com/",
        demo: "https://vitalitytulsa.com/",
        image: "/projects/leefutcher-banner.jpg",
        available: true,
    },

];

