// import React from 'react'
// import {Link} from 'react-router-dom'
// import Section from '../components/Section'
// import Section2 from '../components/Section2'
// import logo from '../images/5kstores.jpg'
// import power from '../images/power.gif'
// import shop from '../images/shopearn.png'
// import Listbar from '../components/Listbar'


// const Main = ({setRelatedItems, setAddedItem}) => {
//   return (
//     <div className=' bg-yellow-600 flex justify-center h-fit pt-3 pb-10'>
//       <div>
//         <div className='bg-yellow-700 h-full rounded-2xl pl-6 mb-5'>
//             <div className='pt-2 flex mr-6'>
//                 <Listbar setRelatedItems={setRelatedItems}/>
//                 <div className='pl-6 pt-0'>
//                     <Link>
//                         <img src={logo} alt="Logo" className=' h-full rounded'/>
//                     </Link>
//                 </div>
//                 <div className='pl-5'>
//                     <div className='mb-5'>
//                         <Link>
//                             <img src={power} alt="Power" className='h-48 rounded-md'/>
//                         </Link>
//                     </div>
//                     <div>
//                         <Link>
//                             <img src={shop} alt="Shop" className='h-48 rounded-md'/>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//             <Section setRelatedItems={setRelatedItems}/>
//             <Section2 setAddedItem={setAddedItem}/>
//             <Section2 setAddedItem={setAddedItem}/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Main



import React from 'react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';
import Section2 from '../components/Section2';
import logo from '../images/5kstores.jpg';
import power from '../images/power.gif';
import shop from '../images/shopearn.png';
import Listbar from '../components/Listbar';

const Main = ({ setRelatedItems, setAddedItem }) => {
  return (
    <div className="bg-yellow-600 flex justify-center pt-3 pb-10 px-2 sm:px-4">
      <div className="bg-yellow-700 w-full max-w-7xl rounded-2xl p-4">
        {/* Top section with Listbar and images */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          {/* Listbar */}
          <div className="w-full lg:w-auto">
            <Listbar setRelatedItems={setRelatedItems} />
          </div>

          {/* Logo and Ads */}
          <div className="flex flex-col sm:flex-row gap-4 flex-grow">
            {/* Logo */}
            <div className="flex justify-center sm:justify-start">
              <Link to="/">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full max-w-[180px] rounded object-contain"
                />
              </Link>
            </div>

            {/* Power and Shop Images */}
            <div className="flex flex-col gap-4">
              <Link to="/">
                <img
                  src={power}
                  alt="Power"
                  className="w-full max-w-xs rounded-md object-cover"
                />
              </Link>
              <Link to="/">
                <img
                  src={shop}
                  alt="Shop"
                  className="w-full max-w-xs rounded-md object-cover"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Sections */}
        <Section setRelatedItems={setRelatedItems} />
        <Section2 setAddedItem={setAddedItem} />
        <Section2 setAddedItem={setAddedItem} />
      </div>
    </div>
  );
};

export default Main;

