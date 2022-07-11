import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header.jsx'
import { Main } from './components/Main.jsx'

import { Home } from './pages/Home'
import { Details } from './pages/Details'
import { NotFound } from './pages/NotFound'

function App() {
    return (
        <>
            <Header />
            <Main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/country/:name" element={<Details />} />
                    <Route element={<NotFound />} />
                </Routes>
            </Main>
        </>
    )
}

export default App
