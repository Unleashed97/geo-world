import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Wrapper = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--colors-text);
`
// const TextBlock = styled.div``
const SpanEl = styled.span`
    font-size: 200px;
    font-weight: var(--fw-light);
`

const Text = styled.p`
    font-size: 40px;

    & > a {
        color: blue;
        text-decoration: none;
    }

    & > a:hover {
        text-decoration: underline;
    }
`
export const NotFound = () => {
    return (
        <Wrapper>
            <SpanEl>404</SpanEl>
            <Text>
                This page not found. <Link to="/">Go back</Link>
            </Text>
        </Wrapper>
    )
}
