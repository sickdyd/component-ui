import styled from '@emotion/styled'
import Button from 'components/form/Button'
import PropertyForm from 'components/property/PropertyForm'
import PropertyTypes from 'components/property/PropertyTypes'
import { useState } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { addProperty, showPropertyForm } from 'redux/slices/componentSlice'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 1rem;
  border-bottom: 1px solid var(--light-grey);
`

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin: 1rem 0;
`

const initialData: Property = {
  propertyName: '',
  displayName: '',
  description: '',
  propertyType: { type: 'one of', propertyControl: '', options: '', defaultValue: '' },
  visible: true
}

export default function PropertyCreate(): JSX.Element {
  const dispatch = useAppDispatch()
  const [property, setProperty] = useState<Property>(initialData)

  const handleAddProperty = () => {
    dispatch(addProperty(property))
    dispatch(showPropertyForm(false))
  }

  return (
    <Wrapper>
      <PropertyForm onChangeHandler={setProperty} property={property} />
      <PropertyTypes onChangeHandler={setProperty} property={property} />
      <ControlsWrapper>
        <Button variant="cancel" onClick={() => dispatch(showPropertyForm(false))}>
          Cancel
        </Button>
        <Button onClick={handleAddProperty}>Add</Button>
      </ControlsWrapper>
    </Wrapper>
  )
}
