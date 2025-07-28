
import { useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ checkoutItem }) => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchValue.trim()) {
      navigate(`/catelog?query=${searchValue}`);
    }
  };

  return (
    <section className="w-full bg-white p-4 flex flex-col sm:flex-row items-center justify-between flex-wrap gap-4">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/">REFLEX</Link>
      </div>

      {/* Search Bar */}
      <div className="flex w-full sm:w-auto flex-grow items-center">
        <input
          type="text"
          placeholder="Search products, brands and categories"
          name="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="flex-grow sm:w-[32rem] w-full p-2 border rounded-l-md text-sm"
        />
        <button
          onClick={handleSearch}
          className="bg-yellow-600 text-white px-4 py-2 rounded-r-md text-sm"
        >
          SEARCH
        </button>
      </div>

      {/* Navbar (e.g. Cart, User, etc.) */}
      <div className="w-full sm:w-auto">
        <Navbar checkoutItem={checkoutItem} />
        
      </div>
    </section>
  );
};

export default Header;
