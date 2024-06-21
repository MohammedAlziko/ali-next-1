import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import "./header.css"
import { faBagShopping, faCartShopping, faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Header = () => {
  return (
    
    <header id="headerElement" className="flex">
      <div className="logo">
       

        <FontAwesomeIcon width="1.5rem" style={{marginRight:".3rem"}}  icon={faBagShopping} />

        <span style={{ fontWeight: "bold" }}>AWU</span>
        <p style={{ letterSpacing: "0.5px" }}>Shopping</p>
      </div>
      <nav className="links">

        <Link
          style={{ position: "relative" }}
          className="cart"
          href="/cart"
        >
          <FontAwesomeIcon width=".8rem" style={{marginRight:".3rem"}}  icon={faCartShopping} />
          $0.00
          <span className="products-number">2</span>
        </Link>
        <Link className="sign-in" href="/signin">
        

          <FontAwesomeIcon width=".8rem" style={{marginRight:".3rem"}}  icon={faRightToBracket} />


          Sign in
        </Link>
        <Link className="register" href="/register">

          <FontAwesomeIcon width=".8rem" style={{marginRight:".3rem"}}  icon={faUserPlus} />
    

          Register
        </Link>

      </nav>
    </header>
  
  
  
  )
}

export default Header