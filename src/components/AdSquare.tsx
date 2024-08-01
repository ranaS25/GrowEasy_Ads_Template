import React from 'react'

interface propsType{
  title: string;
  description: string;
  CTAtext: string;
}

const AdSquare: React.FC<any> = ({ details }) => {
  const { title, description, CTAtext } = details
  return <div className='bg-white aspect-square relative'>
    <img src={"https://media.istockphoto.com/id/1342252269/photo/happy-black-man-using-laptop-working-online-over-blue-background.jpg?s=612x612&w=0&k=20&c=I47l6uUuDklwq_sxNBI3tfbZ4_5Gx_tAY-MBdnEVXJs="}
    className='w-3/5 aspect-square object-cover absolute top-1/2 right-0 transform: -translate-y-[55%]'/>
    <img src={"/images/square1.png"}
      className='w-full aspect-square absolute top-0' />
    <div className='w-full aspect-square absolute z-10 top-0 text-white'>
      <p>{ title}</p>
      <p>{ description}</p>
      <button>{ CTAtext}</button>
    </div>
    <img src={"/icons/icon_edit.png"} className='w-12 h-12 absolute z-20 right-0 m-2 bg-black/20'/>
  </div>
}

export default AdSquare