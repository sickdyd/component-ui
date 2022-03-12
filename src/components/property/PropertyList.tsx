import styled from '@emotion/styled'
import { useAppSelector } from 'redux/hooks'

const Wrapper = styled.div``

export function PropertyList(): JSX.Element {
  const properties = useAppSelector((state) => state.componentSlice.properties)

  return <Wrapper></Wrapper>
}
