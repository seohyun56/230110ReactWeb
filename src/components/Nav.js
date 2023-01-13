import { NavStyle, NavMenu } from "./Style";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaRegWindowClose, FaChevronDown } from "react-icons/fa";
import navData from "./navData";

function Nav() {
    const path = process.env.PUBLIC_URL;

    const [isNav, setIsNav] = useState(false);
    const [isToggle, setIsToggle] = useState(false);

    const OpenMenu = () => {
        setIsNav(!isNav);
    };

    const ToggleMenu = (e) => {
        setIsToggle(!isToggle);
    };

    return (
        <>
        <NavStyle>
            <h1><Link to="/"><img src={path + "/images/logo.png"} alt="파이브스톤 로고" /></Link></h1>
            <div className="nav_menu">hover</div>
            <ul id="gnb">
                {navData.map(item => (
                    <li key={item.id}>
                        <Link to="/">{item.title}</Link>
                        <ul className="sub_menu">
                            <li><Link to="/">{item.subTitle1}</Link></li>
                            <li><Link to="/">{item.subTitle2}</Link></li>
                            <li><Link to="/">{item.subTitle3}</Link></li>
                            <li><Link to="/">{item.subTitle4}</Link></li>
                        </ul>
                    </li>
                ))}
            </ul>
            <div className="menu_btn" onClick={OpenMenu}><FaBars /></div>
        </NavStyle>
        <NavMenu>
                <div id="toggleMenu" className={isNav ? "on" : ""}>
                    <div className="close_btn" onClick={() => setIsNav(false)}><FaRegWindowClose /></div>
                    <ul>
                        {navData
                        .map(item => (
                            <li key={item.id} onClick={ToggleMenu}>
                                <Link to="/">{item.title}<FaChevronDown className="toggleSub" /></Link>
                                <ul id="toggleSubMenu" className={isToggle ? "toggle" : ""}>
                                    <li><Link to="/">{item.subTitle1}</Link></li>
                                    <li><Link to="/">{item.subTitle2}</Link></li>
                                    <li><Link to="/">{item.subTitle3}</Link></li>
                                    <li><Link to="/">{item.subTitle4}</Link></li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </NavMenu>
        </>
    );
}

export default Nav;