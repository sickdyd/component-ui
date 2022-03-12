import styled from '@emotion/styled'
import ComponentPreview from 'components/preview/ComponentPreview'
import AddPropertyMenu from 'components/property/AddPropertyMenu'
import PropertyList from 'components/property/PropertyList'

const Wrapper = styled.main`
  padding: 2rem;
`

export default function App() {
  return (
    <Wrapper>
      <ComponentPreview />
      <AddPropertyMenu />
      <PropertyList />
    </Wrapper>
  )
}
