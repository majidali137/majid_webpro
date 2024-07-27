// // components/Timeline.js
// import { motion } from 'framer-motion';

// interface Stage {
//   title: string;
//   description: string;
//   icon: JSX.Element;  // Assuming you're passing a JSX element for icons
// }

// interface TimelineProps {
//   stages: Stage[];
// }

// const Timeline: React.FC<TimelineProps> = ({ stages }) => {
//   return (
//     <div className="relative flex flex-col items-center justify-center min-h-screen py-10 w-full">
//       {/* Center line */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-white h-full"></div>

//       {stages.map((stage, index) => (
//         <div key={index} className={`flex w-full items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
//           <div className="w-1/2">
//             <motion.div
//               initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-20px" }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               className="mx-auto p-4 bg-gray-800 rounded-lg shadow-lg cursor-pointer hover:scale-105 hover:bg-gray-700 transition duration-300"
//             >
//               <h2 className="text-xl font-bold text-white">{stage.title}</h2>
//               <p className="text-white">{stage.description}</p>
//             </motion.div>
//           </div>
//           <div className="flex justify-center items-center w-1/12">
//             <div className="bg-white p-2 rounded-full">
//               {stage.icon}
//             </div>
//           </div>
//           <div className="w-1/2" /> {/* Empty div for spacing */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Timeline;











// components/Timeline.js
import { motion } from 'framer-motion';

interface Stage {
    title: string;
    period: string;
    description: string;
    skills: string[];
  }
  
  interface TimelineEntryProps extends Stage {
    leftSide: boolean;
  }
  
  interface TimelineProps {
    stages: Stage[];
  }


// components/Timeline.js


const TimelineEntry: React.FC<TimelineEntryProps> = ({ title, period, description, skills, leftSide }) => {
  return (
    <div className={`flex ${leftSide ? 'flex-row' : 'flex-row-reverse'} items-center`}>
      <div className="w-1/2">
        <motion.div
          initial={{ opacity: 0, x: leftSide ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-blue-500 text-white p-4 rounded-lg shadow-lg m-4"
        >
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-sm mb-2">{period}</p>
          <p>{description}</p>
          <div className="flex mt-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-blue-700 text-xs rounded-full px-2 py-1 mr-2">{skill}</span>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="w-1/12 flex justify-center">
        <div className="bg-white w-5 h-5 rounded-full mt-4"></div>
      </div>
      <div className="w-1/2" /> {/* Empty div for spacing */}
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ stages }) => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-red-500 h-full"></div>
      {stages.map((stage, index) => (
        <TimelineEntry
          key={index}
          leftSide={index % 2 === 0}
          {...stage}
        />
      ))}
    </div>
  );
};

export default Timeline;
