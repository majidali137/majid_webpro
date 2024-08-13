"use client";

import { useState } from 'react';
// import emailjs from 'emailjs-com';
import { sendForm } from 'emailjs-com';
import { formSchema } from '../../../lib/validation';
import {z} from 'zod';
import { motion } from 'framer-motion';


interface FormDataType {
  user_name: string;
  company_name: string;
  user_email: string;
  phone_number: string;
  message: string;
}

const initialState: FormDataType = {
    user_name: '',
    company_name: '',
    user_email: '',
    phone_number: '',
    message: '',
};

interface AlertProps {
  message: string;
  type: 'success' | 'error'; // Restrict type to specific string values
}

interface AlertState {
  show: boolean;
  message: string;
  type: 'success' | 'error';
}


export default function ContactForm() {
    const [formData, setFormData] = useState<FormDataType>(initialState);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [alert, setAlert] = useState<AlertState>({ show: false, message: '', type: 'success' });
    const [isSubmitting, setIsSubmitting] = useState(false);


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const Alert = ({ message, type }: AlertProps) => (
        <div className={`${type === 'success' ? 'bg-green-500' : 'bg-red-500'} 
          fixed top-0 left-1/2 transform -translate-x-1/2 px-6 py-4 rounded shadow-md text-white 
           w-full text-center text-lg
          transition-all duration-500 ease-in-out
          ${alert.show ? 'translate-y-0' : '-translate-y-full'}`}>
            {message}
        </div>
    );


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true); // Start submitting

        const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userId = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

        if (!serviceId || !templateId || !userId) {
            console.error("EmailJS environment variables are not set!");
            setAlert({ show: true, message: 'Configuration error', type: 'error' });
            setTimeout(() => setAlert({ show: false, message: '', type: 'error' }), 5000);

            return; // Optionally, show an error message to the user
        }

        try {

            formSchema.parse(formData);
            setErrors({}); // Clear any previous errors

            const result = await sendForm(
                serviceId,
                templateId,
                e.currentTarget, // Use e.currentTarget here
                userId
            );
            console.log('Email successfully sent!', result.text);
            // Optionally reset the form or show a success message
            setFormData(initialState);
            setAlert({ show: true, message: 'Your email was successfully sent! Thank you for reaching out.', type: 'success' });
            setTimeout(() => setAlert({ show: false, message: '', type: 'success' }), 5000);

        } catch (error) {


            if (error instanceof z.ZodError) {
                const newErrors = error.issues.reduce((acc: any, issue) => {
                    acc[issue.path[0]] = issue.message;
                    return acc;
                }, {});
                setErrors(newErrors);
            } else {
                console.error('Failed to send email.', error);
                setAlert({ show: true, message: 'Failed to send your email. Please check your connection and try again.', type: 'error' });
                setTimeout(() => setAlert({ show: false, message: '', type: 'error' }), 5000);
            }
        } finally {
            setIsSubmitting(false); // End submitting regardless of outcome
        }

    };

    return (
        <section className='z-20 md:w-[920px] w-full'>
            {alert.show && <Alert message={alert.message} type={alert.type} />}
            <form onSubmit={handleSubmit} id="contact" className="space-y-8 divide-y sm:px-10 divide-gray-200 pb-24 py-8 px-12 w-full md:w-[920px]">
                <div className="space-y-8 divide-y divide-gray-200">
                    <div className="">
                        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            {/* Name */}
                            <div className="sm:col-span-3">
                                <div className="mt-1">
                                    <input
                                        placeholder="Enter your name"
                                        type="text"
                                        name="user_name"
                                        className="block w-full h-8 sm:py-8 py-6 px-4 rounded-lg bg-[#00000061] border-gray-300 shadow-sm focus:border-b-2 focus:border-[#FFD600] focus:ring-0 focus:outline-none sm:text-base text-slate-300"
                                        onChange={handleChange}
                                        value={formData.user_name || ''}
                                    />
                                    {errors.user_name && <p className="error text-red-500 pt-2">{errors.user_name}</p>}
                                </div>
                            </div>
                            {/* Company Name */}
                            <div className="sm:col-span-3">
                                <div className="mt-1">
                                    <input
                                        placeholder="Company (Optional)"
                                        type="text"
                                        name="company_name"
                                        className="block w-full h-8 sm:py-8 py-6 px-4 rounded-lg bg-[#00000061] border-gray-300 shadow-sm focus:border-b-2 focus:border-[#FFD600] focus:ring-0 focus:outline-none sm:text-base text-slate-300"
                                        onChange={handleChange}
                                        value={formData.company_name || ''}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            {/* Email */}
                            <div className="sm:col-span-3">
                                <div className="mt-1">
                                    <input
                                        placeholder="Enter your email"
                                        type="email"
                                        name="user_email"
                                        className="block rounded-lg h-8 sm:py-8 py-6 px-4 text-base w-full bg-[#00000061] shadow-sm focus:border-b-2 focus:border-[#FFD600] focus:ring-0 focus:outline-none text-slate-300"
                                        onChange={handleChange}
                                        value={formData.user_email || ''}
                                    />
                                    {errors.user_email && <p className="error text-red-500 pt-2">{errors.user_email}</p>}
                                </div>
                            </div>
                            {/* Phone Number */}
                            <div className="sm:col-span-3">
                                <div className="mt-1">
                                    <input
                                        placeholder="Phone number"
                                        type="tel"
                                        name="phone_number"
                                        className="block rounded-lg w-full h-8 sm:py-8 py-6 px-4 bg-[#00000061] shadow-sm focus:border-b-2 focus:border-[#FFD600] focus:ring-0 focus:outline-none sm:text-base text-slate-300"
                                        onChange={handleChange}
                                        value={formData.phone_number || ''}
                                    />
                                    {errors.phone_number && <p className="error text-red-500 pt-2">{errors.phone_number}</p>}
                                </div>
                            </div>
                        </div>
                        {/* Textarea */}
                        <div className="overflow-hidden mt-6 shadow-sm focus:border-b-2 focus:border-[#FFD600] focus:ring-0 focus:outline-none">
                            <textarea
                                rows={5}
                                name="message"
                                className="block w-full sm:py-8 py-6 px-4 rounded-lg bg-[#00000061] focus:border-b-2 focus:border-[#FFD600] focus:ring-0 focus:outline-none sm:text-base text-slate-300"
                                placeholder="Tell me about your project"
                                onChange={handleChange}
                                value={formData.message || ''}
                            />
                            {errors.message && <p className="error text-red-500 pt-2">{errors.message}</p>}
                        </div>
                        {/* <button type="submit" className="bg-[#ffd500de] py-3 px-12 text-white rounded-xl mt-6 hover:bg-[#F57F17]">Submit</button> */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            type="submit" disabled={isSubmitting} className={`bg-[#00000061] border-[#FFD600] text-[#FFD600] w-full sm:max-w-[200px] py-3 px-12 border-2 rounded-xl mt-6 ${isSubmitting ? 'bg-[#00000061] border-[#FFD600] text-[#FFD600] py-3 px-12 border-2 rounded-xl mt-6' : ''}`}>
                            {isSubmitting ? 'Loading...' : 'Submit'}
                        </motion.button >

                    </div>
                </div>
            </form>
        </section>
    );
}

