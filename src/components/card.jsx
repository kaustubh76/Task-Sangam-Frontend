import React from 'react'

const Card = ({ className, para, text , image }) => {
    return (
        <div>
            <div className={`h-[309px] w-[296px] relative z-10 ${className} rounded-lg`}>
                <img className='pl-5 pt-10' src={image} alt=""/>
                <h1 className={`text-3xl ${className} pt-5 pl-5 font-Montserrat`}>{text}</h1>
                <p className={`font-karla ${className} p-5 text-base`}>{para}</p>
            </div>
        </div>
    )
}

export default Card;