import styled from '@emotion/styled'
import Caption from 'components/form/Caption'
import Label from 'components/form/Label'
import { ReactNode } from 'react'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--scorpion);
`

const InputWrapper = styled.div<{ vertical: boolean }>`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? 'column' : 'row')};
  align-items: ${({ vertical }) => (vertical ? 'auto' : 'center')};
`

export default function FormElement({
  label,
  caption,
  vertical = false,
  children
}: {
  label: string
  caption?: ReactNode
  vertical?: boolean
  children: ReactNode
}): JSX.Element {
  console.log(caption)

  return (
    <Wrapper>
      <InputWrapper vertical={vertical}>
        <Label>{label}</Label>
        {children}
      </InputWrapper>
      {caption && <Caption>({caption})</Caption>}
    </Wrapper>
  )
}
