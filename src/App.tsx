import styled from '@emotion/styled'
import { Header } from 'components/layout/Header'
import ComponentPreview from 'components/preview/ComponentPreview'
import AddPropertyMenu from 'components/property/AddPropertyMenu'
import PropertyList from 'components/property/PropertyList'

const Wrapper = styled.div``

const Main = styled.main`
  padding: 2rem;
`

export default function App() {
  return (
    <Wrapper>
      <Header />
      <Main>
        <ComponentPreview />
        <AddPropertyMenu />
        <PropertyList />
      </Main>
    </Wrapper>
  )
}
