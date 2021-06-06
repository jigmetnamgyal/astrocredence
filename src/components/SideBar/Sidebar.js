import {SidebarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink,SideBtnWrap,SideBarRoute} from './SidebarElements';

const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="/homepage" onClick={toggle}>Homepage</SideBarLink>
                    <SideBarLink to="/aboutUs" onClick={toggle}>About Us</SideBarLink>
                    <SideBarLink to="/contactUs" onClick={toggle}>Contact Us</SideBarLink>
                    <SideBarLink to="/blog" onClick={toggle}>Blog</SideBarLink>
                    
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="/newsletter">Newsletter</SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
