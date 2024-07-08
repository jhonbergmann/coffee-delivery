import {FocusEvent, LegacyRef, forwardRef, useState} from 'react'

import {Box, Container, ErrorMessage} from './styles'
import {ITextInputProps} from './data'

export const TextInput = forwardRef(function TextInput(
  {optional, error, containerProps, onFocus, onBlur, ...rest}: ITextInputProps,
  ref: LegacyRef<HTMLInputElement>,
) {
  const [isFocused, setIsFocused] = useState(false)

  function handleFocus(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(true)
    onFocus?.(event)
  }

  function handleBlur(event: FocusEvent<HTMLInputElement, Element>) {
    setIsFocused(false)
    onBlur?.(event)
  }

  return (
    <Box {...containerProps}>
      <Container data-state={isFocused ? 'focused' : 'blurred'}>
        <input type="text" onFocus={handleFocus} onBlur={handleBlur} ref={ref} {...rest} />
        {optional ? <span>Opcional</span> : null}
      </Container>
      {error?.message ? <ErrorMessage role="alert">{error.message}</ErrorMessage> : null}
    </Box>
  )
})
