import React, {useState} from "react";
import Logo from "./../assets/logo.png";
import Cart from "./../assets/cart.svg";
import Avatar from "./../assets/avatar.png";
import "./../css/Header.css";
import MobileMenu from "./MobileMenu";

export default function Header() {

    // false -> menu closed
    const [menuState, toggleMenuState] = useState(false);

    // Toggle menu state
    const toggleMenu = () => {
        toggleMenuState(!menuState);
    }

    return (
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="Logo" />
                <h1>OYOTEE</h1>
            </div>
            <nav>
                <a href="/" className="selected">
                    Products
                </a>
                <a href="/">About</a>
                <a href="/">Activities</a>
                <a href="/">Blogs</a>
            </nav>
            <div className="right-header">
                <img src={Cart} alt="" />
                <i className="fa fa-heart-o"></i>
                <img src={Avatar} alt="" />
            </div>
            <div className="menu-bars" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {menuState && <MobileMenu toggleMenu={toggleMenu} />}
        </div>
    );
}
