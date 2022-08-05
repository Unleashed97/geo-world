import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'

import { Search } from '../../components/Search'
import { CustomSelect } from '../../components/CustomSelect'

import { setSearch, setRegion } from './ControlsSlice'

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

export const Controls = () => {
    const dispatch = useDispatch()

    const selectRegion = useSelector((state) => state.controls.region)
    const selectSearch = useSelector((state) => state.controls.search)

    return (
        <Wrapper>
            <Search
                search={selectSearch}
                handleSearch={(search) => dispatch(setSearch(search))}
            />
            <CustomSelect
                options={options}
                value={selectRegion}
                placeholder="Filter by region"
                onChange={(props) => dispatch(setRegion(props))}
                isSearchable={false}
                isClearable
            />
        </Wrapper>
    )
}
