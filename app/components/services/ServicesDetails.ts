import {
    SiReact,
    SiTypescript,
    SiWebgl,

} from "react-icons/si";


export type ServicesProps = {
    id: number;
    name: string;
    description: string;

    icon: string;

};

export const services = [
    {
        id: 0,
        name: "Next Js",
        description:
            "Build fast, SEO-friendly web applications with Next.js. I offer expert services in creating dynamic, server-rendered, and highly responsive websites.",
        icon: "/next-js.svg"

    },
    {
        id: 2,
        name: "React Js",
        description:
            "Offering React.js services to build dynamic, responsive web applications with reusable components, ensuring seamless user experiences and efficient performance.",
        technologies: [SiWebgl, SiTypescript, SiReact],
        icon: "/react-js.svg"

    },
    {
        id: 3,
        name: "Node Js",
        description:
            "Offering efficient Node.js services for scalable backend solutions, real-time applications, and API development. Optimize performance with expert Node.js development.",
        icon: "/node-js.svg"

    },
    {
        id: 4,
        name: "MongoDB",
        description:
            "Offering expert MongoDB services, including database setup, optimization, scaling, and management, ensuring seamless performance and robust data security.",
        icon: "/mongodb.svg"
    },

];
