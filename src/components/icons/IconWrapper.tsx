import styled from '@emotion/styled'

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius);
  transition: all 150ms;
  user-select: none;

  &:hover {
    cursor: pointer;
    background-color: var(--mercury);
  }
`

export default IconWrapper
