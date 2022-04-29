import { applyMiddleware, combineReducers, createStore } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { shopReducer } from './reducers/shopReducer';
// import {userReducer} from "./reducers/userReducer"
import {configureStore} from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  shop:shopReducer,
}) 

export const store = configureStore({reducer: rootReducer})

export type RootState = ReturnType<typeof rootReducer> 
