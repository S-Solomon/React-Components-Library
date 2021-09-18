import React from 'react'
import styled from 'styled-components'

const Blog = () => {
    return (
        <BlogStyled>
            <h1>Blog</h1>
        </BlogStyled>
    )
}

export default Blog

const BlogStyled = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
        font-size: 4rem;
        color: white;
    }
`;
