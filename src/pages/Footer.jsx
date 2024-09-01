import React from 'react'
import Form from '../components/Form';
import Button from '../components/Button';
import social from '/social.svg';
const Footer = ({contactRef}) => {
    return (
        <div ref={contactRef}>
            <div className='h-[70%] w-full flex flex-col bg-[#FFEFE4] overflow-hidden'>
                <div className='flex mt-[5rem] justify-evenly w-[130rem]'>
                    <div className='flex flex-col w-[40%] ml-[8rem]'>
                        <h1 className='text-[#B285FF] font-karla text-[1.5rem]'>CONTACT</h1>
                        <h1 className='text-4xl font-semibold text-[#1B1B1B] font-Montserrat'>Ready to start your project?</h1>
                        <h4 className='font-karla text-[#1B1B1B] text-[1.2rem] mt-[1rem]'>Dive into a world where technology and artistry converge, elevating online interactions and setting new standards for digital excellence.</h4>
                    </div>
                <Form/>
            </div>

            <div className='flex justify-between items-stretch mt-[2rem] ml-[2rem] mr-[2rem] mb-[2rem]'>
                <h5>All rights reserved @examplecompany </h5>
                <img className='ml-[-8rem] cursor-pointer'src={social}></img>
                <h4 className='text-[#1B1B1B] font-karla'>Privacy Policy</h4>
            </div>

            

            </div>


        </div>
    )
}

export default Footer;