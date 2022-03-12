import styled from '@emotion/styled'
import Button from 'components/form/base/Button'
import Input from 'components/form/base/Input'
import TextArea from 'components/form/base/TextArea'
import FormElement from 'components/form/FormElement'
import { FormGroup } from 'components/form/FormGroup'
import { useState } from 'react'
import { useAppDispatch } from 'redux/hooks'
import { saveProperty, showPropertyForm } from 'redux/slices/componentSlice'

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

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin: 1rem 0;
`

export function PropertyForm({ withControls = true }: { withControls?: boolean }): JSX.Element {
  const [propertyName, setPropertyName] = useState<string>('')
  const [displayName, setDisplayName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [propertyType, setPropertyType] = useState<PropertyType>('one of')
  const [defaultValue, setDefaultValue] = useState<string>('')

  const dispatch = useAppDispatch()

  const handleSaveProperty = () => {
    dispatch(saveProperty({ propertyName, displayName, description, propertyType, defaultValue }))
  }

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
            <TextArea onChange={({ target }) => setDescription(target.value)}>
              {description}
            </TextArea>
          </FormElement>
        </FormGroup>
        {withControls && (
          <ControlsWrapper>
            <Button type="cancel" onClick={() => dispatch(showPropertyForm(false))}>
              Cancel
            </Button>
            <Button onClick={handleSaveProperty}>Add</Button>
          </ControlsWrapper>
        )}
      </FormFields>
    </Wrapper>
  )
}
