import React from 'react';

function Header(){
    return (
        <header id="header">
            
            <nav id="nav-bar">
                <h1 className="title">Haberdashery</h1>
                <ul>
                    <li className="nav-link"><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            </header>
    )
}
export default Header;