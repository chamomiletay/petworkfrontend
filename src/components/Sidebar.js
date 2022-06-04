import React, {useState} from "react";
import * as FaIcons from 'react-icons/fa'
import { Link } from "react-router-dom";
import * as AiIcons from 'react-icons/ai'
import { HeaderItems } from "./HeaderItems";
import './Sidebar.css'
import { IconContext } from "react-icons";



const Sidebar = ()=>{
    const [navbar, setNavbar] = useState(false)

    const showNavbar = () => setNavbar(!navbar)

    return(
        <div className='nabar'>
       
            
        <Link to='#'className="menu-bars">
            <IconContext.Provider value={{className:'react-icons bars'}}>
                <FaIcons.FaBars onClick={showNavbar}/>
            </IconContext.Provider>
    
            
            </Link>
        <div className="navbar">
        <nav className={navbar ? 'nav-menu active': 'nav-menu'}>
            <ul className="nav-menu-items" >
                <li className="navbar-toggle">
                  <Link to='#' className='menu-bars'>
                      <IconContext.Provider value={{className:'react-icons ex'}}>
                        <AiIcons.AiOutlineClose />
                    </IconContext.Provider>
                    </Link> 
                </li>
                {HeaderItems.map((item,index) =>{
                    return(
                        <li key={index} className={item.cName}>
                            <IconContext.Provider value={{className:'react-icons'}}>
                            <Link to={item.path}>
                            {item.icon}
                            <span className="title">{item.title}</span>
                            </Link>
                            </IconContext.Provider>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </div>
        </div>
    )
}

export default Sidebar;