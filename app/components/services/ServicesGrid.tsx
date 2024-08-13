import React from "react";
import ServicesCard from "./ServicesCard";
import { services, ServicesProps } from "./ServicesDetails";

const ServicesGrid = () => {
    return (
        <>
            {/* <div className="max-w-[1200px] mx-auto">

                <div className=" flex flex-col  lg:flex-row gap-y-12 gap-4 item-center lg:max-w-[1250px]  ">
                    {services.map((service: ServicesProps) => (
                        <ServicesCard
                            id={service.id}
                            key={service.id}
                            name={service.name}
                            description={service.description}
                            icon={service.icon}
                           
                        />

                    ))}
                </div> */}
  {/* </div > */}

            <div className="max-w-[1300px] mx-auto md:mt-[50px] lg:mt-[0]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 items-center lg:max-w-[1400px]">
                    {services.map((service: ServicesProps) => (
                        <ServicesCard
                            id={service.id}
                            key={service.id}
                            name={service.name}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>



      
        </>
    );
};

export default ServicesGrid;
