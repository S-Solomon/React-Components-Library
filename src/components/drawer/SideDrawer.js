import React, { useState } from 'react'
import styled from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

const SideDrawer = () => {
    const [showNav, setShowNav] = useState(false)

    return (
        <>
            <HeaderStyled>
                <GiHamburgerMenu onClick={() => setShowNav(!showNav)}/> 
                <SideNavStyled>
                    <nav className={showNav ? 'nav active' : 'nav'}>
                        <ul>
                            <li>
                                <Link to="/" activeClassName="active-class" exact>Home</Link>
                            </li>
                            <li>
                                <Link to="/about" activeClassName="active-class" exact>About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact" activeClassName="active-class" exact>Contact Us</Link>
                            </li>
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
    background: white; 
    /* background: #011627; */
    height: 40px;
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
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
        top: 0;
    }
    .nav.active {
        left: 0;
    }
    ul {
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        li {
            .active-class {
                color: white;
                background: #057FFF;
            }
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
                .active-class {
                    color: white;
                    background: #057FFF;
                }
            }
        }
    }
`;

