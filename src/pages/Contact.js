import React from 'react'
import styled from 'styled-components'

const Contact = () => {
    return (
        <ContactStyled>
            <h1>Contact</h1>
        </ContactStyled>
    )
}

export default Contact


const ContactStyled = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        color: white;
        font-size: 4rem;
    }
`;