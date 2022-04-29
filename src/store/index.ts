import { applyMiddleware, combineReducers, createStore } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { shopReducer } from './reducers/shopReducer';
import {configureStore} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  shop:shopReducer,
}) 

export const store = configureStore({reducer: rootReducer})

export type RootState = ReturnType<typeof store.getState> 
