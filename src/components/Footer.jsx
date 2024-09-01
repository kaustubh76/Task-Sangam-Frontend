import React from 'react'
import CompanyLogo1 from '../../public/CompanyLogo1.svg'
import CompanyLogo2 from '../../public/CompanyLogo2.svg'
import CompanyLogo3 from '../../public/CompanyLogo3.svg'
import CompanyLogo4 from '../../public/CompanyLogo4.svg'
import CompanyLogo5 from '../../public/CompanyLogo5.svg'
import Marquee from 'react-fast-marquee'

const Footer = () => {

    const companys = [CompanyLogo1, CompanyLogo2, CompanyLogo3, CompanyLogo4, CompanyLogo5];
    return (
        <div className='w-full h-[4rem] bg-[#B285FF] flex justify-evenly items-center'>
            <Marquee play>
                {companys.map((company, index) => {
                    return (
                        <div className='w-full h-[4rem] flex justify-evenly items-center'>
                            <img key={index} src={company} className='h-[2rem] ml-32' />
                        </div>
                    )
                })}
            </Marquee>
        </div>
    )
}

export default Footer