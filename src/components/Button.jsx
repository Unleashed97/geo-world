import React from 'react'
import styled from 'styled-components'
import { IoArrowBack } from 'react-icons/io5'

const CustomButton = styled.button`
    font-family: var(--family);
    font-size: var(--fs-sm);
    margin: 0;
    padding: 0.75rem;

    background-color: var(--colors-ui-base);
    color: var(--colors-text);
    border: 0;
    border-radius: var(--radii);

    display: flex;
    align-items: center;

    width: fit-content;

    box-shadow: var(--shadow);
    cursor: pointer;

    & > span {
        margin-left: 10px;
    }
`
export const Button = ({ children, onClick }) => {
    return (
        <CustomButton onClick={onClick}>
            <IoArrowBack /> <span>{children}</span>
        </CustomButton>
    )
}
