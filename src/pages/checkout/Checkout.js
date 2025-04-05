import React from 'react'
import { Link } from 'react-router-dom'

const Checkout = ({ addedItem, setCheckoutItem }) => {
  const item = addedItem

  const addItemToCartAndNavigateToCartPage = (item) => {
    setCheckoutItem((prev) => {
      return [...prev, item]
    })
  }

  if (!addedItem) {
    return (
      <div>
        EMPTY STATE
      </div>
    )
  }

  return (
    <main className='bg-slate-100 pt-10 pb-5'>
      <div className='pl-4 sm:pl-8 md:pl-20'>
        <Link to="/" className='text-blue-500 hover:underline'>Home</Link>
      </div>
      <div className='flex flex-col md:flex-row justify-center space-x-5 mt-6'>
        {/* Product Information Section */}
        <div className='bg-white rounded w-full md:w-6/12 p-5'>
          <div className='flex flex-col md:flex-row space-x-0 md:space-x-8'>
            <div className='pt-5 md:pt-0'>
              <div className='text-center md:text-left'>
                <img src={item.picture} alt="product" className='mb-6 w-full md:w-64 mx-auto md:mx-0' />
                <small className='font-medium text-base'>SHARE THIS PRODUCT</small>
              </div>
            </div>
            <div className='pt-4'>
              <div className='space-x-3 text-white text-sm'>
                <small className='bg-sky-500 p-1'>Official Stores</small>
                <small className='bg-purple-400 p-1'>Brand Festival Deal</small>
              </div>
              <h4 className='text-xl mt-3'>{item.title}</h4>
              <small className='text-sm'>Brand: {item.names}</small>
              <div className='font-bold text-3xl mt-4'>
                <h1>{item.amount}</h1>
              </div>
              <div className='flex flex-col text-lg'>
                <small>In stock</small>
                <small>+ shipping from 250 to LEKKI-AJAH (SANGOTEDO)</small>
                <small>Price: {item.amount}</small>
              </div>
              <button onClick={() => addItemToCartAndNavigateToCartPage(item)} className='bg-yellow-500 w-full md:w-[32rem] p-3 rounded mt-4'>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>

        {/* Delivery and Returns Section */}
        <div className='bg-white w-full md:w-80 h-48 p-4 mt-5 md:mt-0'>
          <h3 className='font-bold'>DELIVERY AND RETURNS</h3>
          <div className='flex flex-col'>
            <small>REFLEX EXPRESS</small>
            <small>Free delivery on thousands of products in Lagos</small>
            <small>Ibadan, Abuja Details</small>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Checkout;
