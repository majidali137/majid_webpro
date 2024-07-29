"use client";
import React, { useState } from "react";
import { useEffectOnce, useEventListener } from 'usehooks-ts';

import PreLoader from "./components/other/PreLoader";
import useBlobity from "./components/blobity/useBlobity";

import Blur from "./components/overlay/Blur";
import Color from "./components/overlay/Color";

import NavBar from "./sections/NavBar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Tools from "./sections/Tools.tsx";
import Services from "./sections/Services.tsx";
import Timeline from "./components/eduction/Timeline.tsx";
import { FaRegCircle } from 'react-icons/fa';
import Eduction from "./sections/Eduction.tsx";
import Skills from "./sections/Skills.tsx";
import BackToTopButton from "./components/BackToTopButton/BackToTopButton.tsx";



export default function Home() {

  // const stages = [
  //     { title: 'Stage 1', description: 'Description of stage 1.', icon: <FaRegCircle /> },
  //     { title: 'Stage 2', description: 'Description of stage 2.', icon: <FaRegCircle /> },
  //     { title: 'Stage 1', description: 'Description of stage 1.', icon: <FaRegCircle /> },
  //     { title: 'Stage 2', description: 'Description of stage 2.', icon: <FaRegCircle /> },
  //     { title: 'Stage 1', description: 'Description of stage 1.', icon: <FaRegCircle /> },
  //     { title: 'Stage 2', description: 'Description of stage 2.', icon: <FaRegCircle /> },
  //     { title: 'Stage 1', description: 'Description of stage 1.', icon: <FaRegCircle /> },
  //     { title: 'Stage 2', description: 'Description of stage 2.', icon: <FaRegCircle /> },
  //     // More stages as needed
  //   ];

  const stages = [
    {
      title: 'Fullstack Developer',
      period: 'June 2019 - Present',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'WordPress'],
    },
    {
      title: 'Fullstack Developer',
      period: 'June 2019 - Present',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'WordPress'],
    },
    {
      title: 'Fullstack Developer',
      period: 'June 2019 - Present',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'WordPress'],
    },
    {
      title: 'Fullstack Developer',
      period: 'June 2019 - Present',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'WordPress'],
    },
    {
      title: 'Fullstack Developer',
      period: 'June 2019 - Present',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'WordPress'],
    },
    {
      title: 'Fullstack Developer',
      period: 'June 2019 - Present',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'WordPress'],
    },
    {
      title: 'Fullstack Developer',
      period: 'June 2019 - Present',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'jQuery', 'WordPress'],
    },
    // Add more stages as needed
  ];




  const [isMobile, setIsMobile] = useState(false);

  useEffectOnce(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    setIsMobile(window.innerWidth < 768);
  });

  useEventListener('resize', () => {
    setIsMobile(window.innerWidth < 768);
  });

  useBlobity(
    {
      licenseKey: "opensource",
      focusableElementsOffsetX: 4,
      focusableElementsOffsetY: 4,
      color: "#ffffff",
      dotColor: "#ffffff",
      invert: true,
      focusableElements:
        "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
      font: "'Inter', sans-serif",
      fontSize: 16,
      fontWeight: 900,
      opacity: 1.0,
      fontColor: "#ffffff",
      zIndex: 35,
      size: 50,
      radius: 5,
      magnetic: false,
    }
  );

  return (
    <>
      <PreLoader />
      <Blur />
      <Color />
      <NavBar />
      <main
        className="flex flex-col items-center justify-center bg-black"
      >
        <Hero />
        <About />
        <Services />
        <Work />
        <Tools />
        <Eduction />
        <Skills/>
        <Contact />
       
        <Footer />
        <BackToTopButton />
      </main>

    </>
  );
}


