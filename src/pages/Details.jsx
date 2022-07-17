import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

import { Button } from '../components/Button'

import { searchByCountry } from '../config'
import { CountryDetails } from '../components/CountryDetails'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Details = () => {
    const navigate = useNavigate()
    const { name } = useParams()

    const [countryInfo, setCountryInfo] = useState(null)

    useEffect(() => {
        axios
            .get(searchByCountry(name))
            .then(({ data }) => setCountryInfo(data[0]))
            .catch((err) => console.log(err))
    }, [name])

    return (
        <Wrapper>
            <Button onClick={() => navigate(-1)}>Back</Button>
            {countryInfo && <CountryDetails {...countryInfo} />}
        </Wrapper>
    )
}
