import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';

function Header () {
    return (
        <header className="header">
        <Nav />
        <h1> Frontend Developer</h1> 
        <div className="container">
            <div className="header_content ">
                    <p className="header_textDeutsch"> Mein Name ist Ebert Helene. Ich mag Web-Entwicklung, 
                        ich lerne aktiv neue Standards und Technologien.</p> 
            <p className="header_textRussisch">Меня зовут Эберт Елена. Я люблю веб-разработку, активно изучаю новые стандарты и технологии.</p>
            </div>
            <div className="header_technologie">
                <ul className="header_technologie__lists">
                    <li className="header_technologie_list"><span> HTML 5 </span></li>
                    <li className="header_technologie_list"><span> CSS 3 </span></li>
                    <li className="header_technologie_list"><span> JavaScript </span></li>
                    <li className="header_technologie_list"><span> Responsive Design </span></li>
                    <li className="header_technologie_list"><span> Python</span></li>
                    <li className="header_technologie_list"><span> React </span></li>
                    <li className="header_technologie_list"><span> ... </span></li>
                </ul>
            </div>
        </div>
        <a href="#footer" className="header_link header_button"> Kontaktieren Sie mich</a>
    </header>
    )
}
export default Header;