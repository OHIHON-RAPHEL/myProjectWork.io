import React from 'react'
import {card2} from '../data'
// import { useNavigate } from "react-router-dom"

const Card2 = ({setAddedItem}) => {
  // const navigate = useNavigate();
  // const addItemToCartAndNavigateToCheckoutPage = (item) => {
  //   setAddedItem(item)
  //   navigate("/checkout")
  // }

  return (
    <div className='bg-white mt-5 mr-8 rounded p-4 pl-1 pt-3'>
      <div className='pl-6 bg-cyan-200 p-2 mb-4 mt-0'>
         <h1>Limited Stock Deal</h1>
      </div>
      <div className=''>
        <ul className='flex justify-around'>
         {
           card2.map((item, index) => {
             return (
               <li key={index} className=''>
                    <div className='bg-white rounded-md hover:bg-slate-100'>
                    <img src={`../images/grocery/${item.img}`} className='w-44 rounded'/>
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

export default Card2