import {FieldError} from 'react-hook-form'

import {HTMLAttributes, InputHTMLAttributes} from 'react'

export type ITextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  optional?: boolean
  containerProps?: HTMLAttributes<HTMLDivElement>
  error?: FieldError
}
