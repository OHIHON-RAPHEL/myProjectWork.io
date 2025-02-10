import React from 'react'
import {MdDelete} from 'react-icons/md'

const Content = ({item, setCheckoutItem}) => {
  const deleteItem = (id) => {
    setCheckoutItem((prev) => {
      return prev.filter((item) => {
        return item.id !== id
      })
    })
  }
  
  return (
    <div className='bg-slate-100 flex justify-center'>
      <div className='flex space-x-8'>
        <div className='bg-white w-4/5 rounded  mt-5 mb-10 p-4 h-56'>
            <h1>Cart(1)</h1>
            <div className='flex pt-5'>
                <div className=''>
                    <img src={item.picture} alt="Ear" className='w-20'/>
                </div>
                <div className='flex space-x-96 pl-5'>
                  <div className='flex flex-col gap-2'>
                    <small>{item.title}</small>
                    <small>Seller: {item.name}</small>
                    <small>In Stock</small>
                    <small>REFLEX EXPRESS</small>
                  </div>
                  <div>
                     <h1></h1>
                     <h4>$15,800</h4>
                  </div>
                </div>
            </div>
            <div className='mt-4'>
              <button onClick={() => deleteItem(item.id)} className='hover:text-red-600'><MdDelete/>Remove</button>
            </div>
        </div>
        <div>
          <div className='bg-white p-4 w-80 mt-5 mb-5 rounded pt-1'>
            <h4 className='font-semibold '>CART SUMMARY</h4>
            <div className='flex space-x-48 mt-5 font-semibold'>
              <small>Subtotal</small>
              <h1>15,800</h1> 
            </div>
            <small className='mt-3'>Delivery fees not included yet</small>
            <div className='text-center mt-3'>
               <buuton>CHECKOUT</buuton>
            </div>
          </div>
          <div className='bg-white mb-10 p-4 pt-1'>
            <div className='font-semibold'>
              <h4>Returns are easy</h4>
            </div>
            <small>Freee return within 15days for Officials Store items<br></br>
            and 7 days for other eligibleitems Details</small>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Content
