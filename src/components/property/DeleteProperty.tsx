import styled from '@emotion/styled'
import Delete from '@mui/icons-material/Delete'

const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
  }

  svg {
    font-size: 0.8rem;
    color: var(--dark-grey);
  }
`

export function DeleteProperty({ onClick }: { onClick: () => void }): JSX.Element {
  return <Wrapper onClick={onClick}><Delete /></Wrapper>
}
