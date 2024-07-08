import {InputHTMLAttributes} from 'react'

export type IRadioProps = InputHTMLAttributes<HTMLInputElement> & {
  isSelected: boolean
}
