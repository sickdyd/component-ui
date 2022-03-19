import styled from '@emotion/styled'
import Icon from 'components/icons/Icon'

const Wrapper = styled.div`
  display: flex;
  jusityf-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  top: 11px;
  padding: 5px;

  &:hover {
    cursor: pointer;
    background-color: var(--gallery);
  }

  svg {
    color: var(--scorpion);
  }
`

export default function ExpandButton({
  expanded,
  onClick
}: {
  expanded: boolean
  onClick: () => void
}): JSX.Element {
  return (
    <Wrapper onClick={onClick}>
      {expanded ? (
        <Icon src="/assets/icons/action-close.svg" alt="Compact icon" />
      ) : (
        <Icon src="/assets/icons/plus.svg" alt="Expand icon" />
      )}
    </Wrapper>
  )
}
