import {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom"

const Header = ({checkoutItem, setCatelog}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate()
  const addItemToCartAndNavigateToCatelogPage = (item) => {
    setCatelog(catelog.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    navigate("/catelog")
  }
  

  return (
    <section className='flex pl-60 pt-3 p-3 w-full bg-white '>
        <div className='mt-4 text-2xl mr-32 font-bold'>
           <Link to='/'>REFLEX</Link>
        </div>
        <div>
             <input
                 type="text"
                 placeholder="Search products,brands and categories"
                 name="search"
                 value={searchQuery}
                 className='box-border rounded p-3 m-2 w-[32rem]'
                 onChange={(e) => setSearchQuery(e.target.value)}
             />
             <button onClick={() => addItemToCartAndNavigateToCatelogPage()} className='bg-yellow-600 text-white p-2 rounded'>SEARCH</button>
        </div>
        <Navbar checkoutItem={checkoutItem}/>
    </section>
  )
}

export default Header