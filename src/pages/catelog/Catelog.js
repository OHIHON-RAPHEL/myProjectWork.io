import React from 'react'

const Catelog = ({ catelog }) => {
  return (
    <div>
      <h1>hey it me</h1>
      <ul className='flex justify-around'>
         {
           catelog.map((index) => {
             return (
               <li key={index} className=''>
                    <div className='bg-white rounded-md hover:bg-slate-100'>
                    <p className='text-center text-sm mt-2'>baby</p>
                    </div>
               </li>
             )
           })
         }
        </ul>
    </div>
  )
}

export default Catelog

