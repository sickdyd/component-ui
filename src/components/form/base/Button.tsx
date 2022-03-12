import styled from '@emotion/styled'
import { MouseEventHandler, ReactNode } from 'react'

type ButtonType = 'cancel' | 'confirm' | 'link'

const linkStyles = {
  'text-decoration': 'underline;',
  'color': 'var(--blue);',
  'padding': '0.5rem 0rem;'
}

const cancelStyles = {
  'text-decoration': 'underline;',
  'color': 'var(--dark-grey);',
  'padding': '0.5rem 0rem;'
}

const confirmStyles = {
  'background-color': 'var(--blue);',
  'font-weight': 'bold;',
  'color': 'white;',
  'padding': '0.5rem 1rem;'
}

const StyledButton = styled.button<{ variant: ButtonType }>`
  all: unset;
  font-size: 14px;
  border-radius: var(--border-radius);

  &:hover {
    cursor: pointer;
  }

  ${({ variant }) => {
    switch (variant) {
      case 'link':
        return { ...linkStyles }
      case 'confirm':
        return { ...confirmStyles }
      case 'cancel':
        return { ...cancelStyles }
      default:
        return null
    }
  }}
`

export default function Button({
  type = 'confirm',
  onClick,
  children
}: {
  type?: ButtonType
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}): JSX.Element {
  return (
    <StyledButton onClick={onClick} variant={type}>
      {children}
    </StyledButton>
  )
}
