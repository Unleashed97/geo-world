import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Search } from './Search'
import { CustomSelect } from './CustomSelect'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
`

const options = [
    { value: 'Africa', label: 'Africa' },
    { value: 'America', label: 'America' },
    { value: 'Asia', label: 'Asia' },
    { value: 'Oceania', label: 'Oceania' },
    { value: 'Europe', label: 'Europe' },
]

export const Controls = ({ onSearch }) => {
    const [search, setSearch] = useState('')
    const [region, setRegion] = useState('')

    useEffect(() => {
        const regionValue = region?.value || ''

        onSearch(search, regionValue)
    }, [search, region])

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch} />
            <CustomSelect
                options={options}
                value={region}
                placeholder="Filter by region"
                onChange={setRegion}
                isSearchable={false}
                isClearable
            />
        </Wrapper>
    )
}
