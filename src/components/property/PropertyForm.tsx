import styled from '@emotion/styled'
import Button from 'components/form/base/Button'
import DropDown from 'components/form/base/DropDown'
import Input from 'components/form/base/Input'
import Switch from 'components/form/base/Switch'
import TextArea from 'components/form/base/TextArea'
import FormElement from 'components/form/FormElement'
import { FormGroup } from 'components/form/FormGroup'
import { DeleteProperty } from 'components/property/DeleteProperty'
import { ExpandButton } from 'components/property/ExpandButton'
import { ToggleVisibility } from 'components/property/ToggleVisibility'
import { useEffect, useState } from 'react'
import { useAppDispatch } from 'redux/hooks'
import {
  addProperty,
  deleteProperty,
  showPropertyForm,
  updateProperty
} from 'redux/slices/componentSlice'

const Wrapper = styled.div<{ visible: boolean }>`
  display: flex;
  padding: 1.25rem 1rem;
  border-bottom: 1px solid var(--light-grey);

  a,
  a:visited,
  a:active {
    color: var(--grey);
  }

  div,
  span,
  input,
  button,
  label,
  textarea,
  select {
    color: ${({ visible }) => (visible ? 'inherit' : 'var(--light-grey)')};
  }
`

const PropertyName = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 1rem;
  width: 40%;
  font-size: 1.1rem;
`

const FormFields = styled.div`
  position: relative;
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
  const [propertyName, setPropertyName] = useState<string>(property?.propertyName || '')
  const [displayName, setDisplayName] = useState<string>(property?.displayName || '')
  const [description, setDescription] = useState<string>(property?.description || '')
  const [propertyType, setPropertyType] = useState<PropertyType>(property?.propertyType || 'one of')
  const [propertyControl, setPropertyControl] = useState<PropertyControl>(
    property?.propertyControl || 'select'
  )
  const [defaultValue, setDefaulValue] = useState<string | boolean>(property?.defaultValue || '')
  const [options, setOptions] = useState<string>(property?.options || '')
  const [boolean, setBoolean] = useState<boolean>(property?.boolean || false)
  const [visible, setVisible] = useState<boolean>(property?.visible || true)

  const isEditing = index !== undefined

  const [expanded, setExpanded] = useState<boolean>(!isEditing)

  const dispatch = useAppDispatch()

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
            boolean,
            visible
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
    visible,
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
        visible,
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
    <Wrapper visible={visible}>
      {isEditing && (
        <PropertyName>
          {propertyName || 'Type a name...'}
          <ToggleVisibility visible={visible} onClick={() => setVisible((prev) => !prev)} />
          <DeleteProperty
            onClick={() => {
              dispatch(deleteProperty(index))
            }}
          />
        </PropertyName>
      )}

      <FormFields>
        {isEditing && (
          <ExpandButton expanded={expanded} onClick={() => setExpanded((prev) => !prev)} />
        )}
        {expanded && (
          <>
            <FormGroup>
              <FormElement label="Property name" caption={propertyNameCaption}>
                <Input
                  value={propertyName}
                  onChange={({ target }) => setPropertyName(target.value)}
                />
              </FormElement>
              <FormElement label="Display name">
                <Input
                  value={displayName}
                  onChange={({ target }) => setDisplayName(target.value)}
                />
              </FormElement>
              <FormElement label="Description" vertical>
                <TextArea
                  value={description}
                  onChange={({ target }) => setDescription(target.value)}
                />
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
                      elements={options
                        .split(',')
                        .map((option) => ({ value: option, name: option }))}
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
          </>
        )}
      </FormFields>
    </Wrapper>
  )
}
