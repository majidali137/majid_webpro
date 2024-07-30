import React from 'react'
import AnimatedTitle from '../animations/AnimatedTitle'
import ProgressBar from '../components/skills/ProgressBar'


const Skills = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center  pb-20  md:pb-44  lg:pb-56"
      id="skills"
    >

      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">

        <div className="bg-[#0E1016] bg-cover  sm:mt-32 px-6 max-w-2xl mx-auto">
          <AnimatedTitle
            text={"My Skills"}
            className={
              "mb-10 text-center text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-8 md:text-[60px] lg:text-[80px]"
            }
            subtitle="Proficient in full-stack web development, specializing in creating responsive, user-friendly websites that drive business success."
            subClassName="mt-4 mb-5 text-justify sm:mt-0 text-left  text-[18px] sm:text-[20px] md:mb-10 md:text-[35px] lg:text-[20px] font-medium"
            wordSpace={"mr-[10px]"}
            charSpace={"mr-[0.0001em]"}
          />

        </div>

        <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center pt-6 sm:pt-10">


          <div className="space-y-4 p-4 max-w-screen-xl mx-auto">
            <div className="flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="HTML / CSS" percentage={100} color="#4caf50" />
              </div>
              <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill=" Bootstrap / tailwind css" percentage={100} color="#4caf50" />
              </div>
              {/* <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="Bootstrap" percentage={90} color="#FFD600" />
              </div>
              <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="tailwind css" percentage={95} color="#00bcd4" />
              </div> */}
              <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="JavaScript" percentage={95} color="#00bcd4" />
              </div>
              <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="React" percentage={90} color="#FFD600" />
              </div>
              <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="Next js / typescript" percentage={100} color="#4caf50" />
              </div>
              {/* <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="typescript" percentage={95} color="#00bcd4" />
              </div> */}
              <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="Node js" percentage={80} color="#ff9800" />
              </div>
              <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="Wordpress" percentage={100} color="#4caf50" />
              </div>
              <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="SEO" percentage={80} color="#ff9800" />
              </div>
              <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="Astro js / alpine js" percentage={80} color="#ff9800" />
              </div>
              {/* <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="alpine js" percentage={90} color="#FFD600" />
              </div> */}
              <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="mongodb / postgresql / app write" percentage={90} color="#FFD600" />
              </div>
              {/* <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="postgresql" percentage={90} color="#FFD600" />
              </div> */}
              {/* <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="app write" percentage={90} color="#FFD600" />
              </div>

              <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="Front-end development" percentage={100} color="#4caf50" />
              </div> */}
              {/* <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="back-end development" percentage={90} color="#FFD600" />
              </div> */}
              <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="figma" percentage={80} color="#ff9800" />
              </div>
              <div className="w-full md:w-1/2 px-8 mb-4">
                <ProgressBar skill="github" percentage={100} color="#4caf50" />
              </div>
              
            </div>
          </div>


        </div>




      </div>
    </section>
  )
}

export default Skills