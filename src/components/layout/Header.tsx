import styled from '@emotion/styled'
import GridView from '@mui/icons-material/GridView'
import Button from 'components/form/Button'
import { Tooltip } from 'components/info/Tooltip'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--mercury);
  min-height: 41px;
  padding: 0 10px;
`

const Info = styled.div`
  display: flex;
  align-items: center;
`

const Controls = styled(Info)`
  display: flex;
  gap: 1rem;
`

const Library = styled.span`
  color: var(--gray);
`

const ComponentName = styled.span`
  color: var(--mine-shaft);
  font-weight: bold;
`

const ComponentIcon = styled.div`
  display: flex;
  align-items: center;

  svg {
    height: 18px;
    width: 18px;
  }
`

const IconWrapper = styled.p`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  padding: 2px;
  transition: all 150ms;

  &:hover {
    background-color: var(--mercury);
    cursor: pointer;
  }
`

const VerticalLine = styled.div`
  border-right: 1px solid var(--mercury);
  min-height: 24px;
  margin: 0 10px;
`

export function Header(): JSX.Element {
  return (
    <Wrapper>
      <Info>
        <ComponentIcon>
          <Tooltip text="Open dashboard">
            <IconWrapper>
              <GridView />
            </IconWrapper>
          </Tooltip>
        </ComponentIcon>
        <VerticalLine />
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
