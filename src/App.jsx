import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header.jsx'
import { Main } from './components/Main.jsx'

import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { NotFound } from './pages/NotFound'

import { ALL_COUNTRIES } from './config'

function App() {
    const [countries, setCountries] = useState([])

    useEffect(() => {
        if (!countries.length)
            axios.get(ALL_COUNTRIES).then(({ data }) => setCountries(data))
        // eslint-disable-next-line
    }, [])
    return (
        <>
            <Header />
            <Main>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home countries={countries} />}
                    />
                    <Route path="/country/:name" element={<Details />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Main>
        </>
    )
}

export default App
