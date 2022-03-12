import styled from '@emotion/styled'
import ExpandIcon from '@mui/icons-material/Add'
import CompactIcon from '@mui/icons-material/Clear'

const Wrapper = styled.div`
  display: flex;
  jusityf-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  background-color: var(--light-grey);

  &:hover {
    cursor: pointer;
  }

  svg {
    color: var(--dark-grey);
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
