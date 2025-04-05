// import React from 'react'
// import {skills} from '../data'
// import { useNavigate } from "react-router-dom"

// const Section = ({setRelatedItems}) => {
//   const navigate = useNavigate()
//   const addItemToCartAndNavigateToCheckoutPage = (item) => {
//     setRelatedItems(item)
//     navigate("/product")
//   }
//   return (
//     <div className='bg-white mt-5 mr-6 rounded p-5 pt-3'>
//       <div className=''>
//         <ul className='flex justify-around'>
//          {
//            skills.map((item, index) => {
//              return (
//                <li onClick={() => addItemToCartAndNavigateToCheckoutPage(item)} key={index} className=''>
//                     <div className='bg-white rounded-md hover:bg-slate-100'>
//                     <img src={item.image} alt="shirt" className='w-44 rounded'/>
//                     <p className='text-center text-sm mt-2'>{item.title}</p>
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

// export default Section

import React from 'react';
import { skills } from '../data';
import { useNavigate } from 'react-router-dom';

const Section = ({ setRelatedItems }) => {
  const navigate = useNavigate();

  const addItemToCartAndNavigateToCheckoutPage = (item) => {
    setRelatedItems(item);
    navigate('/product');
  };

  return (
    <div className="bg-white mt-5 mr-6 rounded p-5 pt-3 w-full">
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map((item, index) => (
          <li
            onClick={() => addItemToCartAndNavigateToCheckoutPage(item)}
            key={index}
            className="cursor-pointer"
          >
            <div className="bg-white rounded-md hover:bg-slate-100 transition">
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-[160px] mx-auto rounded object-cover"
              />
              <p className="text-center text-sm mt-2">{item.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Section;
