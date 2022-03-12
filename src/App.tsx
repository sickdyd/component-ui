import styled from '@emotion/styled'
import { AddProperty } from 'components/property/AddProperty'

const Wrapper = styled.div`
  padding: 2rem;
`

export default function App() {
  return (
    <Wrapper>
      <header></header>
      <main>
        <AddProperty />
      </main>
      <footer></footer>
    </Wrapper>
  )
}
