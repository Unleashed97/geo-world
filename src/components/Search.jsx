import React from 'react'
import styled from 'styled-components'
import { IoSearch } from 'react-icons/io5'

const Wrapper = styled.div`
    padding: 1rem 2rem;
    box-shadow: var(--shadow);
    border-radius: var(--radii);
    background-color: var(--colors-ui-base);

    display: flex;
    align-items: center;
`

const Input = styled.input`
    font-family: var(--family);
    font-size: var(--fs-sm);
    color: var(--colors-text);
    margin-left: 1rem;
    border: none;
    background-color: var(--colors-ui-base);
    outline: none;

    &::placeholder {
        font-size: var(--fs-sm);
    }
`

const SearchIcon = styled(IoSearch)`
    color: var(--colors-text);
    font-size: var(--fs-sm);
`

export const Search = ({ search, onSearch }) => {
    const handleSearch = (e) => {
        onSearch(e.target.value)
    }

    return (
        <Wrapper>
            <SearchIcon />
            <Input
                placeholder="Search for a country..."
                onChange={handleSearch}
                value={search}
            />
        </Wrapper>
    )
}
