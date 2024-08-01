import React from 'react'

export default function FormInput({ title }: { title: string }) {
  return (
    <div className="mt-5 ">
      <p className="text-sm">{title}</p>
      <input type="text" className='p-2 mt-2 text-sm border border-gray w-full rounded text-black  focus:outline-none'/>
    </div>
  )
}
