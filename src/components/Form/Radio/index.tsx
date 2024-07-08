import {LegacyRef, forwardRef} from 'react'

import {Container} from './styles'
import {IRadioProps} from './data'

export const Radio = forwardRef(function Radio(
  {children, isSelected, ...rest}: IRadioProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  return (
    <Container data-state={isSelected}>
      <input type="radio" ref={ref} {...rest} />
      {children}
    </Container>
  )
})
