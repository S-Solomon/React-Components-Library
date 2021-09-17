import React from 'react'
import styled from 'styled-components'

const Home = () => {
    return (
        <HomeStyled>
            <h1>Home</h1>
        </HomeStyled>
    )
}

export default Home

const HomeStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    h1 {
        color: white;
        font-size: 4rem;
    }
`;
