import { applyMiddleware, combineReducers, createStore } from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import { shopReducer } from './reducers/shopReducer';
// import {userReducer} from "./reducers/userReducer"

const rootReducer = combineReducers({
  shop: shopReducer,
}) 

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type IState = ReturnType<typeof rootReducer>  
