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
  margin-bottom: 11px;
`

const Heading = styled.h2`
  margin: 0;
  margin-bottom: 5px;
  margin-top: 1px;
  color: var(--mine-shaft);
`

const PlusIcon = styled(Icon)`
  width: 8px;
  height: 9px;
  margin: -1.5px 5px 0 9.5px;
`

export default function AddPropertyMenu(): JSX.Element {
  const dispatch = useAppDispatch()
  const displayAddProperty = useAppSelector((state) => state.componentSlice.displayAddProperty)

  return (
    <>
      <Wrapper>
        <Heading>Properties</Heading>
        <PlusIcon src="/assets/icons/plus-icon.svg" alt="Plus icon" />
        <Button variant="link" onClick={() => dispatch(showPropertyForm(true))}>
          Add new property
        </Button>
      </Wrapper>
      {displayAddProperty && <PropertyCreate />}
    </>
  )
}
