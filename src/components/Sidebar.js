import React from "react";
import { SideBarContainer, Icon, ClosedIcon, SideBarWrap, SideBarMenu, SideBarLink } from "./MobileHeaderElements";


const Sidebar = () =>{
    return(
        <SideBarContainer>
            <Icon>
                <ClosedIcon/>
            </Icon>
            <SideBarWrap>
                <SideBarMenu>
                    <SideBarLink>
                        Home
                    </SideBarLink>
                    <SideBarLink>
                        Home
                    </SideBarLink>
                    <SideBarLink>
                        Home
                    </SideBarLink>
                </SideBarMenu>
            </SideBarWrap>


        </SideBarContainer>
    )
}

export default Sidebar