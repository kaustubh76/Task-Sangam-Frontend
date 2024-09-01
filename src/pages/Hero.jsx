import React from 'react'
import Navbar from '../components/Navbar'
import Button from '../components/Button'
import BgAssetPurple from '../../public/bg-asset-purple.svg'
import BgAssetGreen from '../../public/bg-asset-green.svg'
import BgAssetOrange from '../../public/bg-asset-orange.svg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Hero = ({ aboutRef, workRef, serviceRef, contactRef }) => {

    useGSAP(() => {
        gsap.from('#heading-hero', {
            marginLeft: -100,
            duration: 0.9,
            filter: `blur(8px)`
        })
        gsap.from('#heading-hero', {
            marginLeft: 100,
            filter: `blur(8px)`,
            duration: 1,
        })
        gsap.from('#heading-hero', {
            marginLeft: -100,
            filter: `blur(8px)`,
            duration: 1.1,
        })
        gsap.from('#heading-hero', {
            marginLeft: 100,
            filter: `blur(8px)`,
            duration: 1.2,
        })
        gsap.from('#heading-hero', {
            marginTop: -100,
            duration: 0.9,
            filter: `blur(8px)`
        })
        gsap.from('#heading-hero', {
            marginTop: 100,
            filter: `blur(8px)`,
            duration: 1,
        })
        gsap.from('#heading-hero', {
            marginTop: -100,
            duration: 1.1,
            filter: `blur(8px)`
        })
        gsap.from('#heading-hero', {
            marginTop: 100,
            filter: `blur(8px)`,
            duration: 1.2,
        })
        gsap.to('#heading-hero', {
            filter: `blur(0px)`,
            duration: 1.5,
            marginLeft: 0,
        })
        gsap.from('#navbar', {
            y: -100,
            filter: `blur(8px)`,
            duration: 1.5
        })
        gsap.from('#asset-1', {
            rotate: `180`,
            x: -50,
            duration: 1.5
        })
        gsap.from('#asset-2', {
            rotate: `180`,
            x: 80,
            duration: 1.5
        })
        gsap.from('#asset-3', {
            rotate: `-180`,
            x: 80,
            duration: 1.5
        })
    }, [])

    return (
        <div className='flex flex-col h-[100vh]'>
            <div id='navbar'>
                <Navbar workRef={workRef} serviceRef={serviceRef} contactRef={contactRef} aboutRef={aboutRef} />
            </div>
            <div className='w-full h-full flex items-center justify-center'>
                <div className='w-[16rem] flex items-center h-full mt-16'>
                    <img src={BgAssetPurple} className='size-96 -ml-16 ' id='asset-1' />
                </div>
                <div className='flex flex-col flex-wrap justify-center items-center mt-16 md:mt-32'>
                    <h3 id='heading-hero' className='font-Montserrat font-medium text-7xl max-w-[50rem] text-center bg-gradient-to-r from-[#FCD68B] from-10% via-[#F9784C] via-30% to-[#9C356D] to-90% ... text-transparent bg-clip-text blur-none'>A YOUNG CREATIVE DESIGNER BASED IN SAN DIEGO</h3>
                    <h3 className='font-Montserrat font-normal text-[#1B1B1B] text-lg text-center max-w-[45rem] mt-4 '>Transforming ideas into visually stunning designs while crafting user-friendly websites with a touch of innovation.</h3>
                    <Button className={'bg-[#FF85D2] text-white font-karla w-[9rem] h-[2.75rem] text-center text-lg font-medium mt-8'} text={'Get in touch!'} onClick={() => {
                        contactRef.current?.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }} />
                </div>
                <div className='flex flex-col items-center justify-between'>
                    <img src={BgAssetGreen} className='size-32 ml-28 mt-8' id='asset-2' />
                    <img src={BgAssetOrange} className='size-52 mt-52 ml-16' id='asset-3' />
                </div>
            </div>
        </div>
    )
}

export default Hero