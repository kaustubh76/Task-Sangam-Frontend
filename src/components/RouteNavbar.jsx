
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from '../../public/logo.svg'
import Button from './Button'

const RouteNavbar = ({ aboutRef, workRef, serviceRef, contactRef }) => {
  const navigate = useNavigate();

  const handleScroll = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <div className='flex justify-between mt-5 mx-16'>
      <div>
        <img src={Logo} className='h-[2rem]' alt="Logo" />
      </div>
      <div className='flex font-karla mt-2 text-[#1B1B1B] cursor-pointer ml-16'>
      <Link to="/" className='mx-4 hover:border-b-[3.5px] border-transparent border-b-[3.5px] hover:border-[#B285FF] cursor-pointer'>
          About
        </Link>
        <Link to="/" className='mx-4 hover:border-b-[3.5px] border-transparent border-b-[3.5px] hover:border-[#B285FF] cursor-pointer'>
          Work
        </Link>
        <Link to="/" className='mx-4 hover:border-b-[3.5px] border-transparent border-b-[3.5px] hover:border-[#B285FF] cursor-pointer'>
          Services
        </Link>
        <Link to="/" className='mx-4 hover:border-b-[3.5px] border-transparent border-b-[3.5px] hover:border-[#B285FF] cursor-pointer'>
          Contact
        </Link>
        <Link to="/job" className='mx-4 hover:border-b-[3.5px] border-transparent border-b-[3.5px] hover:border-[#B285FF] cursor-pointer'>
          Job
        </Link>
        <Link to="/post" className='mx-4 hover:border-b-[3.5px] border-transparent border-b-[3.5px] hover:border-[#B285FF] cursor-pointer'>
          Post
        </Link>
      </div>
      <div>
        <Button className={'bg-[#1B1B1B] text-white w-[13rem] text-sm h-[2rem]'} text={'Connect Wallet'} />
      </div>
    </div>
  )
}

export default RouteNavbar
