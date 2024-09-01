import React from 'react'
import Footer from '../components/Footer'
import aboutmeImage from '../../public/aboutmeImage.png'
import assetorangepurple from '../../public/assest-green-purple.svg'
import assetpinkpurple from '../../public/assest-pink-orange.svg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP);

const About = ({ aboutRef }) => {

    useGSAP(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.from('#about', {
            x: -300,
            y: 100,
            duration: 1,
            scrollTrigger: {
                trigger: '#about',
                start: 'top 90%', 
            }
        });

        gsap.from('#about-img' , {
            opacity : 0,
            duration : 1,
            scrollTrigger: {
                trigger: '#about',
                start: 'top 90%', 
            }
        });

        gsap.from('#circle1', {
            rotate: `180`,
            x: 80,
            duration: 1.5,
            scrollTrigger: {
                trigger: '#circle1',
                start: 'top 90%', 
            }
        });

        gsap.from('#circle2', {
            rotate: `-180`,
            x: 80,
            duration: 1.5,
            scrollTrigger: {
                trigger: '#circle2',
                start: 'top 90%', 
            }
        })
    }, [])
    return (
        <div className='flex flex-col h-[110vh] pt-2' ref={aboutRef}>
            <Footer />
            <div className='flex w-full'>
                <div className='flex flex-col w-1/2 my-28 ml-52' id='about'>
                    <h3 className='font-karla text-base text-[#B285FF]'>ABOUT ME</h3>
                    <h3 className='max-w-[34rem] font-Montserrat font-[600] text-6xl text-[3.3rem] -ml-1'>Expert Front-End Developer Blending Art and Technology</h3>
                    <h3 className='max-w-[28rem] mt-6 font-karla font-normal text-[#1B1B1B]'>I'm Sarah Mitchell, a front-end developer in NYC with a Computer Science degree. I specialize in creating visually appealing, user-friendly websites, blending technical skill with artistic design. I stay current with industry trends for seamless, client-friendly development.</h3>
                    <div className='flex mt-6 '>
                        <div className='flex flex-col'>
                            <h3 className='font-Montserrat text-3xl text-[#FF85D2] font-bold'>150+</h3>
                            <h3 className='max-w-16 text-center'>WEBSITES CODED</h3>
                        </div>
                        <div className='flex flex-col ml-20'>
                            <h3 className='font-Montserrat text-3xl text-[#FF85D2] font-bold text-center'>10+</h3>
                            <h3 className='max-w-20 text-center'>YEARS OF EXPERIENCE </h3>
                        </div>
                        <div className='flex flex-col ml-16 text-center'>
                            <h3 className='font-Montserrat text-5xl -mt-2 text-[#FF85D2] font-bold'>∞</h3>
                            <h3 className='max-w-20 text-center -mt-1'>LINES OF CODE</h3>
                        </div>
                    </div>
                </div>
                <div className='my-24' id='about-img'>
                    <div className='flex'>
                        <div>
                            <img id="circle1" src={assetorangepurple} className=' relative mt-[15rem] ml-24 z-50' />
                        </div>
                        <div>
                            <img  src={aboutmeImage} className='relative h-[30rem] w-[32rem] -z-50' />
                        </div>
                        <div className='-ml-[5rem]'>
                            <img id="circle2" src={assetpinkpurple} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About