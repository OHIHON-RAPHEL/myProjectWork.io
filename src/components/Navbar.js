import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ checkoutItem }) => {
  const [showFirst, setShowFirst] = useState(false);
  const [showSecond, setShowSecond] = useState(false);

  const toggleFirst = () => {
    setShowFirst(!showFirst);
    setShowSecond(false);
  };

  const toggleSecond = () => {
    setShowSecond(!showSecond);
    setShowFirst(false);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 relative z-50">
      {/* Account Button */}
      <div className="relative">
        <button
          onClick={toggleFirst}
          className="rounded-md bg-gray-50 px-4 py-2 font-semibold text-gray-900 hover:bg-gray-400 w-full sm:w-24"
        >
          Account
        </button>

        {/* Account Dropdown */}
        {showFirst && (
          <div className="absolute top-full mt-2 w-48 rounded-md bg-white border border-zinc-200 shadow-md">
            <div className="pl-8 pt-3">
              <button className="bg-yellow-700 w-32 rounded p-1 text-white">SIGN IN</button>
            </div>
            <div className="space-y-2 py-2">
              <Link to="/account" className="block px-4 text-sm text-gray-700">
                Accounts
              </Link>
              <Link to="/orders" className="block px-4 text-sm text-gray-700">
                Orders
              </Link>
              <Link to="/saveditems" className="block px-4 text-sm text-gray-700">
                Saved Items
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Help Button */}
      <div className="relative">
        <button
          onClick={toggleSecond}
          className="rounded-md bg-gray-50 px-4 py-2 font-semibold text-gray-900 hover:bg-gray-400 w-full sm:w-24"
        >
          Help
        </button>

        {/* Help Dropdown */}
        {showSecond && (
          <div className="absolute top-full mt-2 w-56 rounded-md bg-white border border-zinc-200 shadow-md">
            <div className="space-y-2 py-2">
              <Link to="/help" className="block px-4 text-sm text-gray-700">
                Help
              </Link>
              <Link to="/placeorder" className="block px-4 text-sm text-gray-700">
                Place Order
              </Link>
              <Link to="/paymentoption" className="block px-4 text-sm text-gray-700">
                Payment Option
              </Link>
              <Link to="/trackorder" className="block px-4 text-sm text-gray-700">
                Track Order
              </Link>
              <Link to="/cancelorder" className="block px-4 text-sm text-gray-700">
                Cancel Order
              </Link>
              <Link to="/return" className="block px-4 text-sm text-gray-700">
                Return
              </Link>
              <div className="pl-8 pb-3">
                <button className="bg-yellow-700 w-32 rounded p-1 text-white">LIVE CHAT</button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cart Link */}
      <div>
        <Link
          to="/cart"
          className="hover:text-red-500 font-semibold text-sm"
        >
          Cart [{checkoutItem.length}]
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
