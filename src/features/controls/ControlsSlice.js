import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: '',
    region: '',
}

const controlsSlice = createSlice({
    name: 'controls',
    initialState,
    reducers: {
        setSearch(state, action) {
            state.search = action.payload
        },

        setRegion(state, action) {
            state.region = action.payload
        },
    },
})

export const { setSearch, setRegion } = controlsSlice.actions

export default controlsSlice.reducer
