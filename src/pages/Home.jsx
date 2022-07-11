import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { Controls } from '../components/Controls'
import { List } from '../components/List.jsx'
import { Card } from '../components/Card.jsx'

import { ALL_COUNTRIES } from '../config'

export const Home = () => {
    const [countries, setCountries] = useState([])

    let navigate = useNavigate()

    useEffect(() => {
        axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
    }, [])

    return (
        <>
            <Controls />
            <List>
                {countries.map((c, index) => {
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
