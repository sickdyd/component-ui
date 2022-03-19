import styled from '@emotion/styled'
import Button from 'components/form/Button'
import { Tooltip } from 'components/info/Tooltip'

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--mercury);
  min-height: 41px;
  padding: 0 19px 0 8px;
`

const Info = styled.div`
  display: flex;
  align-items: center;

  font-family: Lato;
  font-size: 15px;
  color: var(--boulder);
  line-height: 20px;
  font-feature-settings: 'liga' 0;
`

const Controls = styled(Info)`
  display: flex;
  gap: 21px;
`

const Library = styled.span`
  color: var(--gray);
`

const ComponentName = styled.span`
  color: var(--mine-shaft);
  font-weight: 700;
`

const ComponentIcon = styled.div`
  display: flex;
  align-items: center;
`

const SlashText = styled.span`
  color: var(--mine-shaft);
`

const IconWrapper = styled.p`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 14px;
  width: 14px;
  border-radius: var(--border-radius);
  padding: 5px;
  transition: all 150ms;

  &:hover {
    cursor: pointer;
    background-color: var(--gallery);
  }
`

const GridIcon = styled.img``

const VerticalLine = styled.div`
  border-right: 1px solid transparent;
  min-height: 24px;
  margin: 0 16px 0 11px;
  background-color: #dadada;
`

export function Header(): JSX.Element {
  return (
    <Wrapper>
      <Info>
        <ComponentIcon>
          <Tooltip text="Open dashboard">
            <IconWrapper>
              <GridIcon src="/assets/icons/layout-medium-tile-outline.svg" />
            </IconWrapper>
          </Tooltip>
        </ComponentIcon>
        <VerticalLine />
        <Library>Material UI&nbsp;</Library>
        <SlashText>/</SlashText>
        <ComponentName>&nbsp;Button</ComponentName>
      </Info>

      <Controls>
        <Button variant="cancel">Discard changes</Button>
        <Button compact={true}>Save changes</Button>
      </Controls>
    </Wrapper>
  )
}
