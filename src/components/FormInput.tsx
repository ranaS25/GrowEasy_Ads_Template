import React  from 'react'

const FormInput = ({ title, text, changeText }: { title: string, text: string, changeText: (s: string)=>void }) =>{

  return (
    <div className="mt-5 ">
      <p className="text-sm">{title}</p>
      <input type="text" className='p-2 mt-2 text-sm border border-gray w-full rounded text-black  focus:outline-none' value={text} onChange={(e)=>{changeText(e.target.value)}}/>
    </div>
  )
}


export default FormInput