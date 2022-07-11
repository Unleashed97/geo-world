import React from 'react'

import styled from 'styled-components'

const Wrapper = styled.article`
    border-radius: var(--radii);
    background-color: var(--colors-ui-base);
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

const CardBody = styled.div`
    padding: 1rem 1rem 2rem;
`

const CardTitle = styled.h3`
    margin: 0;
    font-size: var(--fz-md);
    font-weight: var(--fw-bold);
`

const CardList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 1rem 0 0;
`

const CardListItem = styled.li`
    font-size: var(--fz-sm);
    line-height: 1.5;
    font-weight: var(--fw-light);

    & > b {
        font-weight: var(--fw-normal);
    }
`

export const Card = ({ img, name, info = [], onClick }) => {
    return (
        <Wrapper onClick={onClick}>
            <CardImage src={img} alt={name} />

            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardList>
                    {info.map((el) => (
                        <CardListItem key={el.title}>
                            <b>{el.title}</b>: {el.description}
                        </CardListItem>
                    ))}
                </CardList>
            </CardBody>
        </Wrapper>
    )
}
