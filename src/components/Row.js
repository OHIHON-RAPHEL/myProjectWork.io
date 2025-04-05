import React from 'react';
import { Link } from 'react-router-dom';

const Row = () => {
  return (
    <div className="flex flex-wrap items-center justify-between bg-slate-200 px-4 py-2">
      <div className="mb-2 sm:mb-0">
        <Link to="/sell" className="text-sm text-amber-700">
          Sell on Reflex
        </Link>
      </div>
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 font-semibold text-sm">
        <small>REFLEX</small>
        <small>PAY</small>
        <small>FOOD</small>
        <small>LOGISTICS</small>
      </div>
    </div>
  );
};

export default Row;
