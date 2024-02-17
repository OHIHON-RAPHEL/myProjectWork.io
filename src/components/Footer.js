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
        <div className='flex justify-center space-x-10'>
          <div className='text-4xl font-bold'>
            <h1>REFLEX</h1>
          </div>
          <div>
            <div className='font-bold'>NEW TO REFLEX?</div>
            subscribe to our new letter to get updates on our lattest
          </div>
          <form className='flex mt-5'>
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
          </form> 
          <div>
            <div>
              <h1 className='font-bold'>DOWNLOAD REFLEX FREE APP</h1>
              Get acces to Exclusive offers
            </div>
            <div>
              <a href="https://appstore.com" target="_blank" rel='norferrer noopener'>App Store</a>
              <a href="https://googleplay.com" target="_blank" rel='norferrer noopener'>Google Play</a>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-5 flex justify-around '>
        <article className='flex flex-col gap-1'>
            <h4 className='mb-4 font-bold'>NEED HELP?</h4>
            <Link>Chat with us</Link>
            <Link>Help Center</Link>
            <Link>Contact Us</Link>
            <Link>Chat with us</Link>
        </article>
        <article className='flex flex-col gap-1 '>
             <h4 className='mb-4 font-bold'>ABOUT REFLEX</h4>
             <Link>About us</Link>
             <Link>Jumia careers</Link>
             <Link>Jumia express</Link>
             <Link>Terms and condition</Link>
             <Link>Private notice</Link>
        </article>
        <article className='flex flex-col gap-1'>
              <h4 className='mb-4 font-bold'>MAKE MONEY WITH REFLEX</h4>
              <Link>Chat with us</Link>
              <Link>Chat with us</Link>
              <Link>Chat with us</Link>
              <Link>Chat with us</Link>
        </article>
        <article className='flex flex-col gap-1'>
              <h4 className='mb-4 font-bold'>REFLEX INTERNATIONAL</h4>
              <Link>Chat with us</Link>
              <Link>Chat with us</Link>
              <Link>Chat with us</Link>
        </article>
      </div>
      <div className='flex pt-5 justify-around'>
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