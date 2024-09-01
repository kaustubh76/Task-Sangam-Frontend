import React from 'react'

const Button = ({ className, text , onClick }) => {
    return (
        <div onClick={() => {
            onClick();
        }}>
            <button className={`w-[6.5rem] h-[1.75rem] rounded-3xl font-karla ${className} text-center`}>{text}</button>
        </div>
    )
}

export default Button