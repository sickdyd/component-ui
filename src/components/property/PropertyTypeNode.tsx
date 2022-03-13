import styled from '@emotion/styled'
import DropDown from 'components/form/DropDown'
import FormElement from 'components/form/FormElement'
import FormGroup from 'components/form/FormGroup'
import TextArea from 'components/form/TextArea'

const Wrapper = styled.div`
  position: relative;
  margin-top: 1rem;
`

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
        <FormElement
          label="Property control"
          caption={
            isNew
              ? "type of control displayed in editor's properties panel. Learn more about control types"
              : ''
          }
        >
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
        <FormElement label="Default value">
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
