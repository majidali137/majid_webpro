import {
    SiNextdotjs,
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiAstro,
    SiRedux,
    SiMysql
} from "react-icons/si";
import { DiMongodb } from "react-icons/di"
import { FaWordpress } from "react-icons/fa";
import {IconType} from "react-icons";
import { FaPhp } from "react-icons/fa";
import { FaElementor } from "react-icons/fa6";

export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: IconType[];
  techNames: string[];
  techLinks: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const projects = [
    {
        id: 0,
        name: "Powerflow",
        description:
            "open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
        technologies: [SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, DiMongodb],
        techNames: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Mongodb"],
        techLinks: ["https://www.typescriptlang.org/", "https://reactjs.org/", "https://nextjs.org/", "https://tailwindcss.com/", "https://www.mongodb.com/"],
        github: "https://github.com/",
        demo: "https://power-flow.vercel.app/",
        image: "/power-flow.png",
        available: true,
    },
    {
        id: 1,
        name: "Power Funnels",
        description:
            "Developed an virtual mall by using Three.js and Typescript..",
        technologies: [SiAstro,SiTypescript, SiReact, ],
        techNames: ["Astro ", "Typescript", "React"],
        techLinks: ["https://astro.build/", "https://www.typescriptlang.org/", "https://reactjs.org/"],
        github: "https://github.com/",
        demo: "https://dev.power-funnels.com/",
        image: "/PowerFunnels.png",
        available: true,
    },

    {
        id: 2,
        name: "TRT Colombia",
        description:
            "This website was built with WordPress by using elementor and fully animated.",
        technologies: [FaWordpress,FaElementor, FaPhp,SiMysql],
        techNames: ["Wordpress", "Elementor","MySql", "PHP" ],
        techLinks: ["https://wordpress.org/", "https://elementor.com/", "https://www.mysql.com/", "https://php.org/"],
        // github: "https://github.com/",
        demo: "https://trtcolombia.com/",
        image: "/trt-colombia.png",
        available: true,
    },
    {
        id: 3,
        name: "Tulsa Physical Therapy",
        description:
            "This website was built with WordPress by using elementor and fully animated.",
        technologies: [FaWordpress,FaElementor, SiMysql, FaPhp],
        techNames: ["Wordpress", "Elementor", "MySql", "PHP" ],
        techLinks: ["https://wordpress.org/", "https://elementor.com/", "https://www.mysql.com/","https://php.org/"],
        // github: "https://github.com/",
        demo: "https://vitalitytulsa.com/",
        image: "/tulsa.png",
        available: true,
    },
    {
        id: 4,
        name: "Portfolio",
        description:
            "Developed an virtual mall by using Three.js and Typescript..",
        technologies: [SiRedux,SiTypescript, SiReact, ],
        techNames: ["Redux ", "Typescript", "React"],
        techLinks: ["https://redux.js.org/", "https://www.typescriptlang.org/", "https://reactjs.org/"],
        github: "https://github.com/",
        demo: "https://majid.power-devs.com/",
        image: "/portfolio.png",
        available: true,
    },
];

