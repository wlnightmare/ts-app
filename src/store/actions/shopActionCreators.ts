import axios from "axios";
import { Dispatch } from "redux";
import { BasketItem, Product, ShopAction, ShopActionType } from "../../types/shopTypes";

export const fetchProducts = () => (dispatch: Dispatch<ShopAction>) => {
  axios.get<Product[]>('https://fakestoreapi.com/products').then((res)=>{
    dispatch({type: ShopActionType.SET_PRODUCTS, payload: res.data})
  })
}

export const addToBasket = (id:number) => (dispatch:Dispatch<ShopAction>) => {
  dispatch({
      type: ShopActionType.ADD_TO_BASKET,
      payload: id,
  })
}

export const removeFromBasket = (id:number) => (dispatch:Dispatch<ShopAction>) => {
  dispatch({
    type:ShopActionType.REMOVE_FROM_BASKET,
    payload: id
  })
}

export const incrementProduct = (id:number, count:number) => (dispatch:Dispatch<ShopAction>) => {
  dispatch({
    type: ShopActionType.INCREMENT_PRODUCT_QUANTITY,
    payload: {id, count}
  })
}

export const decrementProduct = (id:number, count:number) => (dispatch:Dispatch<ShopAction>) => {
  dispatch({
    type:ShopActionType.DECREMENT_PRODUCT_QUANTITY,
    payload: {id, count}
  })
}
