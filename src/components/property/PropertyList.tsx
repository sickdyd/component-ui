import styled from '@emotion/styled'
import { PropertyForm } from 'components/property/PropertyForm'
import { useAppSelector } from 'redux/hooks'

const Wrapper = styled.div``

export function PropertyList(): JSX.Element {
  const properties = useAppSelector((state) => state.componentSlice.properties)

  return (
    <Wrapper>
      {properties.map((property, index) => (
        <PropertyForm key={index} property={property} index={index} />
      ))}
    </Wrapper>
  )
}