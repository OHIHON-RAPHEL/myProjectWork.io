import { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiLogoFacebook } from 'react-icons/bi'
import { GrYoutube } from 'react-icons/gr'
import { TiSocialInstagram } from 'react-icons/ti'
import { BsTwitter } from 'react-icons/bs'

const Footer = () => {
  const [emailData, setEmailData] = useState({ email: '' })

  function handleChange(event) {
    const { name, value } = event.target
    setEmailData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <footer className="bg-zinc-600 text-white pt-6">
      {/* Top Section */}
      <div className="bg-black p-6 text-white">
        <div className="flex flex-col gap-6 lg:flex-row justify-between items-center max-w-7xl mx-auto">
          <div className="text-3xl font-bold">REFLEX</div>

          <div className="text-center lg:text-left">
            <div className="font-bold mb-1">NEW TO REFLEX?</div>
            <p className="text-sm">Subscribe to our newsletter to get updates on our latest</p>

            <form className="flex flex-col sm:flex-row items-center mt-4 gap-3">
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={emailData.email}
                onChange={handleChange}
                className="p-3 w-72 rounded text-black"
              />
              <div className="flex gap-2">
                <button className="bg-yellow-400 p-2 w-24 rounded">MALE</button>
                <button className="bg-yellow-400 p-2 w-24 rounded">FEMALE</button>
              </div>
            </form>
          </div>

          <div className="text-center lg:text-left">
            <h1 className="font-bold mb-1">DOWNLOAD REFLEX FREE APP</h1>
            <p className="text-sm mb-2">Get access to Exclusive offers</p>
            <div className="flex flex-col gap-1">
              <a href="https://appstore.com" target="_blank" rel="noreferrer noopener">App Store</a>
              <a href="https://googleplay.com" target="_blank" rel="noreferrer noopener">Google Play</a>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="py-8 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <article className="flex flex-col gap-1">
          <h4 className="mb-2 font-bold">NEED HELP?</h4>
          <Link>Chat with us</Link>
          <Link>Help Center</Link>
          <Link>Contact Us</Link>
        </article>
        <article className="flex flex-col gap-1">
          <h4 className="mb-2 font-bold">ABOUT REFLEX</h4>
          <Link>About us</Link>
          <Link>Jumia careers</Link>
          <Link>Jumia express</Link>
          <Link>Terms and condition</Link>
          <Link>Private notice</Link>
        </article>
        <article className="flex flex-col gap-1">
          <h4 className="mb-2 font-bold">MAKE MONEY WITH REFLEX</h4>
          <Link>Become a vendor</Link>
          <Link>Affiliate program</Link>
          <Link>Sell online</Link>
        </article>
        <article className="flex flex-col gap-1">
          <h4 className="mb-2 font-bold">REFLEX INTERNATIONAL</h4>
          <Link>Ghana</Link>
          <Link>Kenya</Link>
          <Link>South Africa</Link>
        </article>
      </div>

      {/* Social & Payment */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-6 max-w-7xl mx-auto">
        <article className="text-center md:text-left">
          <h4 className="font-bold mb-2">JOIN US ON</h4>
          <div className="flex gap-4 justify-center md:justify-start text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noreferrer noopener"><BiLogoFacebook /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer noopener"><GrYoutube /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer noopener"><TiSocialInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer noopener"><BsTwitter /></a>
          </div>
        </article>
        <article className="font-bold text-center md:text-left">
          <h4>PAYMENT METHOD & DELIVERY PARTNERS</h4>
        </article>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white py-4">
        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <span className="font-serif">PAY</span>
          <span className="font-serif">FOOD</span>
          <span className="font-bold">LOGISTICS</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
