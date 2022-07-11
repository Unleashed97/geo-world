import React from 'react'
import styled from 'styled-components'

import { IoSearch } from 'react-icons/io5'

const InputContainer = styled.label`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 1.5rem;
    padding: 1rem 2rem;

    border-radius: var(--radii);
    box-shadow: var(--shadow);
    background-color: var(--colors-ui-base);

    @media (min-width: 767px) {
        margin-bottom: 0;
        width: 280px;
    }
`

const Input = styled.input.attrs({
    type: 'seach',
    placeholder: 'Search for a country...',
})`
    margin-left: 2rem;
    border: 0;
    outline: 0;
    color: var(--colors-text);

    background-color: var(--colors-ui-base);
`

export const Search = ({ search, setSearch }) => {
    return (
        <InputContainer>
            <IoSearch />
            <Input onChange={(e) => setSearch(e.target.value)} value={search} />
        </InputContainer>
    )
}
