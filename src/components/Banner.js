import React from 'react'
import Logo from '../images/banner.gif'

const Banner = () => {
  
  return (
    <div className='bg-amber-500 p-3 flex justify-center'>
      <div className=''>
        <a href="https://www.jumia.com.ng/mlp-free-delivery" target="_blank" rel="noreferrer noopener" className='text-lg text-white font-bold'>
           <div>
              <img src={Logo} alt="Nav Logo" />
           </div>
        </a>
      </div>
    </div>
  )
}


export default Banner
