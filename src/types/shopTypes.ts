export enum ShopActionType {
  SET_PRODUCTS = 'SET_PRODUCTS',
  ADD_TO_BASKET = 'ADD_TO_BASKET',
  REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET',
  INCREMENT_PRODUCT_QUANTITY = 'INCREMENT_PRODUCT_QUANTITY',
  DECREMENT_PRODUCT_QUANTITY = 'DECREMENT_PRODUCT_QUANTITY',
  OPEN_MODAL = 'OPEN_MODAL',
  CLOSE_MODAL = 'CLOSE_MODAL',
}
export type Product = {
  id: number,
  title: string,
  price: number,
  category?: string | undefined,
  description: string,
  image: string,
}
export type BasketItem = Product & {
  count: number
}

export type ShopState = {
  products: Product[],
  basket: BasketItem[],
  modalOpen: boolean,
} 

export type SetProductAction = {
  type: ShopActionType.SET_PRODUCTS,
  payload: Product[]
}

export type AddToBasketAction = {
  type: ShopActionType.ADD_TO_BASKET,
  payload: number
}

export type RemoveToBasketAction = {
  type: ShopActionType.REMOVE_FROM_BASKET,
  payload: number,
}

export type IncrementProductAction = {
  type: ShopActionType.INCREMENT_PRODUCT_QUANTITY,
  payload: number,
}
export type DecrementProductAction = {
  type: ShopActionType.DECREMENT_PRODUCT_QUANTITY,
  payload: number,
}

export type OpenModal = {
  type: ShopActionType.OPEN_MODAL,
}
export type CloseModal = {
  type: ShopActionType.CLOSE_MODAL,
}

export type ShopAction = SetProductAction | AddToBasketAction | RemoveToBasketAction | IncrementProductAction | DecrementProductAction | OpenModal | CloseModal

export type FormValues = {
  name: string,
  phone: string,
  email: string,
  comment: string,
  city?: number,
}

