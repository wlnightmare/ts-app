import { Reducer } from "redux"
import { ShopAction, ShopState, ShopActionType} from "../../types/shopTypes"

const initState:ShopState = {
  products: [],
  basket: JSON.parse(localStorage.getItem('products') || '[]')||[],
  modalOpen: false,
}
export const shopReducer:Reducer<ShopState, ShopAction>  = (state = initState, action) => {
  switch (action.type) {
    case ShopActionType.SET_PRODUCTS:
      return {...state, products:action.payload, modalOpen:false}
    case ShopActionType.ADD_TO_BASKET:
      const item = state.products.find((product)=>product.id === action.payload)
      if(!item) {
        return {...state};
      }
      const inBasket = state.basket.find((item)=>item.id === action.payload ? true: false)
      return {
        ...state,
        basket: inBasket ? state.basket.map(item => 
            item.id === action.payload ?
            {  ...item, count: item.count+1}
            : item
          )
          :[...state.basket, {...item, count:1}],
        modalOpen:false
      }
    case ShopActionType.REMOVE_FROM_BASKET:
      return {
        ...state,
        basket: [...state.basket.filter(item=>item.id !==action.payload)],
        modalOpen:false
      }
    case ShopActionType.INCREMENT_PRODUCT_QUANTITY:      
      return{
        ...state,
        basket: state.basket.map(item => 
          item.id === action.payload ?
          {  ...item, count: item.count+1}
          : item),
        modalOpen:false
      }
    case ShopActionType.DECREMENT_PRODUCT_QUANTITY:
      return {
        ...state,
        basket: state.basket.find((item)=>item.id === action.payload)?.count === 0 ? [...state.basket.filter(item=>item.id !== action.payload)]: state.basket.map(item => 
          item.id === action.payload ?
          {  ...item, count: item.count-1}
          : item),
        modalOpen:false
      }
    case ShopActionType.OPEN_MODAL:
      return {...state, modalOpen:true}
    case ShopActionType.CLOSE_MODAL:
      return {...state, modalOpen:false}
    default:
      return state
  }
}