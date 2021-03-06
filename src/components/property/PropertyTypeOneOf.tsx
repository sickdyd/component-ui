import styled from '@emotion/styled'
import DropDown from 'components/form/DropDown'
import FormElement from 'components/form/FormElement'
import FormGroup from 'components/form/FormGroup'
import TextArea from 'components/form/TextArea'

const Wrapper = styled.div``

export const propertyControlCaption = (isNew: boolean) =>
  isNew ? (
    <>
      type of control displayed in editor's properties panel. <a href="/">Learn more</a> about
      control types
    </>
  ) : null

export default function PropertyTypeOneOf({
  property,
  onChangeHandler,
  isNew = false
}: {
  property: Property
  onChangeHandler: (property: Property) => void
  isNew: boolean
}): JSX.Element {
  const propertyType = property.propertyType as PropertyTypeOneOf

  const commaSeparatedOptions = propertyType?.options
    ? [''].concat(propertyType?.options.split(','))
    : ['']

  return (
    <Wrapper>
      <FormGroup>
        <FormElement label="Property control" caption={propertyControlCaption(isNew)}>
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
            rows={1}
            cols={50}
          />
        </FormElement>
        <FormElement label="Default value">
          <DropDown
            elements={commaSeparatedOptions}
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
