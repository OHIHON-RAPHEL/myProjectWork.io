import {useState} from 'react'
import Navbar from '../components/Navbar'
import {Link} from 'react-router-dom'

const Header = ({checkoutItem}) => {
  const [searchData, setSearchData] = useState({search: ""})

  function handleChange(event) {
    const {name, value} = event.target
    setSearchData(prevSearchData => ({
      ...prevSearchData,
      [name] : value
    }))
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
                 value={searchData.search}
                 className='box-border rounded p-3 m-2 w-[32rem]'
                 onChange={handleChange}
             />
             <button className='bg-yellow-600 text-white p-2 rounded'>SEARCH</button>
        </div>
        <Navbar checkoutItem={checkoutItem}/>
    </section>
  )
}

export default Header