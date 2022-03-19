import styled from '@emotion/styled'
import { MouseEventHandler, ReactNode } from 'react'

type ButtonType = 'cancel' | 'confirm' | 'link'

const Wrapper = styled.div<{ compact: boolean }>`
  .link {
    text-decoration: underline;
    color: var(--blue-ribbon);
    padding: ${({ compact }) => (compact ? '0.2rem 0' : '0.5rem 0rem')};
    font-size: 14px;
    line-height: 24px;
    text-underline-offset: 0.5px;
    text-decoration-color: rgba(0, 108, 255, 0.3);
  }

  .cancel {
    text-decoration: underline;
    font-size: 14px;
    line-height: 24px;
    text-underline-offset: 0.5px;
    text-decoration-color: var(--silver1);
    color: var(--scorpion);
    padding: ${({ compact }) => (compact ? '0.2rem 0' : '0.5rem 0rem')};
  }

  .confirm {
    background-color: var(--blue-ribbon);
    font-weight: ${({ compact }) => (compact ? 'bold' : 'bold')};
    font-size: ${({ compact }) => (compact ? '12px' : '1rem')};
    line-height: 16px;
    color: white;
    padding: ${({ compact }) => (compact ? '4px 13px 4px 14px' : '0.5rem 1rem')};
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
