import React, { useState } from 'react';
import JobForm from '../components/JobForm';
import RouteNavbar from '../components/RouteNavbar';
import toast, { Toaster } from 'react-hot-toast';
const PostJobPage = () => {
  return (
    <div className='w-full flex flex-col overflow-hidden bg-[#e7e7e7]'>
      <RouteNavbar />
      <h1 className='font-karla mb-[2rem] mt-[2rem] text-[3rem] font-bold text-[black] text-center'>Post a Job</h1>
      <div className='w-full flex items-center justify-evenly'>            
      <JobForm />

      </div> 
    </div>
  );
};

export default PostJobPage;