import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SubMenu from './SubMenu.js'
import {SidebarData} from './SidebarData.js'
import { IconContext } from 'react-icons'
import MapComponent from './MapComponent.jsx'


const Nav = styled.div`
background: #00001a;
height: 70px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const NavIcon = styled(Link)`
color: #ffffff;
margin-left: 2rem;
font-size: 2rem;
height: 80px;
display: flex;
justify-content: flex-start;
align-items: center;
`;

const SidebarNav = styled.nav`
background: #00001a;
width: 250px;
height: 100vh;
display: flex;
justify-content: center;
position: fixed;
top: 0;
left: ${ ({sidebar}) => (sidebar ? '0' : '-100%')};
transition: 350ms;
z-index: 999;
`

const SidebarWrap = styled.div`
width: 100%;
`

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(true)
    const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        {/* <Nav>
            <NavIcon to='#'>
                <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
        </Nav> */}
        <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
            {/* <NavIcon to='#'>
                <AiIcons.AiOutlineClose onClick={showSidebar} />
            </NavIcon> */}
            {SidebarData.map((item, index) => {
                return <SubMenu item={item} key={index} />
            })}
            </SidebarWrap>
        </SidebarNav>
    </IconContext.Provider>
    <MapComponent/>
    </>
  )
}

export default Sidebar;