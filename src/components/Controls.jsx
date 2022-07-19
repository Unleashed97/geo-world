import React, { Component } from 'react'
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

export default class Controls extends Component {
    constructor(props) {
        super(props)

        this.state = {
            search: '',
            region: '',
        }
    }

    onSearch = (searchValue) => {
        this.setState({ search: searchValue })
    }

    onSelect = (selectValue) => {
        this.setState({ region: selectValue })
    }

    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.search !== this.state.search ||
            prevState.region !== this.state.region
        ) {
            const regionValue = this.state.region?.value || ''
            this.props.handleControls(this.state.search, regionValue)
        }
    }

    render() {
        return (
            <Wrapper>
                <Search onSearch={this.onSearch} />
                <CustomSelect
                    options={options}
                    placeholder="Filter by Region"
                    isClearable
                    isSearchable={false}
                    value={this.state.region}
                    onChange={this.onSelect}
                />
            </Wrapper>
        )
    }
}
