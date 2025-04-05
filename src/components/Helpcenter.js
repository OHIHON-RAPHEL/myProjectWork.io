import React from 'react'

const Helpcenter = () => {
  return (
    <div className='bg-slate-200'>
      <div className='pb-8'>
        <div className='bg-orange-300 p-14 pl-4 sm:pl-8 md:pl-20'>
          <h2 className='text-2xl md:text-3xl'>Help Center</h2>
          <h1 className='font-bold mb-8 text-2xl md:text-3xl'>Hi, how can we help you ?</h1>
        </div>

        <div className='flex flex-wrap justify-center gap-4 relative bottom-8'>
          <div className='bg-white p-5 w-full sm:w-52 rounded-md'>
            <h3>How to place an<br />Order</h3>
          </div>
          <div className='bg-white p-5 w-full sm:w-52 rounded-md'>
            <h3>How to Pay for<br />Your Order</h3>
          </div>
          <div className='bg-white p-5 w-full sm:w-52 rounded-md'>
            <h3>How to Track<br />Your Order</h3>
          </div>
          <div className='bg-white p-5 w-full sm:w-52 rounded-md'>
            <h3>How to Cancel<br />an Order</h3>
          </div>
          <div className='bg-white p-5 w-full sm:w-52 rounded-md'>
            <h3>How to Create a<br />Return</h3>
          </div>
        </div>

        <div className='mt-10 pl-4 sm:pl-8 md:pl-20'>
          <input
            type="text"
            placeholder="Type Keyboard like return"
            className='w-full sm:w-[32rem] p-3 mb-7 rounded-md'
          />
        </div>

        <div className='flex flex-wrap justify-center gap-5'>
          {/* Left Sidebar */}
          <div className='flex flex-col bg-white w-full sm:w-80 gap-8 rounded-md border-2 border-slate-400 pl-6 h-1/2 font-semibold'>
            <div><button>Payments</button></div>
            <div><button>Vouchers</button></div>
            <div><button>Delivery</button></div>
            <div><button>Returns & Refunds</button></div>
            <div><button>Products</button></div>
            <div><button>Account</button></div>
            <div><button>Reflex Express</button></div>
            <div><button>Sell on Reflex</button></div>
            <div><button>Reflex Global</button></div>
          </div>

          {/* Right Content */}
          <div className='bg-white w-full sm:w-3/5 rounded-md p-5'>
            <div className='border-2 border-slate-400 rounded-md pl-4 space-y-5 font-semibold p-3 pb-5'>
              <div>
                <small>Payments</small>
                <h1 className='text-lg'>What payments methods are accepted on Reflex?</h1>
              </div>
              <div>
                <small>Payments</small>
                <h1 className='text-lg'>What payments methods are accepted on Reflex?</h1>
              </div>
              <div>
                <small>Payments</small>
                <h1 className='text-lg'>What payments methods are accepted on Reflex?</h1>
              </div>
              <div>
                <small>Payments</small>
                <h1 className='text-lg'>What payments methods are accepted on Reflex?</h1>
              </div>
              <div>
                <small>Payments</small>
                <h1 className='text-lg'>What payments methods are accepted on Reflex?</h1>
              </div>
              <div>
                <small>Payments</small>
                <h1 className='text-lg'>What payments methods are accepted on Reflex?</h1>
              </div>
              <div>
                <small>Payments</small>
                <h1 className='text-lg'>What payments methods are accepted on Reflex?</h1>
              </div>
              <div>
                <small>Payments</small>
                <h1 className='text-lg'>What payments methods are accepted on Reflex?</h1>
              </div>
              <div>
                <small>Payments</small>
                <h1 className='text-lg'>What payments methods are accepted on Reflex?</h1>
              </div>
            </div>
          </div>
        </div>

        <h1 className='pl-4 sm:pl-8 md:pl-20'>Talk to an agent</h1>
        <div className='flex flex-wrap justify-center gap-5'>
          {/* Live Chat & Call */}
          <div className='bg-white border-2 border-slate-400 w-full sm:w-5/12 p-5 rounded-md pl-5'>
            <h1 className='font-bold text-lg'>Live Chat</h1>
            <p className='text-base'>We are available from Monday to Sunday, between 8am and 8pm</p>
          </div>
          <div className='bg-white border-2 border-slate-400 w-full sm:w-5/12 p-5 rounded-md pl-5'>
            <h1 className='font-bold text-lg'>Call</h1>
            <p className='text-base'>We are available from Monday to Sunday, between 8am and 8pm</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Helpcenter;
