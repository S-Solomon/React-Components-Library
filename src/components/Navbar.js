import React, { useState } from 'react'
import styled from 'styled-components' ;
import Drawer from './Drawer';
import Backdrop from './Backdrop'


const Navbar = () => {
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

    const drawerToggleClickHandler = () => {
        setSideDrawerOpen(!sideDrawerOpen)
        
    }

    const backdropClickHandler = () => {
        setSideDrawerOpen(false)
    }



    return (
        <NavStyled>
            <LogoStyled>
                Solo<span>Codes</span>
            </LogoStyled>
            <HamburgerStyled onClick={drawerToggleClickHandler}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerStyled>
            <MenuStyled>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Blog</a>
            </MenuStyled>
            {sideDrawerOpen ?  <Drawer /> : null}
            {sideDrawerOpen ?  <Backdrop closeBackdrop={backdropClickHandler}/> : null}
            
        </NavStyled>
    )
}

export default Navbar


const NavStyled = styled.nav `
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: white;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
`;

const LogoStyled = styled.a`
    padding: 1rem 0;
    color: #7b7fda;
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;
    span {
        font-weight: 300;
        font-size: 1.3rem;
    }
`;

const HamburgerStyled = styled.div `
    display: none;
    flex-direction: column;
    cursor: pointer;
    span {
        height: 2px;
        width: 25px;
        background: #7b7fda;
        margin-bottom: 4px;
        border-radius: 5px;
    }
    @media (max-width: 768px) {
    display: flex;
}
`;


const MenuStyled = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    @media (max-width: 768px) {
        display: none;
    }
    a {
        padding: 1rem 2rem;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        color: #67bc98;
        transition: all 0.3s ease-in;
        font-size: 0.9rem;
        &:hover {
            color: #7b7fda;
        }
    }
`;