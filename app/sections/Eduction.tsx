import React from 'react'
import AnimatedTitle from '../animations/AnimatedTitle'
import Timeline from '../components/eduction/Timeline'

const Eduction = () => {
  const stages = [
    {
      title: 'Full Stack Web Developer',
      name: 'Power Funnels | Canada',
      period: '2022-present',
      description: 'Power Funnels is a full-service agency that’s been purposely built to help businesses small and large thrive in an increasingly complicated marketing landscape',
    },
    {
      title: 'Bachelor of Computer Sciences',
      name: 'Government College University Faisalabad',
      period: '2021-present',
      description: 'A Bachelor of Computer Science The degree has a major focus on computers and technology, to study management and informat on science, and there are reduced requirements for mathematics.',
    },
    {
      title: 'Intermediate of Computer Sciences',
      name: 'Govt. College SKP',
      period: '2018-2020',
      description: 'Intermediate of Computer Science (ICS) program provides a general education in many aspects of Computer Science and Software Development. Now the computer is so much vast field',
    },
    {
      title: 'Matric in Computer Science',
      period: '2016-2018',
      name: 'Quaid Public School SKP',
      description: 'Matric in computer science is the first and basic step to start studying in the field of computer. In this field I entered in 2016 and I struggled and worked hard and passed with first division.',
    },

  ];

  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center  pb-20  md:pb-44  lg:pb-56"
      id="eduction"
    >

      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"My Eduction"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center pt-10 sm:pt-24">

          <Timeline stages={stages} />

        </div>




      </div>
    </section>
  )
}

export default Eduction