import React, { FC, ReactNode } from 'react'

type ButtonSize = 'small' | 'normal' | 'full' | 'small&full'
type ButtonEmphasis = 'transparent' | 'outline' | 'primary'
type ButtonColor = 'primary' | 'warning' | 'danger' | 'success' | 'secondary'

interface Props {
  children: ReactNode
  size?: ButtonSize
  emphasis?: ButtonEmphasis
  color?: ButtonColor
}

export const Button: FC<Props> = ({
  size = 'normal',
  emphasis = 'primary',
  color = 'primary',
  children,
  ...htmlProps
}) => {
  return <button {...htmlProps}>{children}</button>
}

Button.displayName = 'Button'
