import { configureStore } from '@reduxjs/toolkit'

import countriesReducer from '../features/countries/CountriesSlice'
import controlsReducer from '../features/controls/ControlsSlice'

export default configureStore({
    reducer: {
        countries: countriesReducer,
        controls: controlsReducer,
    },
})
