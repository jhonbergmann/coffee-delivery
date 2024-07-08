import {ReactNode} from 'react'

import {IItem, IOrder} from '@/reducers/cart/data'
import {IOrderInfo} from '@/pages/Cart/data'

export interface ICartContext {
  cart: IItem[]
  orders: IOrder[]
  addItem: (item: IItem) => void
  removeItem: (itemId: IItem['id']) => void
  decrementItemQuantity: (itemId: IItem['id']) => void
  incrementItemQuantity: (itemId: IItem['id']) => void
  checkout: (order: IOrderInfo) => void
}

export interface ICartContextProviderProps {
  children: ReactNode
}
