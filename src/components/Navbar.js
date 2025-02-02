import {useState} from'react'
import {Link} from 'react-router-dom'

const Navbar = ({checkoutItem}) => {
  const [showFirst, setShowFirst] = useState(false)
  const [showSecond, setShowSecond] = useState(false)

  const toggleFirst = () => {
    setShowFirst(!showFirst)
    setShowSecond(false)
  }

  const toggleSecond = () => {
    setShowSecond(!showSecond)
    setShowFirst(false)
  }

  return (
    <div className='flex space-x-8 relative mt-3 '>
        <div>
          <button onClick={toggleFirst} className='rounded-md bg-gray-50 p-2 w-24 font-semibold text-gray-900 hover:bg-gray-400'>Account</button>
        </div>
        {/* Dropdown Menu */}
        {showFirst && (<div className='absolute  right-40 top-10  mt-2 w-48 rounded-md bg-white border border-zinc-200'>
          <div className='pl-8 pt-3'>
            <button className='bg-yellow-700 w-32 rounded p-1'>SIGN IN</button>
          </div>
          <div className="space-y-2">
            <Link to="/account" className='text-gray-700 block px-4 py-2 text-sm'>Accounts</Link>
            <Link to="/orders" className='text-gray-700 block px-4 py-2 text-sm'>Orders</Link>
            <Link to="/saveditems" className='text-gray-700 block px-text-sm'>Saveditems</Link>
          </div>
        </div>)}

        <div>
          <button onClick={toggleSecond} className='rounded-md  bg-gray-50 p-2 w-24 font-semibold text-gray-900 hover:bg-gray-400'>Help</button>
        </div>
        {/* Dropdown Menu */}
        {showSecond && (<div className='absolute left-20 top-10 mt-2 w-48 rounded-md bg-white border border-zinc-200'>
          <div className="space-y-2">
            <Link to="/help" className='text-gray-700 block px-4 py-2 text-sm'>Help</Link>
            <Link to="/placeorder" className='text-gray-700 block px-4 py-2 text-sm'>Placeorder</Link>
            <Link to="/paymentoption" className='text-gray-700 block px-4 py-2 text-sm'>Paymentoption</Link>
            <Link to="/trackorder" className='text-gray-700 block px-4 py-2 text-sm'>Trackorder</Link>
            <Link to="/cancelorder" className='text-gray-700 block px-4 py-2 text-sm'>Cancelorder</Link>
            <Link to="/return" className='text-gray-700 block px-4 py-2 text-sm'>Return</Link>
            <div className='pl-8 pb-3'>
              <button className='bg-yellow-700 w-32 rounded p-1'>LIVE CHAT</button>
            </div>
         </div>
        </div>)}
      
      <Link to="/cart" className='mt-3 hover:text-red-500'>Cart[{checkoutItem.length}]</Link>
   </div>
  )
}

export default Navbar  