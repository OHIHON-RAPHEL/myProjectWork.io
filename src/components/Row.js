import React from 'react'
import {Link} from 'react-router-dom'

const Row = () => {
  return (
    <div className='flex bg-slate-200 justify-around space-x-64'>
        <div>
            <Link to="/sell" className='text-sm text-amber-700'>Sell on reflex</Link>
        </div>
        <div className='flex space-x-6 font-semibold mt-1'>
            <small>REFLEX</small>
            <small>PAY</small>
            <small>FOOD</small>
            <small>LOGISTICS</small>
        </div>
    </div>
  )
}

export default Row