import React from 'react'
import styled from 'styled-components'

const Backdrop = ( { closebackdrop} ) => {
    return (
        <BackdropStyled onClick={closebackdrop}>
            
        </BackdropStyled>
    )
}

export default Backdrop


const BackdropStyled = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.3);
    z-index: -1;
    cursor: pointer;
`;