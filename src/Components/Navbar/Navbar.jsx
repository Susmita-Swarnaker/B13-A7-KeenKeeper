import React from 'react';
import { RiHome2Line, RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
  <div className='flex justify-between items-center p-5 shadow '>
    <div>
        <h2 className='text-2xl font-medium'>Keen<span className='text-gray-400'>Keeper</span></h2>
    </div>
    <div>
         <ul className='flex gap-2'>
           <li>
  <NavLink
    to={"/home"} className={({isActive}) =>`flex font-semibold justify-center items-center py-1 px-2 rounded-lg ${isActive?"bg-green-950 border text-white" : ""}`}
      
  
   
  >
    <RiHome2Line /> Home
  </NavLink>
</li>
            <li><NavLink to={"/timeline"} className={({isActive}) =>`flex justify-between items-center gap-1 px-2 py-1 rounded-lg ${isActive?"bg-green-950 border text-white" : ""}`}><RiTimeLine /> Timeline</NavLink></li>
            <li><NavLink to={"/stats"} className={({isActive}) =>`flex justify-between items-center gap-1 px-2 py-1 rounded-lg ${isActive?"bg-green-950 border text-white" : ""}`}><TfiStatsUp />Stats</NavLink></li>
            
            
            
         </ul>
    </div>
    
  </div>
 
    );
};

export default Navbar;