import React from 'react'
import { useNavigate } from "react-router-dom"

const Card = ({relatedItems, setAddedItem}) => {
  const navigate = useNavigate()
  const addItemToCartAndNavigateToCheckoutPage = (item) => {
    setAddedItem(item)
    navigate("/checkout")
  }
  return (
    <div className='bg-white mt-5 mr-8 rounded p-4 pl-1 pt-3'>
      <h1 className='pl-6'>Top Selling items</h1>
      <div>
        <ul className='flex justify-around'>
         {
           relatedItems.map((item, index) => {
             return (
               <li onClick={() => addItemToCartAndNavigateToCheckoutPage(item)} key={index} className=''>
                    <div className='bg-white rounded-md hover:bg-slate-100'>
                    <img src={item.picture} alt="picture" className='w-44 rounded'/>
                    <p className='text-center text-sm mt-2'>{item.title}</p>
                    <h4>{item.amount}</h4>
                    <h4>{item.amtcancled}</h4>
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

export default Card