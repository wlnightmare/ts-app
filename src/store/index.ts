import { combineReducers } from 'redux';
import { shopReducer } from './reducers/shopReducer';
import {configureStore} from '@reduxjs/toolkit'
import { taskReducer } from './reducers/taskReducer';

const rootReducer = combineReducers({
  shop:shopReducer,
  task:taskReducer,
}) 

export const store = configureStore({reducer: rootReducer})

export type RootState = ReturnType<typeof store.getState> 
