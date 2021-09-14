import React, {useState} from 'react';
import logo  from '../Images/Logo.png';
import './Header.css';
import {NavLink} from 'react-router-dom';
const Header = () => {

    const [isMobile, setIsMobile] = useState(false);
    return (
        <div className="header-wrapper">
           <header className="container flex justify-between item-center">
               
               <div className="logo">
                   <img src={logo} alt="" />
               </div>
                   <ul className={isMobile ? 'mobile-nav nv' : 'nav-menu' } onClick={()=>setIsMobile(false)}>
                       <li><NavLink to="/">home</NavLink></li>
                       <li ><NavLink to="/about">About</NavLink></li>
                       <li><NavLink to="/feature">Features</NavLink></li>
                       <li><NavLink to="/pricing">Pricing</NavLink></li>
                       <li><NavLink to="/contact">Contact</NavLink></li>
                   </ul>
               <div className="hamburger">
                    <i class={isMobile ? "fas fa-times" : "fas fa-bars"} onClick={()=>setIsMobile(!isMobile)}></i>
               </div>

            </header> 
        </div>
    )
}

export default Header
