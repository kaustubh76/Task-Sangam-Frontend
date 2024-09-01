import React from 'react'
const Review = ({data, image, classs, who, pos}) => {
  return (
    <div className='flex'>
          <img className='h-[400px]'src = {image}></img>
          <div className={`flex flex-col h-[400px] w-[50%] ${classs} rounded-tr-[6%] rounded-br-[6%] p-[2rem] justify-between`}>
          <div className='font-karla italic text-[1.25rem]'>{data}</div>
            <div className='font-bold font-karla text-[1.25rem]'>{who}</div>
            <div className='text-[#1B1B1B]'>{pos}</div>
          </div>
    </div>
  )
}

export default Review;