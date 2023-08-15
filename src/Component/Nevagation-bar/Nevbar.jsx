import React from 'react';
import './Nevbar.css' 
import logo from '../../images/Logo.svg'


const Nevbar = () => {
    return (
     <nav className='nevbar'>

        <div className='logo'>
            <img src={logo}/>
        </div>

        <div className='button'>
              <a className='ab1' href="">Order</a>
              <a className='ab2' href="">Order Review</a>
              <a className='ab3' href="">Manage inventroy</a>
              <a className='ab4' href="">Login</a>
        </div>
     </nav>
            
    );
};

export default Nevbar;