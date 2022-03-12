import styled from '@emotion/styled'
import GearIcon from '@mui/icons-material/Settings'
import Button from '@mui/material/Button'
import ToggleVisibility from 'components/property/ToggleVisibility'
import { useAppSelector } from 'redux/hooks'

const Wrapper = styled.div`
  margin-bottom: 4rem;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const StyledGearIcon = styled(GearIcon)`
  color: var(--grey);
  font-size: var(--icon-size);
`

export default function ComponentPreview(): JSX.Element {
  const properties = useAppSelector((state) => state.componentSlice.properties)

  return (
    <Wrapper>
      <Heading>
        <h1>Button</h1>
        <ToggleVisibility visible={true} onClick={() => {}} />
        <StyledGearIcon />
      </Heading>
      <h2>Component Preview</h2>
      <Button>SIGN UP</Button>
    </Wrapper>
  )
}
