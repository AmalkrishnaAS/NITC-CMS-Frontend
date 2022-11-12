import React from 'react'

const Title = ({text,count}) => {
  return (
    <h1 className="text-4xl font-semibold text-center text-gray-700 mb-6 text-3xl flex justify-center items-center ">{text}<span className='bg-blue-700 text-white text-sm block w-8 h-8 flex justify-center items-center  rounded-full mt-1 ml-3'>
    {count} </span></h1>
  )
}

export default Title