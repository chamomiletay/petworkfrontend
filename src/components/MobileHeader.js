import React from 'react';
import{Nav, NavBarContainer, NavItems, NavLinks, NavMenu, MobileIcon} from './MobileHeaderElements'
import { Router } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


const Navbar = () =>{
    return(
        <>
            <Nav>
                <NavBarContainer>
                <MobileIcon>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                <NavItems>
                    <NavLinks to='/'>Home</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to='/about'>About</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks Link to='/dogfacts'>DogFacts</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to='/favorites'>Favorites</NavLinks>
                </NavItems>
                <NavItems>
                    <NavLinks to='/signin'>SignIn</NavLinks>
                </NavItems>
                </NavMenu>

                </NavBarContainer>




            </Nav>
        
        
        
        
        
        </>



    )
}


export default Navbar