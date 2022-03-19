import styled from '@emotion/styled'
import PropertyTypeBoolean from 'components/property/PropertyTypeBoolean'
import PropertyTypeNode from 'components/property/PropertyTypeNode'
import PropertyTypeOneOf from 'components/property/PropertyTypeOneOf'

const Wrapper = styled.div<{ isNew: boolean }>`
  position: relative;
  max-width: 513px;
  margin-top: ${({ isNew }) => (isNew ? '10px' : '0')};
`

enum PropertyType {
  'one of' = 'one of',
  'node' = 'node',
  'boolean' = 'boolean'
}

export const propertyTypes = Object.keys(PropertyType).map((key) => key)

export default function PropertyTypes({
  property,
  onChangeHandler,
  isNew = false
}: {
  property: Property
  onChangeHandler: (property: Property) => void
  isNew?: boolean
}): JSX.Element {
  return (
    <Wrapper isNew={isNew}>
      {property.propertyType.type === 'one of' && (
        <PropertyTypeOneOf property={property} onChangeHandler={onChangeHandler} isNew={isNew} />
      )}
      {property.propertyType.type === 'node' && (
        <PropertyTypeNode property={property} onChangeHandler={onChangeHandler} isNew={isNew} />
      )}
      {property.propertyType.type === 'boolean' && (
        <PropertyTypeBoolean property={property} onChangeHandler={onChangeHandler} />
      )}
    </Wrapper>
  )
}
