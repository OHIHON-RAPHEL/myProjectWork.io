import React from 'react'
import { useNavigate } from "react-router-dom"

const Card = ({ relatedItems, setAddedItem }) => {
  const navigate = useNavigate()

  

  const addItemToCartAndNavigateToCheckoutPage = (item) => {
    setAddedItem(item)
    navigate("/checkout")
  };
  
  
  return (
    <div className='bg-white mt-5 mr-8 rounded p-4 pl-1 pt-3'>
      <h1 className='pl-6'>Top Selling items</h1>
      <div>
        <ul className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
          {
            relatedItems.map((item, index) => {
              return (
                <li 
                  onClick={() => addItemToCartAndNavigateToCheckoutPage(item)} 
                  key={index} 
                  className='cursor-pointer'
                >
                  <div className='bg-white rounded-md hover:bg-slate-100 p-4'>
                    <img src={item.picture} alt="pics" className='w-full h-auto rounded mb-3'/>
                    <p className='text-center text-sm mt-2'>{item.title}</p>
                    <h4 className='text-center'>{item.amount}</h4>
                    
                    <h4 className='text-center text-sm text-gray-500'>{item.amtcancled}</h4>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Card;
