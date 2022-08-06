import { createSlice } from '@reduxjs/toolkit'

const themeSwitcherSlice = createSlice({
    name: 'theme',
    initialState: {
        value: 'light',
    },
    reducers: {
        setTheme(state, action) {
            state.value = action.payload
        },
    },
})

export const { setTheme } = themeSwitcherSlice.actions

export const selectTheme = (state) => state.theme.value

export default themeSwitcherSlice.reducer
