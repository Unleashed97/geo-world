import React, { Component } from 'react'
import styled from 'styled-components'

import { Card } from '../components/Card'
import Controls from '../components/Controls'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

const List = styled.div`
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 4rem;
    }
`
export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filteredCountries: [],
        }
    }

    handleControls = (search, region) => {
        let data = [...this.props.countries]

        if (search) {
            data = data.filter((country) =>
                country.name.common
                    .toLowerCase()
                    .includes(search.toLowerCase()),
            )
        }

        if (region) {
            data = data.filter((country) => country.region.includes(region))
        }

        this.setState({ filteredCountries: data })
    }

    componentDidMount() {
        this.setState({ filteredCountries: this.props.countries })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.countries !== this.props.countries) {
            this.handleControls()
        }
    }

    render() {
        console.log(this.state.filteredCountries)
        return (
            <Wrapper>
                <Controls handleControls={this.handleControls} />
                <List>
                    {this.state.filteredCountries.map((country) => {
                        const countryInfo = {
                            name: country.name.common,
                            image: country.flags.png,
                            population: country.population.toLocaleString(),
                            region: country.region,
                            capital: country.capital,
                        }
                        return (
                            <Card key={country.name.common} {...countryInfo} />
                        )
                    })}
                </List>
            </Wrapper>
        )
    }
}
