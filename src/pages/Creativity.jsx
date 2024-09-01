import React from 'react'
import image1 from '../../public/image1.svg';
import image2 from '../../public/image2.svg';
import image3 from '../../public/image3.svg';
import Marquee from 'react-fast-marquee'

const Creativity = ({ workRef }) => {
    return (
        <div ref={workRef}>
            <div className='text-[#B285FF] pl-20 pt-20 font-karla text-center'>PROJECTS</div>
            <div className='pl-20'>
                <h1 className='text-5xl font-semibold text-center'>Where Code Meets Creativity</h1>
            </div>

            <div className='flex items-center justify-between pt-5 pl-20 pb-20 mx-32 mt-10 rounded-xl'>
                <Marquee play className='rounded-xl'>
                    <div>
                        <img src={image1} className='h-96 ml-20' alt="" />
                        <p className='font-karla text-center'>UrbanBlend</p>
                    </div>
                    <div className='ml-20'>
                        <img src={image2} className='h-96' alt="" />
                        <p className='font-karla text-center'>Techinnovate</p>
                    </div>
                    <div className='ml-20'>
                        <img src={image3} className='h-96' alt="" />
                        <p className='font-karla text-center'>PlayfulPixels</p>
                    </div>
                </Marquee>
            </div>

        </div>
    )
}

export default Creativity;