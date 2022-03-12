import styled from '@emotion/styled'
import { ReactNode } from 'react'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export default function FormGroup({ children }: { children: ReactNode }): JSX.Element {
  return <Wrapper>{children}</Wrapper>
}
