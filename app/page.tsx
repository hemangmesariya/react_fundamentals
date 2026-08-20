"use client"

import React, { useState } from 'react'
const page = () => {


  const [counter, setcounter] = useState(0)

  const increment = () =>{setcounter(counter+1)}
  const decrement = () =>{setcounter(counter-1)}

  return (
    <>
      <div className="bg-blue-500 p-2 text-white font-bold">
          Counter App
      </div>
      <div className='flex items-center justify-center gap-2'>
        <button onClick={increment} className='bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-black'>+</button>
        <div className='p-2 bg-gray-300 px-4 py-2 rounded-md'>{counter}</div>
        <button onClick={decrement} className='bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-black'>-</button>
      </div>
      
    </>
  )
}

export default page