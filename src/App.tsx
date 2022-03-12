import styled from '@emotion/styled'
import { AddPropertyMenu } from 'components/property/AddPropertyMenu'
import { PropertyList } from 'components/property/PropertyList'

const Wrapper = styled.div`
  padding: 2rem;
`

export default function App() {
  return (
    <Wrapper>
      <header></header>
      <main>
        <AddPropertyMenu />
        <PropertyList />
      </main>
      <footer></footer>
    </Wrapper>
  )
}
