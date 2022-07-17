import React from 'react'
import styled from 'styled-components'

import { Container } from './Container'

const Wrapper = styled.div`
    margin: 2rem 0;
`
export const Main = ({ children }) => {
    return (
        <Container>
            <Wrapper>{children}</Wrapper>
        </Container>
    )
}
