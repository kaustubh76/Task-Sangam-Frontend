import React from 'react'
import Review from '../components/Review';
import testimonial1 from '/testimonial-client1.svg';
import testimonial2 from '/testimonial-client2.svg';
import testimonial3 from '/testimonial-asset.svg';
import testimonial4 from '/testimonial-asset1.svg';
import testimonial5 from '/testimonial-asset2.svg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
    useGSAP(() => {
        gsap.from('#circle5', {
            rotate: `180`,
            x: 80,
            duration: 1.5,
            scrollTrigger: {
                trigger: '#circle5',
                start: 'top 90%', 
            }
        })
        gsap.from('#circle6', {
            rotate: `180`,
            x: 80,
            duration: 1.5,
            scrollTrigger: {
                trigger: '#circle6',
                start: 'top 90%', 
            }
        })

    }, [])
    return (
        <>
            <div className='w-full h-full flex flex-col bg-[#1B1B1B] overflow-hidden'>             
                <div className='flex flex-col mt-16 ml-[5rem]'>
                    <h6 className='font-Montserrat font-extrabold text-1xl max-w-[50rem] text-[#B285FF]'>TESTMONIALS</h6>
                    <h1 className='font-Montserrat font-bold text-3xl max-w-[50rem] text-[#FFFFFF]'>What client's say</h1>
                </div>

                <div className='relative z-[+1]'>
                <div className='flex w-full items-center justify-evenly mt-[3rem] ml-[4rem] mr-[4rem]'>
                    <Review data={'“Sarah elevated our brand with her precision front-end development. The seamless blend of technology and design exceeded our expectations. Choosing her was an investment in excellence—we highly recommend her for exceptional digital experiences.”'} image={testimonial1} classs = {'bg-[#FFD885]'} who={"Emily Thompson"} pos={"CEO, InnovateTech Solutions"}/>
                    <Review data={'“The attention to detail and innovative touch she brought to our project exceeded our expectations. Her ability to weave intricate code with creative design transformed our website into a user-friendly masterpiece.”'} image={testimonial2} classs = {'bg-[#D2FF85]'} who={"Jessica Carter"} pos={"Marketing Manager, TechInnovate Co."}/>
                </div>
                </div>

                <div className='relative'>
                    <img id="circle6" className='mt-[-14%] z-[-1] ml-[-4%]'src={testimonial3}></img>
                    {/* <img className='absolute top-[-39rem] left-[37rem]' src={testimonial4}></img> */}
                    <img id="circle5" className='absolute bottom-[-25%] right-[0%]' src={testimonial5}></img>
                </div>

            </div>
        </>
    )
}

export default Testimonials;