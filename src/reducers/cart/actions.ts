import {NavigateFunction} from 'react-router-dom'

import {ActionTypes, IActions} from './data'
import {IOrderInfo} from '@/pages/Cart/data'
import {IItem} from './data'

export function addItemAction(item: IItem) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies IActions
}

export function removeItemAction(itemId: IItem['id']) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies IActions
}

export function incrementItemQuantityAction(itemId: IItem['id']) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies IActions
}

export function decrementItemQuantityAction(itemId: IItem['id']) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies IActions
}

export function checkoutCartAction(order: IOrderInfo, callback: NavigateFunction) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  } satisfies IActions
}
