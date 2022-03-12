import styled from '@emotion/styled'

const SwitchWrapper = styled.div`
  display: inline;
  display: flex;
  border: 1px solid var(--light-grey);
  border-radius: var(--border-radius);
  width: fit-content;

  &:hover {
    cursor: pointer;
  }
`

const SwitchValue = styled.div<{ isTrue?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.8rem;
  font-size: 14px;
  border-right: 1px solid var(--light-grey);
  background-color: ${({ isTrue }) => (isTrue ? 'var(--light-grey)' : 'transparent')};
`

export default function Switch({
  onClick,
  isTrue = false
}: {
  onClick: (isTrue: boolean) => void
  isTrue: boolean
}) {
  return (
    <SwitchWrapper>
      <SwitchValue isTrue={isTrue} onClick={() => onClick(true)}>
        True
      </SwitchValue>
      <SwitchValue isTrue={!isTrue} onClick={() => onClick(false)}>
        False
      </SwitchValue>
    </SwitchWrapper>
  )
}
