import styled from '@emotion/styled'
import DropDown from 'components/form/DropDown'
import FormElement from 'components/form/FormElement'
import FormGroup from 'components/form/FormGroup'
import TextArea from 'components/form/TextArea'

const Wrapper = styled.div`
  position: relative;
  margin-top: 1rem;
`

export default function PropertyTypeOneOf({
  property,
  onChangeHandler
}: {
  property: Property
  onChangeHandler: (property: Property) => void
}): JSX.Element {
  const propertyType = property.propertyType as PropertyTypeOneOf

  return (
    <Wrapper>
      <FormGroup>
        <FormElement label="Property control">
          <DropDown
            elements={['', 'select']}
            selectedValue={propertyType.propertyControl}
            onChange={({ target }) =>
              onChangeHandler({
                ...property,
                propertyType: { ...propertyType, propertyControl: target.value }
              })
            }
          />
        </FormElement>
        <FormElement label="Options" caption="list options separated by comma" vertical>
          <TextArea
            value={propertyType.options}
            onChange={({ target }) =>
              onChangeHandler({
                ...property,
                propertyType: { ...propertyType, options: target.value }
              })
            }
          />
        </FormElement>
        <FormElement label="Default value">
          <DropDown
            elements={[''].concat(propertyType.options.split(','))}
            selectedValue={propertyType.defaultValue}
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
