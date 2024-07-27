import React from "react";
import ServicesCard from "./ServicesCard";
import { services, ServicesProps } from "./ServicesDetails";

const ServicesGrid = () => {
    return (
        <>
            <div className="max-w-[1200px] mx-auto">

                <div className=" flex flex-col sm:flex-row gap-4 item-center lg:max-w-[1250px]  ">
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
