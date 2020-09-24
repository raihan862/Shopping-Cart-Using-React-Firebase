import React from 'react';

import Logo from '../../images/logo.png'
import Header_Nav from './Header_Nav'
const Header = () => {
    
    return (
        <div>
            <div style = {{textAlign:"center"}}>
                <img src={Logo} alt ="Logo" width ="250px" />
            </div>
       <Header_Nav></Header_Nav>
       
        </div>
    );
};

export default Header;