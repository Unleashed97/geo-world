import React from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '../components/Button'

import { CountryDetails } from '../features/countries/CountryDetails'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const Details = () => {
    const navigate = useNavigate()
    const { name } = useParams()

    return (
        <Wrapper>
            <Button onClick={() => navigate(-1)}>Back</Button>
            <CountryDetails paramsName={name} />
        </Wrapper>
    )
}
