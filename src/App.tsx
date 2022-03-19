import styled from '@emotion/styled'
import { Header } from 'components/layout/Header'
import ComponentPreview from 'components/preview/ComponentPreview'
import AddPropertyMenu from 'components/property/AddPropertyMenu'
import PropertyList from 'components/property/PropertyList'

const Wrapper = styled.div`
  max-width: 1182px;
  border-right: 1px solid var(--mercury);
`

const Main = styled.main`
  padding-left: 43px;
  padding-top: 45px;
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
