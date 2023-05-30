import {configureStore} from '@reduxjs/toolkit'
import loginDataReducer from './LoginDataSlice'
export  const MainStore = configureStore({
    reducer:{
    loginData:loginDataReducer, 
    },
    
 })