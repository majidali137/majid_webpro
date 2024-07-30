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
            "open-source animated components built with React, Typescript, Tailwind CSS, and Framer Motion. 100% open-source, and customizable.",
        icon: "/next-js.svg"
      
    },
    {
        id: 2,
        name: "React Js",
        description:
            "Developed an virtual mall by using Three.js and Typescript..",
        technologies: [SiWebgl,SiTypescript, SiReact],
        icon: "/react-js.svg"
      
    },
    {
        id: 3,
        name: "Node Js",
        description:
            "Developed an virtual mall by using Three.js and Typescript..",
        icon: "/node-js.svg"
       
    },
    {
        id: 4,
        name: "MongoDB",
        description:
            "Developed an virtual mall by using Three.js and Typescript..",
        icon: "/mongodb.svg"
    },
   
];
