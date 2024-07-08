import {NavigateFunction} from 'react-router-dom'

import {IOrderInfo} from '@/pages/Cart/data'
import {IItem as Item} from './data'

export enum ActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  INCREMENT_ITEM_QUANTITY = 'INCREMENT_ITEM_QUANTITY',
  DECREMENT_ITEM_QUANTITY = 'DECREMENT_ITEM_QUANTITY',
  CHECKOUT_CART = 'CHECKOUT_CART',
}

export type IActions =
  | {
      type: ActionTypes.ADD_ITEM
      payload: {
        item: Item
      }
    }
  | {
      type: ActionTypes.DECREMENT_ITEM_QUANTITY | ActionTypes.INCREMENT_ITEM_QUANTITY | ActionTypes.REMOVE_ITEM
      payload: {
        itemId: Item['id']
      }
    }
  | {
      type: ActionTypes.CHECKOUT_CART
      payload: {
        order: IOrderInfo
        callback: NavigateFunction
      }
    }

export interface IItem {
  id: string
  quantity: number
}

export interface IOrder extends IOrderInfo {
  id: number
  items: Item[]
}

export interface ICartState {
  cart: Item[]
  orders: IOrder[]
}
