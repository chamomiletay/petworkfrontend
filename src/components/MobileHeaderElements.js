import styled from 'styled-components'
import {devices} from './MediaSizes'
import { Link as LinkScroll } from 'react-scroll'
import { FaTimes } from 'react-icons/fa'



export const Nav = styled.div`


@media${devices.laptop}{
display:none;


`
export const MobileIcon = styled.div`
    @media${devices.phone}{
        display:block;
        position: absolute;
        transform: translate(-100, 60%);
        font-size: 300%;
        color: white;
        float: right;
        top: 20px;
        right: 0;
    }

`

export const NavBarContainer = styled.div`

`

export const NavMenu = styled.ul`
    display:flex;
    align-items:center;
    text-align;
    list-style:none;
    margin-right: -15px;
@media${devices.laptop}{
    display: none;
}
`

export const NavItems = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkScroll)`
    color: black;
    display:flex;
    align-items:center;
    text-decoration: none;
    padding: 0 1 rem;
    height:100%


`

export const SideBarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%
    height: 100%
    background: black;
    display: grid;
    alight-items:  center;
    top: 0;
    left:0;
    transition: 0.s ease-in-out;
    opacity: ${({isOpen})=>(isOpen ? '100%' : '0')}
    top: ${({isOpen})=>(isOpen? '0' : '-100%')}
`

export const ClosedIcon = styled(FaTimes)`
color: white;
`
export const Icon = styled.div`
postion: absolute:
top: 1.2rem;
right:1.5rem;
background: transparent;
font-size: 2rem;
outline:none;
`



export const SideBarWrap = styled.div`
    color: black;
`

export const SideBarLink = styled(LinkScroll)`
display: flex;
align-items: center;
justify-content: center;
list-style: none:
transition:0.2s ease-in-out;
text-decoration: none; 
color: white;

`

export const SideBarMenu = styled.ul`
display: grid;
grid-template-columns: 1fr;
gird-template-rows: repeat(6, 80px);
text-align: center;
`