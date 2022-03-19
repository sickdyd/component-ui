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
  align-items: flex-start;
  width: 820px;
  padding: 7px 20px;
  border-bottom: 1px solid var(--mercury);

  div,
  span,
  input,
  button,
  label,
  textarea,
  select {
    ${({ visible }) => !visible && 'color: var(--silver1);'};
  }
`

const PropertyNameWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 226px;
`

const PropertyName = styled.span`
  font-size: 18px;
  line-height: 32px;
  color: var(--mine-shaft);
  margin-right: 2px;
`

const FormFields = styled(FormGroup)`
  position: relative;
  margin-top: 3.5px;
  margin-bottom: 10px;
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
      <PropertyNameWrapper>
        <PropertyName>{property.propertyName || 'Type a name...'}</PropertyName>
        <ToggleVisibility
          tooltip={property.visible ? 'Hide property' : 'Show property'}
          visible={property.visible}
          onClick={() => onChangeHandler({ ...property, visible: !property.visible })}
        />
        {expanded && <DeleteProperty onClick={() => dispatch(deleteProperty(index))} />}
      </PropertyNameWrapper>
      {expanded && (
        <FormFields>
          <PropertyForm onChangeHandler={onChangeHandler} property={property} />
          <PropertyTypes property={property} onChangeHandler={onChangeHandler} />
        </FormFields>
      )}
    </Wrapper>
  )
}
