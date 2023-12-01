import React from 'react'
import {market} from '../data'
import { useNavigate } from "react-router-dom"

const Listbar = ({setRelatedItems}) => {
    const navigate = useNavigate()
    const addItemToCartAndNavigateToMarketPage = (item) => {
        setRelatedItems(item)
        navigate("/market")
    }

  return (
    <div className='bg-white w-48 rounded '>
                  <ul className='pl-8 flex flex-col gap-4 pt-2 pb-2 text-sm text-gray-700 cursor-pointer'>
                     {
                       market.map((item, index) => {
                         return (
                             <li onClick={() => addItemToCartAndNavigateToMarketPage(item)} key={index}>
                                <small className='hover:text-yellow-400 font-semibold'>{item.name}</small>
                             </li>
                          )
                       })
                     }
                  </ul>
   </div>
  )
}

export default Listbar
