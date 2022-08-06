import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { Container } from './Container'
import ThemeSwitcher from '../features/themeSwitcher/ThemeSwitcher'

const HeaderEl = styled.header`
    box-shadow: var(--shadow);
    background-color: var(--colors-bg);
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`

const Logo = styled.h1`
    font-size: var(--md);
    cursor: pointer;
`

export const Header = () => {
    const navigate = useNavigate()

    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Logo onClick={() => navigate('/')}>
                        Where is the world?
                    </Logo>
                    <ThemeSwitcher />
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}
