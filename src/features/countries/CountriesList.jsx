import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { fetchCountries, selectFilteredCountries } from './CountriesSlice'

import { Card } from '../../components/Card'
import { Preloader } from '../../components/Preloader'

const AltContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
`

const List = styled.div`
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;

    @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 3rem;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 4rem;
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 4rem;
    }
`

const CountriesList = () => {
    const dispatch = useDispatch()

    const countriesStatus = useSelector((state) => state.countries.status)
    const { search, region } = useSelector((state) => {
        const regionValue = state.controls.region?.value || ''
        return { search: state.controls.search, region: regionValue }
    })

    const filteredCountries = useSelector((state) =>
        selectFilteredCountries(state, search, region),
    )

    const error = useSelector((state) => state.countries.error)

    let content

    if (countriesStatus === 'loading') {
        content = (
            <AltContentWrapper>
                <Preloader />
            </AltContentWrapper>
        )
    } else if (countriesStatus === 'failed') {
        content = <AltContentWrapper>{error}</AltContentWrapper>
    } else if (countriesStatus === 'succeeded') {
        content = (
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
        )
    }

    useEffect(() => {
        if (countriesStatus === 'idle') {
            dispatch(fetchCountries())
        }
    }, [countriesStatus, dispatch])
    return <>{content}</>
}

export default CountriesList
