import styled from '@emotion/styled'
import DropDown from 'components/form/DropDown'
import FormElement from 'components/form/FormElement'
import FormGroup from 'components/form/FormGroup'
import Input from 'components/form/Input'
import TextArea from 'components/form/TextArea'
import { propertyTypes } from 'components/property/PropertyTypes'

const Wrapper = styled.div`
  position: relative;
`

export default function PropertyForm({
  property,
  onChangeHandler,
  isNew = false
}: {
  property: Property
  onChangeHandler: (property: Property) => void
  isNew?: boolean
}): JSX.Element {
  const { propertyName, displayName, description } = property

  const onPropertyTypeChange = (type: string) => {
    let propertyType = {} as any

    propertyType.type = type
    propertyType.defaultValue = ''

    if (property.propertyType.type === 'one of' || property.propertyType.type === 'node') {
      propertyType.propertyControl = ''
      propertyType.options = ''
    }

    onChangeHandler({ ...property, propertyType })
  }

  return (
    <Wrapper>
      <FormGroup>
        <FormElement
          label="Property name"
          caption={isNew ? 'name of the property given in the code' : ''}
        >
          <Input
            value={propertyName}
            onChange={({ target }) => onChangeHandler({ ...property, propertyName: target.value })}
          />
        </FormElement>
        <FormElement label="Display name">
          <Input
            value={displayName}
            onChange={({ target }) => onChangeHandler({ ...property, displayName: target.value })}
          />
        </FormElement>
        <FormElement label="Description" vertical>
          <TextArea
            value={description}
            onChange={({ target }) => onChangeHandler({ ...property, description: target.value })}
          />
        </FormElement>
        <FormElement label="Property type">
          <DropDown
            elements={propertyTypes}
            selectedValue={property.propertyType.type as PropertyType}
            onChange={({ target }) => onPropertyTypeChange(target.value)}
          />
        </FormElement>
      </FormGroup>
    </Wrapper>
  )
}
