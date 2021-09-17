import React from 'react'
import styled from 'styled-components'

const About = () => {
    return (
        <AboutStyled>
            <h1>About</h1>
        </AboutStyled>
    )
}

export default About


const AboutStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    h1 {
        color: white;
        font-size: 4rem;
    }
`;