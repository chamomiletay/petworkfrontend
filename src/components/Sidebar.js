import React, {useState} from "react";
import * as FaIcons from 'react-icons/fa'
import { Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai'
import { HeaderItems } from "./HeaderItems";
import './Sidebar.js'


const Sidebar = ()=>{
    const [navbar, setNavbar] = useState(false)

    const showNavbar =()=> setNavbar(!navbar);

    return(
        <>
        <div className='navbar'>
            <Link to='' className="menu-bars">
                <FaIcons.FaBars onClick={showNavbar}/>
            </Link>

        </div>
        <nav className={navbar ? 'nav-menu active': 'nav-manu'}>
            <ul className="nav-menu-items">
                <li className="navbar-toggle">
                  <Link to='' className='menu-bars'>
                        <AiIcons.AiOutlineClose/>
                    </Link>  
                </li>
                {HeaderItems.map((item,index) =>{
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                            {item.icon}
                            <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>
    )
}

export default Sidebar;