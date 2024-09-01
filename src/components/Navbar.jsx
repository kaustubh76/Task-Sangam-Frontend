import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../public/logo.svg'
import Button from './Button'

const Navbar = ({ aboutRef, workRef, serviceRef, contactRef }) => {
  return (
    <div className='flex justify-between mt-5 mx-12'>
      <div>
        <img src={Logo} className='h-[2rem]' alt="Logo" />
      </div>
      <div className='flex font-karla mt-2 text-[#1B1B1B] cursor-pointer ml-16'>
        <p className='mx-4 hover:border-b-[3.5px] border-transparent border-b-[3.5px] hover:border-[#B285FF] cursor-pointer'  onClick={() => {
          aboutRef.current?.scrollIntoView({
            behavior: 'smooth'
          })
        }}>About</p>
        <p className='mx-4 hover:border-b-[3.5px] border-transparent border-b-[3.5px] hover:border-[#B285FF] cursor-pointer' onClick={() => {
          workRef.current?.scrollIntoView({
            behavior: 'smooth'
          })
        }}>Works</p>
        <p className='mx-4 hover:border-b-[3.5px] border-transparent border-b-[3.5px] hover:border-[#B285FF] cursor-pointer' onClick={() => {
          serviceRef.current?.scrollIntoView({
            behavior: 'smooth'
          })
        }}>Services</p>
        <p className='mx-4 hover:border-b-[3.5px] border-transparent border-b-[3.5px] hover:border-[#B285FF] cursor-pointer' onClick={() => {
          contactRef.current?.scrollIntoView({
            behavior: 'smooth'
          })
        }}>Contact</p>
        <Link to="/job" className='mx-4 hover:border-b-[3.5px] border-transparent border-b-[3.5px] hover:border-[#B285FF] cursor-pointer'>
          Job
        </Link>
        <Link to="/post" className='mx-4 hover:border-b-[3.5px] border-transparent border-b-[3.5px] hover:border-[#B285FF] cursor-pointer'>
          Post
        </Link>
      </div>
      <div>
        <Button className={'bg-[#1B1B1B] text-white w-[11rem] text-sm h-[2rem]'} text={'Connect Wallet'} />
      </div>
    </div>
  )
}

export default Navbar
