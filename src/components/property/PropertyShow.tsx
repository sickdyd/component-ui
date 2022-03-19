import styled from '@emotion/styled'
import FormGroup from 'components/form/FormGroup'
import DeleteProperty from 'components/icons/DeleteProperty'
import ExpandButton from 'components/icons/ExpandButton'
import ToggleVisibility from 'components/icons/ToggleVisibility'
import PropertyForm from 'components/property/PropertyForm'
import PropertyTypes from 'components/property/PropertyTypes'
import { useState } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { deleteProperty, updateProperty } from 'redux/slices/componentSlice'

const Wrapper = styled.div<{ visible: boolean }>`
  position: relative;
  display: flex;
  padding: 1.25rem 1rem;
  border-bottom: 1px solid var(--mercury);

  div,
  span,
  input,
  button,
  label,
  textarea,
  select {
    color: ${({ visible }) => (visible ? 'inherit' : 'var(--mercury)')};
  }
`

const PropertyName = styled.div`
  display: flex;
  align-items: flex-start;
  white-space: nowrap;
  gap: 1rem;
  width: 30%;
  min-width: 200px;
  font-size: 1.1rem;
`

const FormFields = styled(FormGroup)`
  position: relative;
  width: 60%;
`

export default function PropertyShow({
  index,
  property
}: {
  index: number
  property: Property
}): JSX.Element {
  const dispatch = useAppDispatch()
  const [expanded, setExpanded] = useState(false)

  const onChangeHandler = (property: Property) => {
    dispatch(updateProperty({ index, property }))
  }

  return (
    <Wrapper visible={property.visible}>
      <ExpandButton expanded={expanded} onClick={() => setExpanded((prev) => !prev)} />
      <PropertyName>
        {property.propertyName || 'Type a name...'}
        <ToggleVisibility
          tooltip={property.visible ? 'Hide property' : 'Show property'}
          visible={property.visible}
          onClick={() => onChangeHandler({ ...property, visible: !property.visible })}
        />
        <DeleteProperty onClick={() => dispatch(deleteProperty(index))} />
      </PropertyName>
      {expanded && (
        <FormFields>
          <PropertyForm onChangeHandler={onChangeHandler} property={property} />
          <PropertyTypes property={property} onChangeHandler={onChangeHandler} />
        </FormFields>
      )}
    </Wrapper>
  )
}
