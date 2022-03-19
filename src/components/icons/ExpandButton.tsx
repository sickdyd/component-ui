import styled from '@emotion/styled'
import ExpandIcon from '@mui/icons-material/Add'
import CompactIcon from '@mui/icons-material/Clear'

const Wrapper = styled.div`
  display: flex;
  jusityf-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 1rem;
  background-color: var(--mercury);

  &:hover {
    cursor: pointer;
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
  return <Wrapper onClick={onClick}>{expanded ? <CompactIcon /> : <ExpandIcon />}</Wrapper>
}
