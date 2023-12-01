import React from 'react'
import {Link} from 'react-router-dom'

const Row = () => {
  return (
    <div className='flex bg-slate-200 p-2 pl-64'>
        <div className=''>
            <Link to="/sell" className='text-sm text-amber-700'>Sell on reflex</Link>
        </div>
        <div className='flex space-x-6 pl-80 font-semibold'>
            <small>REFLEX</small>
            <small>PAY</small>
            <small>FOOD</small>
            <small>LOGISTICS</small>
        </div>
    </div>
  )
}

export default Row
