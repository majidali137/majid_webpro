import { motion } from 'framer-motion';


interface Stage {
    title: string;
    period: string;
    description: string;
    name: string;
}

interface TimelineEntryProps extends Stage {
    leftSide: boolean;
}

interface TimelineProps {
    stages: Stage[];
}
const TimelineEntry: React.FC<TimelineEntryProps> = ({ title, period, description, name, leftSide }) => {
    return (
        <div className={`flex ${leftSide ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}>
            {/* Content block */}
            <div className="w-full lg:w-1/2">
                <motion.div
                    initial={{ opacity: 0, x: leftSide ? -100 : 100, scale: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.05, backgroundColor: '#F9A825' }} // Zoom-in effect and blue background on hover
                    className="group bg-slate-800 text-white py-8 px-6 rounded-lg shadow-lg m-4 cursor-pointer hover:shadow-xl"
                >
                    <h3 className="font-bold text-lg">{title}</h3>
                    <h3 className="font-semibold text-[16px] text-gray-300 group-hover:text-white">{name}</h3>
                    {/* Period with hover effect linked to parent group hover */}
                    <p className="text-sm font-semibold mb-2 mt-2 bg-slate-600 rounded-full px-4 py-2 max-w-[130px] group-hover:bg-[#F57F17]">
                        {period}
                    </p>
                    <p>{description}</p>
                </motion.div>
            </div>

            <div className="hidden lg:flex w-10 justify-center items-center">
                <div className="bg-white w-5 h-5 rounded-full my-4 absolute"></div>
            </div>

            {/* Empty div for spacing on larger screens */}
            <div className="hidden lg:block w-1/2" />
        </div>
    );
};




const Timeline: React.FC<TimelineProps> = ({ stages }) => {

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen ">
            {/* Vertical line for larger screens, centered */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-400 h-full"></div>
            {/* Vertical line for mobile screens, right-aligned */}
            <div className="hidden "></div>

            {stages.map((stage, index) => (
                <TimelineEntry
                    key={index}
                    leftSide={index % 2 === 0}
                    {...stage}
                />)
            )}
        </div>
    );
};

export default Timeline;