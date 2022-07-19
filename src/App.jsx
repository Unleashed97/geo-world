import React, { Component } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Main } from './components/Main'

import HomePage from './pages/HomePage'
import { Details } from './pages/Details'
import { NotFound } from './pages/NotFound'

import { ALL_COUNTRIES } from './config'

export default class App extends Component {
    state = {
        countries: [],
    }

    componentDidMount() {
        axios
            .get(ALL_COUNTRIES)
            .then(({ data }) => this.setState({ countries: data }))
    }

    render() {
        return (
            <>
                <Header />
                <Main>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <HomePage countries={this.state.countries} />
                            }
                        />
                        <Route path="/country/:name" element={<Details />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Main>
            </>
        )
    }
}
