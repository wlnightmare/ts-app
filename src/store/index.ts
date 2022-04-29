import { combineReducers } from 'redux';
import { shopReducer } from './reducers/shopReducer';
import {configureStore} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  shop:shopReducer,
}) 

export const store = configureStore({reducer: rootReducer})

export type RootState = ReturnType<typeof store.getState> 
