import {siginReducer} from './redux/reducer/signinReducer'
import { configureStore } from '@reduxjs/toolkit'


export const rootReducer = configureStore({
    reducer:{
        signed:siginReducer
    }
})