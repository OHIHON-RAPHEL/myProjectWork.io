import React from 'react'
import {Link} from 'react-router-dom'
import tech from '../../images/tecno.jpg'
import Card from '../../components/Card'

const Product = ({relatedItems, setAddedItem}) => {

   if(!relatedItems){
      return (<div>
         EMPTY STATE
      </div>)
   }
  return (
    <div className='bg-slate-200 flex justify-center pt-8'>
       <div className='w-9/12 mb-20'>
          <div className='top-0'>
             <Link>home</Link>
             <Link></Link>
          </div>
          <div className='pl-36 pr-36'> 
             <img src={tech} alt="Tech" className=''/>
          </div>
       
         <h1 className='text-center font-bold text-lg bg-white p-2 mt-5 mr-9'>{relatedItems.title}</h1>
         <Card relatedItems={relatedItems.relatedSkills} setAddedItem={setAddedItem}/>
         <Card relatedItems={relatedItems.relatedSkills} setAddedItem={setAddedItem}/>
         <Card relatedItems={relatedItems.relatedSkills} setAddedItem={setAddedItem}/>
         <Card relatedItems={relatedItems.relatedSkills} setAddedItem={setAddedItem}/>
       </div>
    </div>
  )
}

export default Product
