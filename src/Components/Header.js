import React from 'react';
import yarn from '../Components/yarn.svg';

function Header(){
    return (
        <header id="header">
            
            <nav id="nav-bar">
            <img id="header-img" src={yarn} alt="yarn" width="70px" height="60px" />
                <h1 className="title">Haberdashery</h1>
                <ul>
                    <li className="nav-link"><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#video">Video</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            </header>
    )
}
export default Header;