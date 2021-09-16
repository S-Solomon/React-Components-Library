import React, { useState } from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'

const SideDrawer = () => {
    const [showNav, setShowNav] = useState(false)

    return (
        <>
            <HeaderStyled>
                <GiHamburgerMenu onClick={() => setShowNav(!showNav)}/> 
                <SideNavStyled>
                    <nav className={showNav ? 'nav active' : 'nav'}>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Contact Us</a></li>
                        </ul>
                    </nav>
                </SideNavStyled>
            </HeaderStyled>
        </>
    )
}

export default SideDrawer

const HeaderStyled = styled.header`
    padding: 30px;
    /* background: white;  */
    background: #011627;
    height: 40px;
    color: white;
    position: relative;
    svg {
        font-size: 30px;
        cursor: pointer;
        color: #7b7fda;
        position: absolute;
        right: 5%;
        top: 30%;
    }
`;



const SideNavStyled = styled.div`
    .nav {
        width: 240px;
        background: #011627;
        position: fixed;
        height: 100vh;
        padding: 0 30px;
        transition: all .3s;
        left: -100%;
        display: flex;
        justify-content: center;
        align-content: center;
    }
    .nav.active {
        left: 0;
    }
    ul {
        padding: 0;

        li {
            list-style: none;
            margin: 10px 0;
            a {
                text-decoration: none;
                color: white;
                display: block;
                padding: 10px 15px;
                font-size: 16px;
                border-radius: 6px;
                &:hover, &:active {
                    background: #172b4d;
                }
            }
        }
    }
`;

