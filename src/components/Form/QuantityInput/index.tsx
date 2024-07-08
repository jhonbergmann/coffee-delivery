import {Minus, Plus} from '@phosphor-icons/react'

import {Container} from './style'
import {IQuantityInputProps} from './data'

export function QuantityInput({quantity, incrementQuantity, decrementQuantity}: IQuantityInputProps) {
  return (
    <Container>
      <button onClick={decrementQuantity}>
        <Minus size={14} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <Plus size={14} />
      </button>
    </Container>
  )
}
