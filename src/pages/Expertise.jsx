import React from 'react'
import arrow from '../../public/arrow.svg';
import fire from '../../public/fire.svg';
import wallet from '../../public/wallet.svg';
import Button from '../components/Button';
import Card from '../components/card';
import lines from '../../public/bg-3line.svg';
import circle from '../../public/bg-image.svg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Expertise = ({ serviceRef, contactRef }) => {

    useGSAP(() => {
        gsap.from('#circle3', {
            rotate: `180`,
            x: 80,
            duration: 1.5,
            scrollTrigger: {
                trigger: '#circle3',
                start: 'top 90%', 
            }
        })
        gsap.from('#circle4', {
            rotate: `-180`,
            x: 80,
            duration: 1.5,
            scrollTrigger: {
                trigger: '#circle4',
                start: 'top 90%', 
            }
        })
    }, [])

    return (

        <div className='bg-[#FFEFE4] w-full h-[742px]' ref={serviceRef}>
            <div className='text-[#B285FF] text-center pt-24 font-karla'>SERVICES</div>
            <div className='text-center p-2 text-4xl font-semibold font-Montserrat'>My expertise</div>

            <div className='relative'>
                <img src={lines} id="circle4"className='absolute z-0' alt="" />
            </div>

            <div className='flex justify-center'>
                <div className='w-10/12 flex flex-wrap justify-evenly pt-9 '>
                    <Card text={'Development'} image={arrow} className={`bg-[#927DE3] text-white`}
                        para={'Meticulous front-end development, ensuring every line of code is a pixel-perfect masterpiece.'} />

                    <Card text={'Wed Design'} image={fire} className={`bg-[#FFD885]`}
                        para={'With a degree and four years of expertise, experience digital elevation with visually stunning and user-friendly interfaces.'} />

                    <Card text={'E-commerce'} image={wallet} className={`bg-[#D2FF85] `}
                        para={'Online shopping experiences that not only captivate but also convert, ensuring your eCommerce stands out in the digital marketplace.'} />
                </div>
            </div>

            <div className='relative -top-12'>
                <img id="circle3" src={circle} className='absolute right-56 -top-96 z-0' alt="" />
            </div>

            <div className='text-center'>
                <Button className={'bg-[#FF85D2] text-white font-karla w-[9rem] h-[2.75rem] text-center text-lg font-medium mt-8'} text={'Get in touch!'} onClick={() => {
                    contactRef.current?.scrollIntoView({
                        behavior: 'smooth'
                    })
                }} />
            </div>
        </div>
    )
}

export default Expertise;