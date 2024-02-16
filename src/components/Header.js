import { useState } from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom"

const Header = ({ checkoutItem }) => {
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();
  
  const handleSearch = () => {
    navigate(`/catelog?query=${searchValue}`);
  }
  

  return (
    <section className='flex justify-center pt-3 p-3 w-full bg-white space-x-16'>
        <div className='mt-4 text-2xl font-bold'>
           <Link to='/'>REFLEX</Link>
        </div>
        <div>
             <input
                 type="text"
                 placeholder="Search products,brands and categories"
                 name="search"
                 value={searchValue}
                 className='box-border rounded p-3 m-2 min-[1028px]:w-[32rem] max-[853px]:w-24'
                 onChange={(e) => setSearchValue(e.target.value)}
             />
             <button onClick={handleSearch} className='bg-yellow-600 text-white p-2 rounded'>SEARCH</button>
        </div>
        <Navbar checkoutItem={checkoutItem}/>
    </section>
  )
}

export default Header