import styled from '@emotion/styled'
import { MouseEventHandler, ReactNode } from 'react'

type ButtonType = 'cancel' | 'confirm' | 'link'

const Wrapper = styled.div`
  .link {
    text-decoration: underline;
    color: var(--blue);
    padding: 0.5rem 0rem;
  }

  .cancel {
    text-decoration: underline;
    color: var(--dark-grey);
    padding: 0.5rem 0rem;
  }

  .confirm {
    background-color: var(--blue);
    font-weight: bold;
    color: white;
    padding: 0.5rem 1rem;
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
  onClick,
  children
}: {
  variant?: ButtonType
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}): JSX.Element {
  return (
    <Wrapper>
      <StyledButton onClick={onClick} className={variant}>
        {children}
      </StyledButton>
    </Wrapper>
  )
}
