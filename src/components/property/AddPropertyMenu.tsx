import styled from '@emotion/styled'
import Button from 'components/form/Button'
import Icon from 'components/icons/Icon'
import PropertyCreate from 'components/property/PropertyCreate'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { showPropertyForm } from 'redux/slices/componentSlice'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--blue-ribbon);
  margin-bottom: 1rem;
`

const Heading = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  color: var(--mine-shaft);
`

const PlusIcon = styled(Icon)`
  width: 8px;
  height: 9px;
  margin: -1px 5px 0 10px;
`

const StyledLinkButton = styled(Button)`
  margin-top: 0px;
`

export default function AddPropertyMenu(): JSX.Element {
  const dispatch = useAppDispatch()
  const displayAddProperty = useAppSelector((state) => state.componentSlice.displayAddProperty)

  return (
    <>
      <Wrapper>
        <Heading>Properties</Heading>
        <PlusIcon src="/assets/icons/plus-icon.svg" alt="Plus icon" />
        <StyledLinkButton variant="link" onClick={() => dispatch(showPropertyForm(true))}>
          Add new property
        </StyledLinkButton>
      </Wrapper>
      {displayAddProperty && <PropertyCreate />}
    </>
  )
}
