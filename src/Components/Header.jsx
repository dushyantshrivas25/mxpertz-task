import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
  return (
    <div className='Header'>
        <div className="nav">
            <h2>Restaurant landing page</h2>

            <div className="navpart2">
                <h4>Landing</h4>
                <h4>Home</h4>
                <h4>Gallery</h4>
                <h4>Shop</h4>
                <h4>Blog</h4>
                <h4>About</h4>
                <h4>Team</h4>
                <h4>Contact</h4>
                <h4><FaShoppingCart /></h4>
            </div>
        </div>


    </div>
  )
}

export default Header