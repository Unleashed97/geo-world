import React from 'react'
import styled from 'styled-components'

import { Controls } from '../features/controls/Controls'
import CountriesList from '../features/countries/CountriesList'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const HomePage = () => {
    return (
        <Wrapper>
            <Controls />
            <CountriesList />
        </Wrapper>
    )
}
