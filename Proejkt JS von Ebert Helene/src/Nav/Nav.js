import React from 'react';
import './Nav.css';

function Nav () {
    return (
        <nav>
            <ul className="nav_list">
                <li className="menu_list"><a href="#" class="menu_link">Home</a></li>
                <li className="menu_list"><a href="./index2.html" className="menu_link">Portfolio</a></li>
                <li className="menu_list"><a href="./index3.html" className="menu_link menu_link_color">Bücher</a></li>
                <li className="menu_list"><a href="#footer" className="menu_link menu_link_color">Kontakte</a></li>
            </ul>
        </nav>
    )
}
export default Nav;