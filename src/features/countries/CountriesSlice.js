import { createAsyncThunk, createSlice } from '@reduxjs/toolkit/'
import axios from 'axios'

import { ALL_COUNTRIES } from '../../config'

const initialState = {
    items: [],
    status: 'idle',
    error: null,
}

export const fetchCountries = createAsyncThunk(
    'countries/fetchCountries',
    async () => {
        return axios.get(ALL_COUNTRIES).then(({ data }) => data)
    },
)

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCountries.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchCountries.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.items = action.payload
            })
            .addCase(fetchCountries.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})

export const selectAllCountries = (state) => state.countries.items

export const selectCountryByName = (state, name) =>
    state.countries.items.find((country) => country.name.common === name)

export const selectNeighborsByCodes = (state, codes) => {
    if (codes && codes.length) {
        return codes.map((code) =>
            state.countries.items.find((country) => country.cca3 === code),
        )
    }
}

export const selectFilteredCountries = (state, search, region) =>
    state.countries.items.filter(
        (country) =>
            country.region.includes(region) &&
            country.name.common.toLowerCase().includes(search.toLowerCase()),
    )

export default countriesSlice.reducer
