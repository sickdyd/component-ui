import styled from '@emotion/styled'
import GridView from '@mui/icons-material/GridView'
import Button from 'components/form/Button'
import { Tooltip } from 'components/info/Tooltip'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--light-grey);
`

const Info = styled.div`
  display: flex;
  align-items: center;
`

const Controls = styled(Info)`
  display: flex;
  gap: 1rem;
  margin: 0.5rem 1rem 0.5rem 0;
`

const Library = styled.span`
  color: var(--grey);
`

const ComponentName = styled.span`
  color: var(--black);
  font-weight: bold;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid var(--light-grey);
  padding: 0.2rem 0.5rem;
  margin: 0.8rem 0.5rem 0.5rem 0;

  svg {
    font-size: 1.2rem;
  }
`

export function Header(): JSX.Element {
  return (
    <Wrapper>
      <Info>
        <IconWrapper>
          <Tooltip text="Open dashboard">
            <GridView />
          </Tooltip>
        </IconWrapper>
        <Library>Material UI /&nbsp;</Library>
        <ComponentName>Button</ComponentName>
      </Info>
      <Controls>
        <Button variant="cancel">Discard Changes</Button>
        <Button compact={true}>Save Changes</Button>
      </Controls>
    </Wrapper>
  )
}
