import styled from '@emotion/styled'
import Button from 'components/form/base/Button'
import DropDown from 'components/form/base/DropDown'
import Input from 'components/form/base/Input'
import Switch from 'components/form/base/Switch'
import TextArea from 'components/form/base/TextArea'
import FormElement from 'components/form/FormElement'
import { FormGroup } from 'components/form/FormGroup'
import { useState } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { addProperty, showPropertyForm } from 'redux/slices/componentSlice'

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
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

export function CreateProperty(): JSX.Element {
  const [propertyName, setPropertyName] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [description, setDescription] = useState('')
  const [propertyType, setPropertyType] = useState<PropertyType>('one of')
  const [propertyControl, setPropertyControl] = useState<PropertyControl>('textarea')
  const [defaultValue, setDefaulValue] = useState('')
  const [options, setOptions] = useState('')
  const [boolean, setBoolean] = useState<boolean>(false)

  const dispatch = useAppDispatch()

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

  return (
    <Wrapper>
      <FormFields>
        <FormGroup>
          <FormElement label="Property name" caption="name of the property given in the code">
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
              <FormElement label="Property control">
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
        <ControlsWrapper>
          <Button variant="cancel" onClick={() => dispatch(showPropertyForm(false))}>
            Cancel
          </Button>
          <Button onClick={handleAddProperty}>Add</Button>
        </ControlsWrapper>
      </FormFields>
    </Wrapper>
  )
}
