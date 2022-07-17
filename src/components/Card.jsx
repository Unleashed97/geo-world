import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const CardEl = styled.article`
    display: flex;
    flex-direction: column;

    background-color: var(--colors-ui-base);
    border-radius: var(--radii);
    box-shadow: var(--shadow);

    overflow: hidden;
    cursor: pointer;
`

const CardImage = styled.img`
    display: block;
    width: 100%;
    height: 150px;

    object-fit: cover;
    object-position: center;

    box-shadow: var(--shadow);
`

const CardTextBlock = styled.div`
    padding: 0.75rem 1rem;
`

const CardTitle = styled.h2`
    font-size: var(--fs-md)
    font-weight: var(--fw-bold)
    margin: 0 0 2rem;
`

const CardList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const CardListItem = styled.li`
    font-size: var(--fs-sm);
    line-height: 2rem;
    & > b {
        font-weight: var(--fw-normal);
    }
`

export const Card = ({ name, image, population, region, capital }) => {
    const navigate = useNavigate()
    return (
        <CardEl onClick={() => navigate(`/country/${name}`)}>
            <CardImage src={image} />
            <CardTextBlock>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    <CardListItem>
                        <b>Population: </b>
                        {population}
                    </CardListItem>
                    <CardListItem>
                        <b>Region: </b>
                        {region}
                    </CardListItem>
                    <CardListItem>
                        <b>Capital: </b>
                        {capital}
                    </CardListItem>
                </CardList>
            </CardTextBlock>
        </CardEl>
    )
}
