import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
  <div className='flex justify-between items-center p-5 shadow '>
    <div>
        <h2 className='text-2xl font-medium'>Keen<span className='text-gray-400'>Keeper</span></h2>
    </div>
    <div>
         <ul className='flex gap-2'>
            <li><NavLink to={"/home"}>Home</NavLink></li>
            <li><NavLink to={"/timeline"}>Timeline</NavLink></li>
            <li><NavLink to={"/stats"}>Stats</NavLink></li>
            
            
         </ul>
    </div>
    
  </div>
 
    );
};

export default Navbar;