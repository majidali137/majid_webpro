"use client"

import { useState } from 'react';


export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Process form data here
        console.log(formData);
    };

    return (
        <section className=' z-20 sm:w-[920px] w-full'>
            <form   onSubmit={handleSubmit} id="contact" className="space-y-8 divide-y sm:px-10 divide-gray-200  pb-24 py-8 px-12 w-full   sm:w-[920px] ">
        <div className="space-y-8 divide-y divide-gray-200">
          <div className="">
            <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                 {/* Name */}
              <div className="sm:col-span-3">
                <div className="mt-1">
               
                  <input
                  placeholder="Enter your name"
                    type="text"
                    name="user_name"
                    id="first-name"
                    autoComplete="given-name"
                    className="block h-8 w-full focus:border-b-2 rounded-lg focus:border-[#FFD600]  focus:ring-0 focus:outline-none  sm:py-8 py-6 px-4   bg-[#00000061]   sm:text-base text-slate-300"
                  />
                </div>
              </div>
                {/* Company Name */}
              <div className="sm:col-span-3">
                <div className="mt-1">
                  <input
                  placeholder="Company (Optional)"
                    type="text"
                    name="company_name"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full h-8 sm:py-8 py-6 px-4 rounded-lg  bg-[#00000061] border-gray-300 shadow-sm focus:border-b-2 focus:border-[#FFD600]  focus:ring-0 focus:outline-none sm:text-base text-slate-300"
                  />
                </div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              {/* Email */}
              <div className="sm:col-span-3">
                <div className="mt-1">
                  <input
                  placeholder="Enter Your email"
                    type="email"
                    name="user_email"
                    id="email"
                    autoComplete="given-name"
                    className="block rounded-lg h-8 sm:py-8 py-6 px-4 text-base w-full  bg-[#00000061]  shadow-sm focus:border-b-2 focus:border-[#FFD600]  focus:ring-0 focus:outline-none text-slate-300"
                  />
                </div>
              </div>
                    {/* Phone Number */}
              <div className="sm:col-span-3">
                <div className="mt-1">
                  <input
                  placeholder="Phone number"
                    type="tel"
                    name="phone_number"
                   
                    id="phone-number"
                    autoComplete="family-name"
                    className="block rounded-lg w-full h-8 sm:py-8 py-6 px-4   bg-[#00000061]  shadow-sm focus:border-b-2 focus:border-[#FFD600]  focus:ring-0 focus:outline-none sm:text-base text-slate-300"
                  />
                </div>
              </div>
            </div>
            {/* Textarea */}
            <div className="overflow-hidden  mt-6 shadow-sm focus:border-b-2 focus:border-[#FFD600]  focus:ring-0 focus:outline-none">
              <textarea
                rows={5}
                name="message" 
                id="description"
                className="block w-full sm:py-8 py-6 px-4 rounded-lg   bg-[#00000061] focus:border-b-2 focus:border-[#FFD600]  focus:ring-0 focus:outline-none sm:text-base text-slate-300"
                placeholder="Tell me about your project"
                defaultValue={""}
              />
            </div>
            <button type="submit" className="bg-[#ffd500de] py-3 px-6  text-white   rounded-xl mt-6 hover:bg-[#F57F17]">Submit</button>
            
          </div>
        </div>
      </form>

        </section>
    );
}
