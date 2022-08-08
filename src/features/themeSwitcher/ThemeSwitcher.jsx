import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { IoMoon, IoMoonOutline } from 'react-icons/io5'

import { setTheme, selectTheme } from './ThemeSwitcherSlice'

const ThemeSwitcherEl = styled.span`
    box-shadow: var(--shadow);
    border-radius: var(--radii);
    font-size: var(--fs-sm);
    background-color: var(--colors-ui-base);

    display: flex;
    align-items: center;
    padding: 0.75rem;
    margin-left: 1rem;

    cursor: pointer;
    white-space: nowrap;
`
const ThemeSwitcher = () => {
    const dispatch = useDispatch()

    const theme = useSelector((state) => selectTheme(state))

    useEffect(() => {
        document.body.setAttribute('data-theme', `${theme}`)
    }, [theme])
    return (
        <ThemeSwitcherEl
            onClick={() =>
                dispatch(setTheme(theme === 'light' ? 'dark' : 'light'))
            }
        >
            {theme === 'light' ? <IoMoon /> : <IoMoonOutline />}
            <span style={{ marginLeft: '10px' }}>
                {theme === 'light' ? 'Dark' : 'Light'} theme
            </span>
        </ThemeSwitcherEl>
    )
}

export default ThemeSwitcher
