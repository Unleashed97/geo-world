import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { Card } from '../components/Card'
import { Controls } from '../components/Controls'

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

export const HomePage = ({ countries }) => {
    const [filteredCountries, setFilteredCountries] = useState(countries)

    const handleSearch = (search, region) => {
        let data = [...countries]

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

        setFilteredCountries(data)
    }

    useEffect(() => {
        handleSearch()
    }, [countries])

    return (
        <Wrapper>
            <Controls onSearch={handleSearch} />
            <List>
                {filteredCountries.map((country) => {
                    const countryProps = {
                        name: country.name.common,
                        image: country.flags.png,
                        population: country.population.toLocaleString(),
                        region: country.region,
                        capital: country.capital,
                    }
                    return <Card key={country.name.common} {...countryProps} />
                })}
            </List>
        </Wrapper>
    )
}
