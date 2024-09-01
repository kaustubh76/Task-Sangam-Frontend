import React from 'react';
import Button from './Button';
import toast, { Toaster } from 'react-hot-toast';

const JobForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const notify = () => toast.success('Job Posted Successfully');
        notify();
    }

    return (
        <>
        <div className='w-[35em] bg-[#FFFFFF] rounded-md mb-[5rem]'>
            <form className='p-[2rem]' onSubmit={handleSubmit}>
                <h2 className='font-karla font-bold mb-[5px]'>Job title</h2>
                <input 
                    className="p-2 w-[30rem] border border-gray-300 rounded-md focus:outline-none" 
                    placeholder='ex, need Web developer for figma'
                />
                <h2 className='font-karla font-bold mt-[2rem] mb-[5px]'>Describe about the project</h2>
                <textarea 
                    className="p-2 w-[30rem] border border-gray-300 rounded-md focus:outline-none" 
                    placeholder='write here'
                ></textarea>
                
                <div className="mb-5">
                    <h2 className="font-karla font-bold mt-[2rem] mb-[5px]">Expertise level you want</h2>
                    <div className='flex'>
                        <div className="flex items-center mb-4">
                            <input 
                                id="developer" 
                                type="radio" 
                                name="job-role" 
                                value="developer" 
                                className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800" 
                                required 
                            />
                            <label 
                                htmlFor="developer" 
                                className="ml-2 text-sm font-medium text-black"
                            >
                                Fresher
                            </label>
                        </div>

                        <div className="flex items-center mb-4 ml-[2rem]">
                            <input 
                                id="designer" 
                                type="radio" 
                                name="job-role" 
                                value="designer" 
                                className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800"
                            />
                            <label 
                                htmlFor="designer" 
                                className="ml-2 text-sm font-medium text-black"
                            >
                                Medium
                            </label>
                        </div>

                        <div className="flex items-center mb-4 ml-[2rem]">
                            <input 
                                id="product-manager" 
                                type="radio" 
                                name="job-role" 
                                value="product-manager" 
                                className="w-4 h-4 text-orange-600 bg-gray-100 border-gray-300 focus:ring-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:ring-offset-gray-800"
                            />
                            <label 
                                htmlFor="product-manager" 
                                className="ml-2 text-sm font-medium text-black"
                            >
                                Experienced
                            </label>
                        </div>
                    </div>

                    <div className="mb-5">
                        <label 
                            htmlFor="job-role" 
                            className="block mb-2 text-sm font-bold text-gray-900 mt-[2rem]"
                        >
                            How long will your work take?
                        </label>
                        <select 
                            id="job-role" 
                            className="p-2 w-[30rem] shadow-sm bg-gray-50 border border-gray-300 text-sm text-black rounded-md focus:outline-none"
                            required
                        >
                            <option value="">Ex: 1-6 months</option>
                            <option value="1_month">1 month</option>
                            <option value="2_month">2 months</option>
                        </select>
                    </div>

                    <Button className="bg-orange-600 text-[#FFFFFF]" text={"Post Job"} type='submit'/>
                </div>
            </form>
            <Toaster />
        </div>
        </>
    );
}

export default JobForm;
