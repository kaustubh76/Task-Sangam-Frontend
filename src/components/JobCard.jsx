
import React, { useState } from 'react';
import PopUp from './PopUp';

const JobCard = ({ jobTitle, describe, time, expert }) => {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    const handleApplyBidClick = () => {
        setIsPopUpOpen(true);
    };

    const handleClosePopUp = () => {
        setIsPopUpOpen(false);
    };

    return (
        <div className='font-karla'>
            <div className='md:w-[700px] max-md:w-auto sm:h-[250px] max-sm:h-auto bg-white rounded-xl drop-shadow-xl mt-4'>
                <div className='sm:flex justify-between'>
                    <h1 className='text-black text-3xl font-semibold font-karla text-left pt-10 pl-10 pb-1'>{jobTitle}</h1>
                    <button 
                        onClick={handleApplyBidClick} 
                        className='max-sm:hidden border-[#FF4C4A] rounded-3xl h-12 mt-10 mr-10 px-10 border-2 text-[#FF4C4A] font-semibold'
                    >
                        Apply Bid
                    </button>
                </div>
                
                <h2 className='text-[#00000099] font-mono text-xl text-left pl-10 pb-4'>{describe}</h2>
                <h1 className='text-black text-xl font-semibold font-karla text-left pt-3 pl-10'>Time duration: 
                    <span className='text-[#00000099] text-xl font-karla text-left pl-2'>{time}</span>
                </h1>
                <h1 className='text-black text-xl font-semibold font-karla text-left pt-3 pl-10'>Expertise: 
                    <span className='text-[#00000099] text-xl font-karla text-left pl-2'>{expert}</span>
                </h1>
                <button 
                    onClick={handleApplyBidClick} 
                    className='sm:hidden border-[#FF4C4A] rounded-3xl h-12 mt-10 mr-10 px-10 border-2 text-[#FF4C4A] font-semibold mb-5'
                >
                    Apply Bid
                </button>
            </div>

            {isPopUpOpen && <PopUp onClose={handleClosePopUp} />}
        </div>
    );
};

export default JobCard;
