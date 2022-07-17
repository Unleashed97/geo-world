import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Main } from './components/Main'

import { HomePage } from './pages/HomePage'
import { Details } from './pages/Details'
import { NotFound } from './pages/NotFound'

import { ALL_COUNTRIES } from './config'

const App = () => {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        if (!countries.length)
            axios
                .get(ALL_COUNTRIES)
                .then(({ data }) => setCountries(data))
                .catch((error) => console.log(error))
    }, [])

    return (
        <>
            <Header />

            <Main>
                <Routes>
                    <Route
                        path="/"
                        element={<HomePage countries={countries} />}
                    />
                    <Route path="/country/:name" element={<Details />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Main>
        </>
    )
}

export default App
