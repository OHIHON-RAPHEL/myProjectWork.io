import React from 'react'

const Helpcenter = () => {
  return (
    <div className='bg-slate-200 '>
        <div className='pb-8'>
            <div className='bg-orange-300 p-14 pl-40 '>
                <h2 >Help Center</h2>
                <h1 className='font-bold mb-8 text-2xl'>Hi, how can we help you ?</h1>
            </div>
            <div className='flex space-x-14 relative bottom-8 justify-center'>
                <div className='bg-white p-5 w-52 rounded-md'>
                    <h3>How to place an<br></br>Order</h3>
                </div>
                <div className='bg-white p-5 w-52 rounded-md'>
                    <h3>How to Pay for<br></br>Your Order</h3>
                </div>
                <div className='bg-white p-5 w-52 rounded-md'>
                    <h3>How to Track<br></br>Your Order</h3>
                </div>
                <div className='bg-white p-5 w-52 rounded-md'>
                    <h3>How to Cancel<br></br>an Order</h3>
                </div>
                <div className='bg-white p-5 w-52 rounded-md'>
                    <h3>How to Create a<br></br>Return</h3>
                </div>
            </div>
            <div className='mt-10 pl-40'>
                <input
                   type="text"
                   placeholder="Type Keyboard like return"
                   className='w-[32rem] p-3 mb-7 rounded-md'
                />
            </div>
            <div className='flex justify-center space-x-5'>
                <div className='flex flex-col bg-white w-80 gap-8 rounded-md border-2 border-slate-400 pl-6 h-1/2 font-semibold'>
                  <div>
                    <button>Payments</button>
                  </div>
                  <div>
                    <button>Vochers</button>
                  </div>
                  <div>
                    <button>Delivery</button>
                  </div>
                  <div>
                    <button>Returns & Refunds</button>
                  </div>
                  <div>
                    <button>Products</button>
                  </div>
                  <div>
                    <button>Accont</button>
                  </div>
                  <div>
                    <button>Jumia Express</button>
                  </div>
                  <div>
                    <button>Sell on Jumia</button>
                  </div>
                  <div>
                    <button>Jumia Global</button>
                  </div>
                </div>
                <div className='bg-white w-3/5 rounded-md p-5'>
                    <div className='border-2 border-slate-400 rounded-md pl-4 space-y-5 font-semibold p-3 pb-5'>
                        <div>
                            <small>payments</small>
                            <h1 className='text-lg'>What payments method are accepted on jumia</h1>
                        </div>
                        <div>
                            <small>payments</small>
                            <h1 className='text-lg'>What payments method are accepted on jumia</h1>
                        </div>
                        <div>
                            <small>payments</small>
                            <h1 className='text-lg'>What payments method are accepted on jumia</h1>
                        </div>
                        <div>
                            <small>payments</small>
                            <h1 className='text-lg'>What payments method are accepted on jumia</h1>
                        </div>
                        <div>
                            <small>payments</small>
                            <h1 className='text-lg'>What payments method are accepted on jumia</h1>
                        </div>
                        <div>
                            <small>payments</small>
                            <h1 className='text-lg'>What payments method are accepted on jumia</h1>
                        </div>
                        <div>
                            <small>payments</small>
                            <h1 className='text-lg'>What payments method are accepted on jumia</h1>
                        </div>
                        <div>
                            <small>payments</small>
                            <h1>What payments method are accepted on jumia</h1>
                        </div>
                        <div>
                            <small>payments</small>
                            <h1 className='text-lg'>What payments method are accepted on jumia</h1>
                        </div>
                        <div>
                            <small>payments</small>
                            <h1>What payments method are accepted on jumia</h1>
                        </div>
                        <div>
                            <small>payments</small>
                            <h1 className='text-lg'>What payments method are accepted on jumia</h1>
                        </div>
                        <div>
                            <small>payments</small>
                            <h1 className='text-lg'>What payments method are accepted on jumia</h1>
                        </div>
                        <div>
                            <small>payments</small>
                            <h1 className='text-lg'>What payments method are accepted on jumia</h1>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='pl-36'>Talk to an agent</h1>
            <div className='flex justify-center'>
              <div className='bg-white border-2 border-slate-400 w-5/12 p-5 rounded-md pl-5'>
                <h1 className='font-bold text-lg'>Live Chat</h1>
                <p className='text-base'>We are available from Monday to Sunday, between 8am and 8pm</p>
              </div>
              <div className='bg-white border-2 border-slate-400 w-5/12 p-5 rounded-md pl-5'>
                <h1 className='font-bold text-lg'>Call</h1>
                <p className='text-base'>We are available from Monday to Sunday, between 8am and 8pm</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Helpcenter
