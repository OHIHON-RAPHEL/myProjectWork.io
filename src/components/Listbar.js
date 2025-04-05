import React from 'react';
import { market } from '../data';
import { useNavigate } from 'react-router-dom';

const Listbar = ({ setRelatedItems }) => {
  const navigate = useNavigate();

  const addItemToCartAndNavigateToMarketPage = (item) => {
    setRelatedItems(item);
    navigate('/market');
  };

  return (
    <div className="bg-white w-full sm:w-48 rounded shadow-sm">
      <ul className="p-4 flex flex-col gap-3 text-sm text-gray-700 cursor-pointer">
        {market.map((item, index) => (
          <li
            onClick={() => addItemToCartAndNavigateToMarketPage(item)}
            key={index}
            className="hover:text-yellow-500 font-semibold transition-colors duration-200"
          >
            <small>{item.name}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listbar;
