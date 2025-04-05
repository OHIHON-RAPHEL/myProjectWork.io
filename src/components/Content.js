import React from 'react'
import { MdDelete } from 'react-icons/md'

const Content = ({ item, setCheckoutItem }) => {
  const deleteItem = (id) => {
    setCheckoutItem((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="bg-slate-100 flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 w-full max-w-screen-xl">
        {/* Cart Item */}
        <div className="bg-white w-full sm:w-4/5 rounded mt-5 mb-10 p-4 h-auto sm:h-56">
          <h1 className="text-xl sm:text-2xl font-semibold">Cart(1)</h1>
          <div className="flex pt-5 flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-8">
            <div>
              <img src={item.picture} alt="Ear" className="w-20 sm:w-24" />
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full">
              <div className="flex flex-col gap-2">
                <small className="text-sm sm:text-base">{item.title}</small>
                <small className="text-xs sm:text-sm">Seller: {item.name}</small>
                <small className="text-xs sm:text-sm">In Stock</small>
                <small className="text-xs sm:text-sm">REFLEX EXPRESS</small>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-2">
                <h4 className="text-lg sm:text-xl font-semibold">$15,800</h4>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <button
              onClick={() => deleteItem(item.id)}
              className="hover:text-red-600 flex items-center text-sm sm:text-base"
            >
              <MdDelete className="mr-2" /> Remove
            </button>
          </div>
        </div>

        {/* Cart Summary */}
        <div className="w-full sm:w-80">
          <div className="bg-white p-4 mt-5 mb-5 rounded pt-1">
            <h4 className="font-semibold text-lg">CART SUMMARY</h4>
            <div className="flex justify-between mt-5 font-semibold">
              <small>Subtotal</small>
              <h1>$15,800</h1>
            </div>
            <small className="mt-3 text-xs sm:text-sm">
              Delivery fees not included yet
            </small>
            <div className="text-center mt-3">
              <button className="bg-yellow-400 text-white p-2 w-full sm:w-auto rounded">
                CHECKOUT
              </button>
            </div>
          </div>

          {/* Returns Information */}
          <div className="bg-white mb-10 p-4 pt-1">
            <div className="font-semibold text-sm sm:text-base">
              <h4>Returns are easy</h4>
            </div>
            <small className="text-xs sm:text-sm">
              Free return within 15 days for Official Store items
              <br />
              and 7 days for other eligible items. Details
            </small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
