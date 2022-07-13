import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

import { filterByCode } from '../config'

const Wrapper = styled.section`
    margin-top: 3rem;
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    gap: 2rem;

    @media (min-width: 767px) {
        grid-template-columns: minmax(100px, 400px) 1fr;
        align-items: center;
        gap: 5rem;
    }

    @media (min-width: 1024px) {
        grid-template-columns: minmax(400px, 600px) 1fr;
        align-items: center;
        gap: 5rem;
    }
`

const InfoImage = styled.img`
    display: block;
    width: 100%;
    heigth: 100%;
    object-fit: contain;
`

const InfoTitle = styled.h1`
    margin: 0;
    font-weight: var(--fw-normal);
`

const ListGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 1024px) {
        flex-direction: row;
        gap: 4rem;
    }
`

const List = styled.ul`
    list-style: none;
    padding: 0;
`

const ListItem = styled.li`
    line-height: 1.8rem;

    & > b {
        font-weight: var(--fw-normal);
    }
`

const Meta = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 1.5rem;

    & > b {
        font-weight: var(--fw-normal);
    }

    @media (min-width: 767px) {
        flex-direction: row;
        align-items: center;
    }
`

const TagGroup = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
`

const Tag = styled.span`
    padding: 0 1rem;
    background-color: var(--colors-ui-base);
    box-shadow: var(--shadow);
    line-height: 1.5;
    cursor: pointer;
`

export const DetailsInfo = (props) => {
    const navigate = useNavigate()
    const [neighbors, setNeighbors] = useState([])

    const {
        name,
        flags,
        capital,
        population,
        region,
        subregion,
        tld,
        currencies,
        languages,
        borders = [],
    } = props

    useEffect(() => {
        if (borders.length) {
            axios
                .get(filterByCode(borders))
                .then(({ data }) =>
                    setNeighbors(data.map((c) => c.name.common)),
                )
                .catch((err) => console.log(err))
        }
    }, [borders])

    return (
        <Wrapper>
            <InfoImage src={flags.png} alt={name.common} />

            <div>
                <InfoTitle>{name.common}</InfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Native name: </b>
                            {Object.values(name.nativeName)[0].common}
                        </ListItem>
                        <ListItem>
                            <b>Population: </b>
                            {population.toLocaleString()}
                        </ListItem>
                        <ListItem>
                            <b>Region: </b>
                            {region}
                        </ListItem>
                        <ListItem>
                            <b>Sub region: </b>
                            {subregion}
                        </ListItem>
                        <ListItem>
                            <b>Capital: </b>
                            {capital}
                        </ListItem>
                    </List>

                    <List>
                        <ListItem>
                            <b>Top level domain: </b>
                            {tld.map((d) => (
                                <span key={d}>{d}</span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>Currencies: </b>
                            {Object.values(currencies).map((c) => (
                                <span key={c.name}>{c.name}</span>
                            ))}
                        </ListItem>
                        <ListItem>
                            <b>Languages: </b>{' '}
                            {Object.values(languages).map((l) => (
                                <span key={l}>{l}</span>
                            ))}
                        </ListItem>
                    </List>
                </ListGroup>

                <Meta>
                    <b>Border countries</b>
                    {!borders.length ? (
                        <span>There are no border countries</span>
                    ) : (
                        <TagGroup>
                            {neighbors.map((n) => (
                                <Tag
                                    key={n}
                                    onClick={() => navigate(`/country/${n}`)}
                                >
                                    {n}
                                </Tag>
                            ))}
                        </TagGroup>
                    )}
                </Meta>
            </div>
        </Wrapper>
    )
}
