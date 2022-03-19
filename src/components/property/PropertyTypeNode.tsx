import styled from '@emotion/styled'
import DropDown from 'components/form/DropDown'
import FormElement from 'components/form/FormElement'
import FormGroup from 'components/form/FormGroup'
import TextArea from 'components/form/TextArea'
import { propertyControlCaption } from 'components/property/PropertyTypeOneOf'

const Wrapper = styled.div``

export default function PropertyTypeNode({
  property,
  onChangeHandler,
  isNew = false
}: {
  property: Property
  onChangeHandler: (property: Property) => void
  isNew: boolean
}): JSX.Element {
  const propertyType = property.propertyType as PropertyTypeNode

  return (
    <Wrapper>
      <FormGroup>
        <FormElement label="Property control" caption={propertyControlCaption(isNew)}>
          <DropDown
            elements={['', 'textarea', 'p', 'span', 'button']}
            selectedValue={propertyType.propertyControl}
            onChange={({ target }) =>
              onChangeHandler({
                ...property,
                propertyType: { ...propertyType, propertyControl: target.value }
              })
            }
          />
        </FormElement>
        <FormElement label="Default value" vertical>
          <TextArea
            value={propertyType.defaultValue}
            onChange={({ target }) =>
              onChangeHandler({
                ...property,
                propertyType: { ...propertyType, defaultValue: target.value }
              })
            }
          />
        </FormElement>
      </FormGroup>
    </Wrapper>
  )
}
