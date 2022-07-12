import React from 'react'
import { useLocation } from 'react-router-dom'

export const Details = () => {
    const location = useLocation()

    return <div>Details {location.state.name}</div>
}
