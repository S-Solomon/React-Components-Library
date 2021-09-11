import React from 'react'
import styled from 'styled-components'

const Drawer = () => {
    return (
        <>
        <DrawerStyled>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Blogs</a></li>
            </ul>
        </DrawerStyled>
        </>
    )
}

export default Drawer


const DrawerStyled = styled.nav`
    height: 100%;
    background: white;
    box-shadow: 2px 0px 5px rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    z-index: 200;
    transition: all 0.5s ease-in-out;
    ul {
        list-style: none;
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        li {
            margin: 0.5rem 0;
            a {
                color: #67bc98;
                text-decoration: none;
                &:hover {
                    color: #7b7fda;
                }
            }
        }
    }
`;

// const BackdropStyled = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0,0,0,0.3);
//     z-index: 100;
// `;