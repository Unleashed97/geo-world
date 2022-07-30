import React from 'react'
import styled, { keyframes } from 'styled-components'

const spin = keyframes`
    from{
        transform: rotate(0deg)
    }
    to{
        transform: rotate(360deg);
    }
`

const PreloaderEl = styled.div`
    position: relative;
    width: 100px;
    height: 100px;

    border-radius: 50%;
    border: 3px solid transparent;

    border-top-color: var(--colors-text);

    animation: ${spin} 2s linear infinite;

    &::before {
        content: '';
        position: absolute;
        inset: 5px;

        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: var(--colors-text);

        animation: ${spin} 3s linear infinite;
    }

    &::after {
        content: '';
        position: absolute;
        inset: 15px;

        border-radius: 50%;
        border: 3px solid transparent;
        border-top-color: var(--colors-text);

        animation: ${spin} 1.5s linear infinite;
    }
`

export const Preloader = () => {
    return <PreloaderEl />
}
