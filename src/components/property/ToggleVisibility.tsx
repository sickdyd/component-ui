import styled from '@emotion/styled'
import VisibilityOnIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }

  svg {
    font-size: 0.8rem;
    color: var(--dark-grey);
  }
`

export function ToggleVisibility({
  visible = true,
  onClick
}: {
  visible?: boolean
  onClick: () => void
}): JSX.Element {
  return (
    <Wrapper onClick={onClick}>{visible ? <VisibilityOnIcon /> : <VisibilityOffIcon />}</Wrapper>
  )
}
