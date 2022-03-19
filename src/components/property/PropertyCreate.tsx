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
  padding: 12px 20px 7px 20px;
  border-bottom: 1px solid var(--mercury);
  width: 820px;
`

const ControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  margin: 10px 0;
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
      <PropertyForm onChangeHandler={setProperty} property={property} isNew />
      <PropertyTypes onChangeHandler={setProperty} property={property} isNew />
      <ControlsWrapper>
        <Button variant="cancel" onClick={() => dispatch(showPropertyForm(false))}>
          Cancel
        </Button>
        <Button onClick={handleAddProperty}>Add</Button>
      </ControlsWrapper>
    </Wrapper>
  )
}
