import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './2-slice'              // default export lets us name anything to reducer

export const store = configureStore({
    // Combining all reducers (in this case, just one)
    reducer : {counter: counterReducer}
})