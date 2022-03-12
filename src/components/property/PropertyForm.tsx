import styled from '@emotion/styled'
import Button from 'components/form/base/Button'
import DropDown from 'components/form/base/DropDown'
import Input from 'components/form/base/Input'
import Switch from 'components/form/base/Switch'
import TextArea from 'components/form/base/TextArea'
import FormElement from 'components/form/FormElement'
import FormGroup from 'components/form/FormGroup'
import DeleteProperty from 'components/property/DeleteProperty'
import ExpandButton from 'components/property/ExpandButton'
import ToggleVisibility from 'components/property/ToggleVisibility'
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

const initialData: Property = {
  propertyName: '',
  displayName: '',
  description: '',
  propertyType: 'one of',
  propertyControl: 'select',
  options: '',
  defaultValue: '',
  visible: true
}

export default function PropertyForm({
  index,
  propertyData
}: {
  index?: number
  propertyData?: Property
}): JSX.Element {
  const isEditing = index !== undefined
  const [property, setProperty] = useState<Property>(propertyData || initialData)
  const [expanded, setExpanded] = useState<boolean>(!isEditing)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (index) {
      dispatch(updateProperty({ index, property }))
    }
  }, [property, dispatch, index])

  const handleAddProperty = () => {
    dispatch(addProperty(property))
    dispatch(showPropertyForm(false))
  }

  const propertyTypes = ['one of', 'node', 'boolean']

  const propertyNameCaption = isEditing ? undefined : 'name of the property given in the code'
  const propertyControlCaption = isEditing ? undefined : (
    <>
      type of control displayed in editor's properties panel. <a href="/">Learn more</a> about
      control types
    </>
  )

  return (
    <Wrapper visible={property.visible}>
      {isEditing && (
        <PropertyName>
          {property.propertyName || 'Type a name...'}
          <ToggleVisibility
            visible={property.visible}
            onClick={() => setProperty((prev) => ({ ...prev, visible: !prev.visible }))}
          />
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
                  value={property.propertyName}
                  onChange={({ target }) =>
                    setProperty((prev) => ({ ...prev, propertyName: target.value }))
                  }
                />
              </FormElement>
              <FormElement label="Display name">
                <Input
                  value={property.displayName}
                  onChange={({ target }) =>
                    setProperty((prev) => ({ ...prev, displayName: target.value }))
                  }
                />
              </FormElement>
              <FormElement label="Description" vertical>
                <TextArea
                  value={property.description}
                  onChange={({ target }) =>
                    setProperty((prev) => ({ ...prev, description: target.value }))
                  }
                />
              </FormElement>
              <FormElement label="Property type">
                <DropDown
                  elements={propertyTypes}
                  onChange={({ target }) =>
                    setProperty((prev) => ({ ...prev, propertyType: target.value }))
                  }
                />
              </FormElement>
              {property.propertyType === 'one of' && (
                <>
                  <FormElement label="Property control" caption={propertyControlCaption}>
                    <DropDown
                      elements={['select']}
                      onChange={({ target }) =>
                        setProperty((prev) => ({ ...prev, propertyControl: target.value }))
                      }
                    />
                  </FormElement>
                  <FormElement label="Options" caption="list options separated by comma" vertical>
                    <TextArea
                      value={property.options}
                      onChange={({ target }) =>
                        setProperty((prev) => ({ ...prev, options: target.value }))
                      }
                    />
                  </FormElement>
                  <FormElement label="Default value">
                    <DropDown
                      elements={
                        property.options ? property.options.split(',').map((option) => option) : []
                      }
                      onChange={({ target }) =>
                        setProperty((prev) => ({ ...prev, defaultValue: target.value }))
                      }
                    />
                  </FormElement>
                </>
              )}
              {property.propertyType === 'node' && (
                <>
                  <FormElement label="Property control">
                    <DropDown
                      elements={['textarea']}
                      onChange={({ target }) =>
                        setProperty((prev) => ({ ...prev, propertyControl: target.value }))
                      }
                    />
                  </FormElement>
                  <FormElement label="Default value" vertical>
                    <TextArea
                      value={typeof property.defaultValue === 'string' ? property.defaultValue : ''}
                      onChange={({ target }) =>
                        setProperty((prev) => ({ ...prev, defaultValue: target.value }))
                      }
                    />
                  </FormElement>
                </>
              )}
              {property.propertyType === 'boolean' && (
                <FormElement label="Default value">
                  <Switch
                    isTrue={property.boolean || true}
                    onClick={(isTrue) => setProperty((prev) => ({ ...prev, boolean: isTrue }))}
                  />
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
