import styled from '@emotion/styled'
import { EditProperty } from 'components/property/EditProperty'
import { useAppSelector } from 'redux/hooks'

const Wrapper = styled.div``

export function PropertyList(): JSX.Element {
  const properties = useAppSelector((state) => state.componentSlice.properties)

  return (
    <Wrapper>
      {properties.map((property, index) => (
        <EditProperty key={index} propertyData={property} index={index} />
      ))}
    </Wrapper>
  )
}
