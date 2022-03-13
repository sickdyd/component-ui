import styled from '@emotion/styled'

const IconWrapper = styled.div`
  padding: 0 0.2rem;
  transition: all 200ms;
  border-radius: var(--border-radius);

  &:hover {
    cursor: pointer;
    background-color: var(--light-grey);
  }

  svg {
    font-size: var(--icon-size);
    color: var(--dark-grey);
  }
`

export default IconWrapper
