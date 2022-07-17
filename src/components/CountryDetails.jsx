import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { filterByCode } from '../config'

const Info = styled.div`
    display: grid;

    grid-template-columns: 1fr;
    gap: 2rem;

    margin-top: 4rem;

    @media (min-width: 767px) {
        grid-template-columns: 1fr 2fr;
        gap: 4rem;
    }
`

const InfoImage = styled.img`
    display: block;
    width: 100%;
`

const InfoContent = styled.div`
    display: flex;
    flex-direction: column;
`

const InfoTitle = styled.h1`
    font-weight: var(--fw-normal);
    margin: 0 0 1rem;
`

const InfoListGroup = styled.div`
    display: grid;

    grid-template-columns: 1fr;
    gap: 1rem;

    @media (min-width: 767px) {
        grid-template-columns: repeat(2, 1fr);
    }
`

const InfoList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const InfoListItem = styled.li`
    font-size: var(--fs-sm);
    line-height: 2.5rem;
    & > b {
        font-weight: var(--fw-normal);
    }
`

const Meta = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;

    & > b {
        font-size: var(--fs-sm);
        font-weight: var(--fw-normal);
    }
`

const TagGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`

const Tag = styled.span`
    cursor: pointer;
    background-color: var(--colors-ui-base);
    color: var(--colors-text);
    font-size: var(--fs-sm);
    border-radius: var(--radii);
    padding: 0.5rem;
    box-shadow: var(--shadow);
`

export const CountryDetails = (props) => {
    const countryDetails = {
        name: props.name.common,
        nativeName: Object.values(props.name.nativeName)[0].common,
        flag: props.flags.png,
        population: props.population.toLocaleString(),
        capital: props.capital[0],
        region: props.region,
        subregion: props.subregion,
        tld: props.tld[0],
        currency: Object.values(props.currencies)[0].name,
        languages: Object.values(props.languages).join(', '),
        borders: props.borders,
    }

    const [neighbors, setNeighbors] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        if (countryDetails.borders?.length) {
            axios
                .get(filterByCode(countryDetails.borders))
                .then(({ data }) => setNeighbors(data))
                .catch((err) => console.log(err))
        }
    }, [countryDetails.borders])
    return (
        <Info>
            <InfoImage src={countryDetails.flag} />

            <InfoContent>
                <InfoTitle>{countryDetails.name}</InfoTitle>
                <InfoListGroup>
                    <InfoList>
                        <InfoListItem>
                            <b>Native name: </b> {countryDetails.nativeName}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Population: </b> {countryDetails.population}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Region: </b> {countryDetails.region}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Subregion: </b> {countryDetails.subregion}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Capital: </b> {countryDetails.capital}
                        </InfoListItem>
                    </InfoList>
                    <InfoList>
                        <InfoListItem>
                            <b>Top level domain: </b> {countryDetails.tld}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Currency: </b> {countryDetails.currency}
                        </InfoListItem>
                        <InfoListItem>
                            <b>Languages: </b> {countryDetails.languages}
                        </InfoListItem>
                    </InfoList>
                </InfoListGroup>
                <Meta>
                    <b>Border countries:</b>
                    {!countryDetails.borders?.length ? (
                        <span>There are no border countries</span>
                    ) : (
                        <TagGroup>
                            {neighbors.map((country) => (
                                <Tag
                                    key={country.name.common}
                                    onClick={() =>
                                        navigate(
                                            `/country/${country.name.common}`,
                                        )
                                    }
                                >
                                    {country.name.common}
                                </Tag>
                            ))}
                        </TagGroup>
                    )}
                </Meta>
            </InfoContent>
        </Info>
    )
}
