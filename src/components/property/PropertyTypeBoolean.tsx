import styled from '@emotion/styled'
import FormElement from 'components/form/FormElement'
import FormGroup from 'components/form/FormGroup'
import Switch from 'components/form/Switch'

const Wrapper = styled.div`
  position: relative;
  margin-top: 1rem;
`

export default function PropertyTypeBoolean({
  property,
  onChangeHandler
}: {
  property: Property
  onChangeHandler: (property: Property) => void
}): JSX.Element {
  const propertyControl = property.propertyType as PropertyTypeBoolean

  return (
    <Wrapper>
      <FormGroup>
        <FormElement label="Default value">
          <Switch
            isTrue={propertyControl.defaultValue}
            onClick={(isTrue: boolean) =>
              onChangeHandler({
                ...property,
                propertyType: { ...propertyControl, defaultValue: isTrue }
              })
            }
          />
        </FormElement>
      </FormGroup>
    </Wrapper>
  )
}
