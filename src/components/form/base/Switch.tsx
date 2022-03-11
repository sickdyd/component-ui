import styled from '@emotion/styled'
import { MouseEvent } from 'react'

const SwitchWrapper = styled.div`
  display: inline;
  display: flex;
  border: 1px solid var(--light-grey);
  border-radius: 2px;
  width: fit-content;
`

const SwitchValue = styled.div<{ selected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.8rem;
  font-size: 14px;
  border-right: 1px solid var(--light-grey);
  background-color: ${({ selected }) => (selected ? 'var(--light-grey)' : 'transparent')};
`

export default function Switch({
  onClick,
  selected = false
}: {
  onClick?: (event: MouseEvent) => void
  selected?: boolean
}) {
  return (
    <SwitchWrapper>
      <SwitchValue selected={selected} onClick={onClick}>
        True
      </SwitchValue>
      <SwitchValue selected={!selected} onClick={onClick}>
        False
      </SwitchValue>
    </SwitchWrapper>
  )
}
