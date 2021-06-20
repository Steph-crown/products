import React from "react";
import './../css/MobileMenu.css'

export default function MobileMenu({toggleMenu}) {
    return (
        <div className="mobile-menu">
            <p onClick={()=>toggleMenu()}>&times;</p>
            <div>
                <a href="#" className="selected">Products</a>
                <a href="#">About</a>
                <a href="#">Activities</a>
                <a href="#">Blogs</a>
                <a href="#">Cart</a>
                <a href="#">Favourite</a>
                <a href="#">Profile</a>
            </div>
        </div>
    );
}
