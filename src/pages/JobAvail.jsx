import React, { useState } from 'react';
import JobCard from '../components/JobCard';
import RouteNavbar from '../components/RouteNavbar';
const JobAvail = ({ aboutRef, workRef, serviceRef, contactRef }) => {
  return (
    <div className='w-full flex flex-col overflow-hidden bg-[#e7e7e7]'>
        <RouteNavbar/>
        <div className='flex flex-col items-center'>
        <JobCard jobTitle={"Job title"} describe={"This is nice job"} time={"12:00"} expert={"all-rounder"}/>
      <JobCard jobTitle={"Job title"} describe={"This is nice job"} time={"12:00"} expert={"all-rounder"}/>
      <JobCard jobTitle={"Job title"} describe={"This is nice job"} time={"12:00"} expert={"all-rounder"}/> 
      </div>

      </div> 
  );
};

export default JobAvail;