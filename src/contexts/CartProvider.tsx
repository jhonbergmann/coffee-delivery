import {createContext, useEffect, useReducer} from 'react'
import {useNavigate} from 'react-router-dom'

import {IOrderInfo} from '@/pages/Cart/data'
import {cartReducer} from '@/reducers/cart/reducer'
import {IItem} from '@/reducers/cart/data'
import {
  addItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from '@/reducers/cart/actions'
import {ICartContext, ICartContextProviderProps} from './data'

export const CartContext = createContext({} as ICartContext)

export function CartContextProvider({children}: ICartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem('@coffee-delivery:cart-state-1.0.0')

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )
  const navigate = useNavigate()

  const {cart, orders} = cartState

  function addItem(item: IItem) {
    dispatch(addItemAction(item))
  }

  function removeItem(itemId: IItem['id']) {
    dispatch(removeItemAction(itemId))
  }

  function checkout(order: IOrderInfo) {
    dispatch(checkoutCartAction(order, navigate))
  }

  function incrementItemQuantity(itemId: IItem['id']) {
    dispatch(incrementItemQuantityAction(itemId))
  }

  function decrementItemQuantity(itemId: IItem['id']) {
    dispatch(decrementItemQuantityAction(itemId))
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [cartState])

  return (
    <CartContext.Provider
      value={{
        addItem,
        cart,
        orders,
        decrementItemQuantity,
        incrementItemQuantity,
        removeItem,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
