import React from 'react'
import tecno from '../../images/shopearn.png'

const Sell = () => {
  return (
    <div className='bg-slate-100 flex justify-center pb-7'>
        <div className='w-full sm:w-9/12'>
            {/* Hero Section */}
            <div className='bg-white p-3 mt-4 rounded'>
                <div className='bg-yellow-600 p-16 sm:p-32 rounded'>
                    <div className='flex'>
                        <h1 className='text-4xl sm:text-6xl text-white font-extrabold'>Sell on Reflex</h1>
                    </div>
                </div>
            </div>
            
            {/* Why Sell Section */}
            <div className='bg-white mt-3 pt-3 pb-3'>
                <h3 className="text-center font-semibold text-lg sm:text-xl">Why sell on Reflex?</h3>
                <div className='flex flex-wrap justify-center gap-3 mt-3'>
                    <h4 className='bg-red-700 p-3 rounded text-white text-sm sm:text-base'>Connect with more buyers</h4>
                    <h4 className='bg-red-700 p-3 rounded text-white text-sm sm:text-base'>Sell more products</h4>
                    <h4 className='bg-red-700 p-3 rounded text-white text-sm sm:text-base'>Top notch seller support</h4>
                    <h4 className='bg-red-700 p-3 rounded text-white text-sm sm:text-base'>Expert products delivery</h4>
                    <h4 className='bg-red-700 p-3 rounded text-white text-sm sm:text-base'>Improve revenue</h4>
                    <h4 className='bg-red-700 p-3 rounded text-white text-sm sm:text-base'>Free offline/online training</h4>
                </div>
            </div>

            {/* Testimonial Section */}
            <div className='bg-white mt-3 rounded p-5'>
                <h2 className='text-center font-semibold text-lg sm:text-xl'>Testimonial</h2>
                <div className='flex flex-wrap justify-center sm:justify-start items-center space-x-0 sm:space-x-14 mt-5'>
                    <div className='w-full sm:w-96'>
                        <img src={tecno} alt="Tecno" className='w-full rounded' />
                    </div>
                    <small className='mt-5 sm:mt-20 text-sm sm:text-base'>
                        Selling on Reflex has been very rewarding with higher turnover and good profit.
                    </small>
                </div>
            </div>

            {/* How it Works Section */}
            <div className='bg-white mt-3 rounded p-5'>
                <h2 className='text-center font-semibold text-lg sm:text-xl'>How it Works</h2>
                <div className='flex flex-wrap justify-center gap-5 mt-5'>
                    <div className='flex flex-col w-full sm:w-1/4'>
                        <small className='font-medium'>Step 1: Register under 5 minutes</small>
                        <small className='mt-3'>Fill the registration form</small>
                        <small>Submit the required documents</small>
                        <small>(a) Business registration</small>
                        <small>(b) Bank account details</small>
                    </div>
                    <div className='flex flex-col w-full sm:w-1/4'>
                        <small className='font-medium'>Step 2: Become an eCommerce expert</small>
                        <small className='mt-3'>Complete the dedicated new seller training</small>
                        <small>Activate your Seller Center account to manage your shop</small>
                    </div>
                    <div className='flex flex-col w-full sm:w-1/4'>
                        <small className='font-medium'>Step 3: List your products and sell</small>
                        <small className='mt-3'>Upload your best-selling products and start selling</small>
                    </div>
                    <div className='flex flex-col w-full sm:w-1/4'>
                        <small className='font-medium'>Step 4: Benefit from our promotion and marketing</small>
                        <small className='mt-3'>Get visibility from our campaigns/promotions and insights on best-selling products.</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sell;
