//import React from 'react'
import { useState } from "react"
const index = ({name,price,state,url1,size}) => {
  const [display1,setdisplay]=useState('none')
  return (
    <div className="bg-slate-100 w-52 h-80 rounded-lg z-50">
      <div className="w-full m-auto h-52 relative" onMouseEnter={()=>{
        setdisplay('flex');
      }}
      onMouseLeave={()=>{
        setdisplay('none');
      }}
      >
      <span className="absolute 
      top-0 left-36 m-2 p-1 
      rounded-lg w-fit h-fit z-10 bg-blue-300 text-xs " >{state}</span>
        <img className="w-full h-full rounded-t-lg absolute top-0 left-0" src={url1} alt="" />
        <ul style={{display:display1, flexWrap:'wrap'}}
        className="gap-1 flex-wrap transition duration-700 ease-in-out
        flex-row absolute  backdrop-blur-md
        w-48 h-32 top-2/3 left-1/2 rounded-lg
        -translate-x-1/2 -translate-y-1/2 justify-center items-center">
        <span className="w-full">Chọn size</span>
        {size.map((el,index)=>{return <li className="w-10 m-1 p-2
         bg-white text-gray-700 rounded-lg transition-colors 
         hover:bg-slate-700 hover:text-white hover:ease-in 
          h-10 items-center justify-center 
         flex " key={index}>{el}</li>})}
      </ul>
      </div>
      <div className="grid-rows-3 text-gray-900 p-0 text-left" >
      
        <p className="uppercase font-bold m-3 mb-0">{name}</p>
        <span className="underline font-xs m-3 ">{price}</span>
      </div>
    </div>
  )
}

export default index
