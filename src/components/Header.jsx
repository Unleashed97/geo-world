import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'

import { Container } from './Container'

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

const ModeSwitcher = styled.span`
    box-shadow: var(--shadow);
    border-radius: var(--radii);
    font-size: var(--fs-sm);
    background-color: var(--colors-ui-base);

    display: flex;
    align-items: center;
    padding: 0.75rem;
    cursor: pointer;
`
export const Header = () => {
    const navigate = useNavigate()
    const [theme, setTheme] = useState('light')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
        document.body.setAttribute(
            'data-theme',
            theme === 'light' ? 'light' : 'dark',
        )
    })
    return (
        <HeaderEl>
            <Container>
                <Wrapper>
                    <Logo onClick={() => navigate('/')}>
                        Where is the world?
                    </Logo>
                    <ModeSwitcher onClick={toggleTheme}>
                        {theme === 'light' ? <IoMoon /> : <IoMoonOutline />}
                        <span style={{ marginLeft: '10px' }}>
                            {theme === 'light' ? 'Dark' : 'Light'} theme
                        </span>
                    </ModeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>
    )
}
