import React from 'react'
import {Link} from 'react-router-dom'
import Section from '../components/Section'
import Section2 from '../components/Section2'
import logo from '../images/5kstores.jpg'
import power from '../images/power.gif'
import shop from '../images/shopearn.png'
import Listbar from '../components/Listbar'


const Main = ({setRelatedItems, setAddedItem}) => {
  return (
    <div className=' bg-yellow-600 flex justify-center h-fit pt-3 pb-10'>
      <div>
        <div className='bg-yellow-700 h-full rounded-2xl pl-6 mb-5'>
            <div className='pt-2 flex mr-6'>
                <Listbar setRelatedItems={setRelatedItems}/>
                <div className='pl-6 pt-0'>
                    <Link>
                        <img src={logo} alt="Logo" className=' h-full rounded'/>
                    </Link>
                </div>
                <div className='pl-5'>
                    <div className='mb-5'>
                        <Link>
                            <img src={power} alt="Power" className='h-48 rounded-md'/>
                        </Link>
                    </div>
                    <div>
                        <Link>
                            <img src={shop} alt="Shop" className='h-48 rounded-md'/>
                        </Link>
                    </div>
                </div>
            </div>
            <Section setRelatedItems={setRelatedItems}/>
            <Section2 setAddedItem={setAddedItem}/>
            <Section2 setAddedItem={setAddedItem}/>
        </div>
      </div>
    </div>
  )
}

export default Main
