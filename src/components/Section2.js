// import React from 'react'
// import {cards} from '../data'
// import { useNavigate } from "react-router-dom"

// const Section2 = ({setAddedItem}) => {
//   const navigate = useNavigate()
//   const addItemToCartAndNavigateToCheckoutPage = (item) => {
//     setAddedItem(item)
//     navigate("/checkout")
//   }

//   return (
//     <div className='bg-white mt-5 mr-6 rounded p-4 pl-1 pt-3'>
//       <h1 className='pl-6 font-semibold text-lg pb-3'>Top Selling items</h1>
//       <div>
//         <ul className='flex justify-around'>
//          {
//            cards.map((item, index) => {
//              return (
//                <li onClick={() => addItemToCartAndNavigateToCheckoutPage(item)} key={index} className=''>
//                     <div className='bg-white rounded-md hover:bg-slate-100'>
//                     <img src={item.picture} className='w-44 rounded'/>
//                     <p className='text-center text-sm mt-2'>{item.title}</p>
//                     <h4>{item.amount}</h4>
//                     <h4>{item.amtcancled}</h4>
//                     </div>
//                </li>
//              )
//            })
//          }
//         </ul>
//       </div>
//     </div>
    
//   )
// }

// export default Section2

import React from 'react';
import { cards } from '../data';
import { useNavigate } from 'react-router-dom';

const Section2 = ({ setAddedItem }) => {
  const navigate = useNavigate();

  const addItemToCartAndNavigateToCheckoutPage = (item) => {
    setAddedItem(item);
    navigate('/checkout');
  };

  return (
    <div className="bg-white mt-5 mr-6 rounded p-4 pt-3 w-full">
      <h1 className="pl-4 font-semibold text-lg pb-3">Top Selling Items</h1>
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 px-2">
        {cards.map((item, index) => (
          <li
            onClick={() => addItemToCartAndNavigateToCheckoutPage(item)}
            key={index}
            className="cursor-pointer"
          >
            <div className="bg-white rounded-md hover:bg-slate-100 transition p-2">
              <img
                src={item.picture}
                className="w-full max-w-[160px] h-40 mx-auto object-cover rounded"
                alt={item.title}
              />
              <p className="text-center text-sm mt-2">{item.title}</p>
              <h4 className="text-center text-green-600 font-semibold">{item.amount}</h4>
              <h4 className="text-center text-gray-400 line-through text-sm">
                {item.amtcancled}
              </h4>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Section2;
