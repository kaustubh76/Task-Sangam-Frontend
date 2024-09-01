import React from 'react'
import Button from './Button';

const Form = () => {
    return (
        <>
        <div className='w-full ml-[9rem]'>
        <div className='flex flex-col'>
            <div className='flex'>
            <div className='border-b-2 border-[#1B1B1B] mb-[2rem] w-[25%]'><input className='bg-[#FFEFE4] text-1.5xl w-[100%] focus:outline-none'placeholder='Name'></input></div>    
            <div  className='border-b-2 border-[#1B1B1B] mb-[2rem] w-[25%] ml-[1rem]'><input className='bg-[#FFEFE4] text-1.5xl w-[100%]' placeholder='Surname'></input></div>
            </div>

            <div className='border-b-2 border-[#1B1B1B] mb-[2rem] w-[50%]'><input className='bg-[#FFEFE4] text-1.5xl w-[100%] focus:outline-none' placeholder='Email address'></input></div>       
            <div className='border-b-2 border-[#1B1B1B] mb-[2rem] w-[50%]'><input className='bg-[#FFEFE4] text-1.5xl w-[100%] focus:outline-none' placeholder='Industry'></input></div>
        </div>

        <div className='border-b-2 border-[#1B1B1B] mb-[2rem] w-[50%] h-[10rem]'>
            <input className='bg-[#FFEFE4] text-1.5xl w-[100%] focus:outline-none' placeholder='Your messgage'></input>
        </div>
        
        <div className='flex w-[50%]'>
        <Button className={'bg-[#1B1B1B] text-white'} text={'Contact'} ></Button>
        <h5 className='ml-[0.9rem]'>By submitting this form you read and agree to the Terms & Conditions and our privacy policy.</h5>
        </div>
        </div>
        </>
    )
}

export default Form;