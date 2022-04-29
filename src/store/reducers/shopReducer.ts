import { Reducer } from "redux"
import { ShopAction, ShopState, ShopActionType} from "../../types/shopTypes"

const initState:ShopState = {
  products: [],
  basket: JSON.parse(localStorage.getItem('products') || '[]')||[],
  modalOpen: false,
}
export const shopReducer  = (state = initState, action: ShopAction) => {
  switch (action.type) {
    case ShopActionType.SET_PRODUCTS:
      return {...state, products:action.payload}
    case ShopActionType.ADD_TO_BASKET:
      const item = state.products.find((product)=>product.id === action.payload)
      const inBasket = state.basket.find((item)=>item.id === action.payload ? true: false)
      return {
        ...state,
        basket: inBasket ? state.basket.map(item => 
            item.id === action.payload ?
            {  ...item, count: item.count+1}
            : item
          )
          :[...state.basket, {...item, count:1}],
      }
    case ShopActionType.REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: state.basket.map((item)=>
          item.id ===action.payload ?
          {...item, count:+action.payload}
          : item
        ),
      }
    default:
      return state
  }
}