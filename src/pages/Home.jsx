import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { Controls } from '../components/Controls'
import { List } from '../components/List.jsx'
import { Card } from '../components/Card.jsx'

import { ALL_COUNTRIES } from '../config'

export const Home = ({ countries }) => {
    let navigate = useNavigate()

    const [filtredCountries, setFiltredCountries] = useState(countries)

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

        setFiltredCountries(data)
    }

    useEffect(() => {
        handleSearch()
    }, [countries])

    return (
        <>
            <Controls onSearch={handleSearch} />
            <List>
                {filtredCountries.map((c, index) => {
                    const countryInfo = {
                        img: c.flags.png,
                        name: c.name.common,
                        info: [
                            {
                                title: 'Population',
                                description: c.population.toLocaleString(),
                            },
                            {
                                title: 'Region',
                                description: c.region,
                            },
                            {
                                title: 'Capital',
                                description: c.capital,
                            },
                        ],
                    }

                    return (
                        <Card
                            key={c.name.common}
                            {...countryInfo}
                            onClick={() =>
                                navigate(`/country/${c.name.common}`, {
                                    state: { name: c.name.common },
                                })
                            }
                        />
                    )
                })}
            </List>
        </>
    )
}
