import styled from '@emotion/styled'
import Button from 'components/form/base/Button'
import DropDown from 'components/form/base/DropDown'
import Input from 'components/form/base/Input'
import Switch from 'components/form/base/Switch'
import TextArea from 'components/form/base/TextArea'
import FormElement from 'components/form/FormElement'
import { FormGroup } from 'components/form/FormGroup'
import { useEffect, useState } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { addProperty, showPropertyForm, updateProperty } from 'redux/slices/componentSlice'

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;

  a,
  a:visited,
  a:active {
    color: var(--grey);
  }
`

const PropertyName = styled.div`
  width: 40%;
`

const FormFields = styled.div`
  width: 100%;
`

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin: 1rem 0;
`

export function PropertyForm({
  index,
  property
}: {
  index?: number
  property?: Property
}): JSX.Element {
  const [propertyName, setPropertyName] = useState(property?.propertyName || '')
  const [displayName, setDisplayName] = useState(property?.displayName || '')
  const [description, setDescription] = useState(property?.description || '')
  const [propertyType, setPropertyType] = useState<PropertyType>(property?.propertyType || 'one of')
  const [propertyControl, setPropertyControl] = useState<PropertyControl>(
    property?.propertyControl || 'select'
  )
  const [defaultValue, setDefaulValue] = useState(property?.defaultValue || '')
  const [options, setOptions] = useState(property?.options || '')
  const [boolean, setBoolean] = useState<boolean>(property?.boolean || false)

  const dispatch = useAppDispatch()

  const isEditing = index !== undefined

  useEffect(() => {
    index &&
      dispatch(
        updateProperty({
          index,
          property: {
            propertyName,
            displayName,
            description,
            propertyType,
            propertyControl,
            defaultValue,
            options,
            boolean
          }
        })
      )
  }, [
    propertyName,
    displayName,
    description,
    propertyType,
    propertyControl,
    defaultValue,
    options,
    boolean,
    dispatch,
    index
  ])

  const handleAddProperty = () => {
    dispatch(
      addProperty({
        propertyName,
        displayName,
        description,
        propertyType,
        propertyControl,
        defaultValue,
        options,
        boolean
      })
    )
    dispatch(showPropertyForm(false))
  }

  const propertyTypes = [
    { name: 'one of', value: 'one of' },
    { name: 'node', value: 'node' },
    { name: 'boolean', value: 'boolean' }
  ]

  const propertyNameCaption = isEditing ? undefined : 'name of the property given in the code'
  const propertyControlCaption = isEditing ? undefined : (
    <>
      type of control displayed in editor's properties panel. <a href="/">Learn more</a> about
      control types
    </>
  )

  return (
    <Wrapper>
      {isEditing && <PropertyName>{propertyName || 'Type a name...'}</PropertyName>}
      <FormFields>
        <FormGroup>
          <FormElement label="Property name" caption={propertyNameCaption}>
            <Input value={propertyName} onChange={({ target }) => setPropertyName(target.value)} />
          </FormElement>
          <FormElement label="Display name">
            <Input value={displayName} onChange={({ target }) => setDisplayName(target.value)} />
          </FormElement>
          <FormElement label="Description" vertical>
            <TextArea value={description} onChange={({ target }) => setDescription(target.value)} />
          </FormElement>
          <FormElement label="Property type">
            <DropDown
              elements={propertyTypes}
              onChange={({ target }) => setPropertyType(target.value)}
            />
          </FormElement>
          {propertyType === 'one of' && (
            <>
              <FormElement label="Property control" caption={propertyControlCaption}>
                <DropDown
                  elements={[{ value: 'select', name: 'select' }]}
                  onChange={({ target }) => setPropertyControl(target.value)}
                />
              </FormElement>
              <FormElement label="Options" caption="list options separated by comma" vertical>
                <TextArea value={options} onChange={({ target }) => setOptions(target.value)} />
              </FormElement>
              <FormElement label="Default value">
                <DropDown
                  elements={options.split(',').map((option) => ({ value: option, name: option }))}
                  onChange={({ target }) => setDefaulValue(target.value)}
                />
              </FormElement>
            </>
          )}
          {propertyType === 'node' && (
            <>
              <FormElement label="Property control">
                <DropDown elements={[{ value: 'textarea', name: 'textarea' }]} />
              </FormElement>
              <FormElement label="Default value" vertical>
                <TextArea />
              </FormElement>
            </>
          )}
          {propertyType === 'boolean' && (
            <FormElement label="Description">
              <Switch isTrue={boolean} onClick={(isTrue) => setBoolean(isTrue)} />
            </FormElement>
          )}
        </FormGroup>
        {!isEditing && (
          <ControlsWrapper>
            <Button variant="cancel" onClick={() => dispatch(showPropertyForm(false))}>
              Cancel
            </Button>
            <Button onClick={handleAddProperty}>Add</Button>
          </ControlsWrapper>
        )}
      </FormFields>
    </Wrapper>
  )
}
