import React from 'react'
import { Link } from 'react-router-dom'
import tech from '../../images/tecno.jpg'
import Card from '../../components/Card'

const Product = ({ relatedItems, setAddedItem }) => {

  if (!relatedItems) {
    return (
      <div>
        EMPTY STATE
      </div>
    )
  }

  return (
    <div className='bg-slate-200 flex justify-center pt-8'>
      <div className='w-full md:w-9/12 mb-20'>
        {/* Top Links */}
        <div className='flex space-x-4 mb-4'>
          <Link to="/" className='text-blue-500 hover:underline'>Home</Link>
          {/* Add other navigation links if needed */}
        </div>

        {/* Product Image */}
        <div className='px-4 md:px-8 lg:px-36'>
          <img src={tech} alt="Tech" className='w-full h-auto'/>
        </div>

        {/* Product Title */}
        <h1 className='text-center font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl bg-white p-2 mt-5'>{relatedItems.title}</h1>

        {/* Related Items (Cards) */}
        
         <Card relatedItems={relatedItems.relatedSkills} setAddedItem={setAddedItem}/>
         <Card relatedItems={relatedItems.relatedSkills} setAddedItem={setAddedItem}/>
         <Card relatedItems={relatedItems.relatedSkills} setAddedItem={setAddedItem}/>
         <Card relatedItems={relatedItems.relatedSkills} setAddedItem={setAddedItem}/>
      </div>
    </div>
  )
}

export default Product;

