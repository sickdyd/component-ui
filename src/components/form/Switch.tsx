import styled from '@emotion/styled'

const SwitchWrapper = styled.div`
  display: inline;
  display: flex;
  border: 1px solid var(--mercury);
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
  border-right: 1px solid var(--mercury);
  background-color: ${({ isTrue }) => (isTrue ? 'var(--mercury)' : 'white')};
`

export default function Switch({
  onClick,
  isTrue
}: {
  onClick: (isTrue: boolean) => void
  isTrue: boolean
}) {
  return (
    <SwitchWrapper>
      <SwitchValue isTrue={Boolean(isTrue)} onClick={() => onClick(true)}>
        True
      </SwitchValue>
      <SwitchValue isTrue={!Boolean(isTrue)} onClick={() => onClick(false)}>
        False
      </SwitchValue>
    </SwitchWrapper>
  )
}
