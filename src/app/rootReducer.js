import { combineReducers } from '@reduxjs/toolkit'

import countriesReducer from '../features/countries/CountriesSlice'
import controlsReducer from '../features/controls/ControlsSlice'
import themeSwitcherReducer from '../features/themeSwitcher/ThemeSwitcherSlice'

export const rootReducer = combineReducers({
    countries: countriesReducer,
    controls: controlsReducer,
    theme: themeSwitcherReducer,
})
