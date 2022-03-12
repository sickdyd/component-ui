import styled from '@emotion/styled'
import Input from 'components/form/base/Input'
import TextArea from 'components/form/base/TextArea'
import FormElement from 'components/form/FormElement'
import { FormGroup } from 'components/form/FormGroup'
import { useEffect, useState } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { updateProperty } from 'redux/slices/componentSlice'

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
`

const PropertyName = styled.div`
  width: 30%;
`

const FormFields = styled.div`
  width: 70%;
`

export function EditProperty({
  propertyData,
  index
}: {
  propertyData: Property
  index: number
}): JSX.Element {
  const [propertyName, setPropertyName] = useState(propertyData.propertyName)
  const [displayName, setDisplayName] = useState(propertyData.displayName)
  const [description, setDescription] = useState(propertyData.description)
  const [propertyType, setPropertyType] = useState<PropertyType>(propertyData.propertyType)
  const [defaultValue, setDefaulValue] = useState(propertyData.defaultValue)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(
      updateProperty({
        index,
        property: { propertyName, displayName, description, propertyType, defaultValue }
      })
    )
  }, [propertyName, displayName, description, propertyType, defaultValue, dispatch, index])

  return (
    <Wrapper>
      <PropertyName>{propertyName || 'Type a name...'}</PropertyName>
      <FormFields>
        <FormGroup>
          <FormElement label="Property name">
            <Input value={propertyName} onChange={({ target }) => setPropertyName(target.value)} />
          </FormElement>
          <FormElement label="Display name">
            <Input value={displayName} onChange={({ target }) => setDisplayName(target.value)} />
          </FormElement>
          <FormElement label="Description" vertical>
            <TextArea value={description} onChange={({ target }) => setDescription(target.value)} />
          </FormElement>
        </FormGroup>
      </FormFields>
    </Wrapper>
  )
}
