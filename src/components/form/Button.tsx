import styled from '@emotion/styled'
import { MouseEventHandler, ReactNode } from 'react'

type ButtonType = 'cancel' | 'confirm' | 'link'

const Wrapper = styled.div<{ compact: boolean }>`
  .link {
    text-decoration: underline;
    color: var(--blue);
    padding: ${({ compact }) => (compact ? '0.2rem 0' : '0.5rem 0rem')};
  }

  .cancel {
    text-decoration: underline;
    color: var(--dark-grey);
    padding: ${({ compact }) => (compact ? '0.2rem 0' : '0.5rem 0rem')};
  }

  .confirm {
    background-color: var(--blue);
    font-weight: ${({ compact }) => (compact ? 'normal' : 'bold')};
    font-size: ${({ compact }) => (compact ? '0.75rem' : '1rem')};
    color: white;
    padding: ${({ compact }) => (compact ? '0.3rem 0.75rem' : '0.5rem 1rem')};
  }
`

const StyledButton = styled.button`
  all: unset;
  font-size: 14px;
  border-radius: var(--border-radius);

  &:hover {
    cursor: pointer;
  }
`

export default function Button({
  variant = 'confirm',
  compact = false,
  onClick,
  children
}: {
  variant?: ButtonType
  compact?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}): JSX.Element {
  return (
    <Wrapper compact={compact}>
      <StyledButton onClick={onClick} className={variant}>
        {children}
      </StyledButton>
    </Wrapper>
  )
}
