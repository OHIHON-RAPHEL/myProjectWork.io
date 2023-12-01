import React from 'react'
import tecno from '../../imagess/shopearn.png'

const Sell = () => {
  return (
    <div className='bg-slate-100 flex justify-center pb-7'>
        <div className='w-9/12'>
            <div className='bg-white p-3 mt-4 rounded'>
                <div className='bg-yellow-600 p-32 rounded'>
                    <div className='flex'>
                        <h1 className='text-6xl text-white font-extrabold'>Sell on Reflex</h1>
                        <div>
                            <img className='w-20'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white mt-3 pt-3 pb-3'>
                <h3 className="text-center font-semibold">Why sell on reflex?</h3>
                <div>
                    <div className='flex space-x-3 pl-3 mt-3 text-white'>
                        <h4 className='bg-red-700 p-3 rounded'>Connect with more buyers</h4>
                        <h4 className='bg-red-700 p-3 rounded'>Sell more products</h4>
                        <h4 className='bg-red-700 p-3 rounded'>Top notch seller support</h4>
                        <h4 className='bg-red-700 p-3 rounded'>Expert products delivery</h4>
                        <h4 className='bg-red-700 p-3 rounded'>Improve revenue</h4>
                        <h4 className='bg-red-700 p-3 rounded'>Free ofline/online traning</h4>
                    </div>
                </div>
            </div>
            <div className='bg-white mt-3 rounded p-5'>
                <h2 className='text-center font-semibold'>Teatimonial</h2>
                <div className='flex space-x-14'>
                    <div className=''>
                        <img src={tecno} alt="Tecno" className='w-96'/>
                    </div>
                    <small className='mt-20 text-sm'>sell on jumia has been very rewarding with higher turn over and good profit</small>
                </div>
            </div>
            <div className='bg-white mt-3 rounded'>
                <h2 className='text-center font-semibold'>How it Works</h2>
                <div className='flex space-x-5'>
                    <div>
                        <img />
                    </div>
                    <div className='flex flex-col'>
                        <small className='font-medium'>step 1: Register under 5 minutes</small>
                        <small className='mt-3'>fill the registration form</small>
                        <small>submit the required documents</small>
                        <small>(a) buisness registration</small>
                        <small>(b) bank accouounts details</small>
                    </div>
                    <div>
                        <img />
                    </div>
                    <div className='flex flex-col'>
                        <small className='font-medium'>step 2: Become an ecommerce expert</small>
                        <small className='mt-3'>complete the dedicated new seller<br></br> traning</small>
                        <small>activate your sellercenter account to manage<br></br> your shop</small>
                    </div>
                    <div>
                        <img />
                    </div>
                    <div className='flex flex-col'>
                        <small className='font-medium'>step 3: List your products and sell</small>
                        <small className='mt-3'>upload your best selling products<br></br> and start selling</small>
                    </div>
                    <div>
                        <img />
                    </div>
                    <div className='flex flex-col'>
                        <small className='font-medium'>step 4: Nenefit from our promotion and marketing</small>
                        <small className='mt-3'>get visibility from our campaign/promioitions<br></br> and insight on best selliung products.</small>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <div>
                        <div>
                            <h3></h3>
                            <h4></h4>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sell
