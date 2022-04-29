import { Reducer } from "redux"
import { ShopAction, ShopState, ShopActionType } from "../../types/shopTypes"

const initState:ShopState = {
  products: [],
  basket: JSON.parse(localStorage.getItem('products')||'[]') || [],
  counter: 0,
  modalOpen: false,
}

export const shopReducer = (state = initState, action:ShopAction) => {
  switch (action.type) {
    case ShopActionType.SET_PRODUCTS:
      return {...state, products:action.payload}
    case ShopActionType.ADD_TO_BASKET:
      const existedProduct = state.basket.find(item=>item.id === action.payload)
      if(existedProduct){
        return {...state, counter:state.counter++}
      }
      return {
        ...state, 
        basket: 
      }
    case ShopActionType.REMOVE_FROM_BASKET:
      return {
        ...state.basket,
        basket: 
      }
    default:
      return state
  }
}