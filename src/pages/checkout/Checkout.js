import React from 'react'
import {Link} from 'react-router-dom'

const Checkout = ({addedItem, setCheckoutItem}) => {
  const item = addedItem
  const addItemToCartAndNavigateToCartPage = (item) => {
    setCheckoutItem((prev) => {
      return [...prev, item]
    })
  }

  if(!addedItem) {
    return (<div>
      EMPTY STATE
    </div>)
  }
  

  return (
    <main className='bg-slate-100 pt-10 pb-5'>
      <div className='pl-56'>
            <Link>home</Link>
      </div>
            <div className='flex justify-center space-x-5'>
              <div className='bg-white rounded pl-5 pr-5 pb-20 w-6/12'>
                  <div className='flex space-x-8'>
                     <div className='pt-5'>
                        <div>
                           <img src={item.picture} alt="ear" className='mb-10'/>
                           <small className='font-medium text-base '>SHARE THIS PRODUCT</small>
                        </div>
                     </div>
                     <div className='pt-4'>
                        <div className='space-x-5 text-white text-base'>
                           <small className='bg-sky-500 p-1'>Official Stores</small>
                           <small className='bg-purple-400 p-1'>Brand Festival Deal</small>
                        </div>
                        <h4 className='text-xl mt-3'>{item.title}</h4>
                        <small className='text-sm '>Brand: {item.names}</small>
                        <div className='font-bold text-3xl mt-4'>
                           <h1>{item.amount}</h1>
                        </div>
                        <h1 className='mt-4 font-bold text-3xl'>{}</h1>
                        <div className='flex flex-col text-lg'>
                          <small>In stock</small>
                          <small>+ shipping from 250 to LEKKI-AJAH (SANGOTEDO)</small>
                          <small>Price : {} </small>
                        </div>
                        <button onClick={() => addItemToCartAndNavigateToCartPage(item)} className='bg-yellow-500 w-[32rem] p-3 rounded'>ADD TO CART</button>
                     </div>
                  </div>
              </div>
              <div className='bg-white w-80 h-48 p-4'>
                <h3 className='font-bold'>DELIVERY AND RETURNS</h3>
                <div className='flex flex-col'>
                  <small>REFLEX EXPRESS</small>
                  <small>Free delivery on thousands of products in lagos</small>
                  <small>Ibadan Abuja Details</small>
                </div>
              </div>
            </div>
    </main>
  )
}

export default Checkout
