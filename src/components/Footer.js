import {useState} from 'react'
import {Link} from 'react-router-dom'
import {BiLogoFacebook} from 'react-icons/bi'
import {GrYoutube} from 'react-icons/gr'
import {TiSocialInstagram} from 'react-icons/ti'
import {BsTwitter} from 'react-icons/bs'

const Footer = () => {
  const [emailData, setEmailData] = useState({
    email: ""
  })

  function handleChange(event) {
    const {name, value} = event.target
    setEmailData(prevEmailData => ({
      ...prevEmailData,
      [name] : value
    }))
  }

  return (
    <footer className='bg-zinc-600 text-white h-screen'>
      <div className='bg-black pt-6 p-7 text-white'>
        <div className='flex pl-36 space-x-44'>
          <div className='text-4xl font-bold'>
            <h1>REFLEX</h1>
          </div>
          <div>
            <div>
              <div className='font-bold'>NEW TO REFLEX?</div>
              subscribe to our new letter to get updates on our lattest
            </div>
            <form>
              <div className='flex mt-5'>
                <div>
                  <input
                     type="text"
                     placeholder="Email"
                     name="email"
                     value={emailData.email}
                     className='p-4 w-80 rounded indent-1 text-black'
                     onChange={handleChange}
                  />
                </div>
                <div className='ml-4 flex space-x-4'>
                  <button className='bg-yellow-400 p-3 w-24 rounded'>MALE</button>
                  <button className='bg-yellow-400 p-3 w-24 rounded'>FEMALE</button>
                </div>
              </div>
            </form>
          </div>
          <div>
            <div>
              <div>
                <div className='font-bold'>DOWNLOAD REFLEX FREE APP</div>
                Get acces to Exclusive offers
              </div>
            </div>
            <div>
              <a>App Store</a>
              <a>Google Play</a>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-5 grid grid-cols-4 pl-44'>
        <article className='flex flex-col items-start gap-1'>
            <h4 className='mb-4 font-bold'>NEED HELP?</h4>
            <Link>Chat with us</Link>
            <Link>Help Center</Link>
            <Link>Contact Us</Link>
            <Link>Chat with us</Link>
        </article>
        <article className='flex flex-col items-start gap-1 w-32'>
             <h4 className='mb-4 font-bold'>ABOUT REFLEX</h4>
             <Link>About us</Link>
             <Link>Jumia careers</Link>
             <Link>Jumia express</Link>
             <Link>Terms and condition</Link>
             <Link>Private notice</Link>
        </article>
        <article className='flex flex-col items-start gap-1'>
              <h4 className='mb-4 font-bold'>MAKE MONEY WITH REFLEX</h4>
              <Link>Chat with us</Link>
              <Link>Chat with us</Link>
              <Link>Chat with us</Link>
              <Link>Chat with us</Link>
        </article>
        <article className='flex flex-col items-start gap-1'>
              <h4 className='mb-4 font-bold'>REFLEX INTERNATIONAL</h4>
              <Link>Chat with us</Link>
              <Link>Chat with us</Link>
              <Link>Chat with us</Link>
        </article>
      </div>
      <div className='pl-44 pt-5 grid grid-cols-2'>
        <article className='font-bold'>
           <h4>JOIN US ON</h4>
           <div className='flex gap-4 items-center mt-6 text-2xl'>
              <a href="https://facebook.com" target="_blank" rel='norferrer noopener'>
                  <BiLogoFacebook />
              </a>
              <a href="https://facebook.com" target="_blank" rel='norferrer noopener'>
                    <GrYoutube />
              </a>
              <a href="https://facebook.com" target="_blank" rel='norferrer noopener'>
                    <TiSocialInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel='norferrer noopener'>
                    <BsTwitter />
              </a>
           </div>
        </article>
        <article className='font-bold'>
            <h4>PAYMENT METHOD & DELIVERY PARTNERS</h4>
        </article>
      </div>
      <div className='border-y-2 pt-2 mt-20'>
         <small className='flex text-center justify-center space-x-10 text-sm'>
            <h4 className='font-serif'>PAY</h4>
            <h4 className='font-serif'>FOOD</h4>
            <h4 className='font-bold'>LOGISTICS</h4>
         </small>
      </div>
    </footer>
  )
}

export default Footer