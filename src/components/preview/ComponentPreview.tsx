import styled from '@emotion/styled'
import GearIcon from '@mui/icons-material/Settings'
import Button from '@mui/material/Button'
import ToggleVisibility from 'components/icons/ToggleVisibility'
import { createElement, useState } from 'react'
import { useAppSelector } from 'redux/hooks'

const Wrapper = styled.div`
  margin-bottom: 4rem;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`

const StyledGearIcon = styled(GearIcon)`
  color: var(--grey);
  font-size: var(--icon-size);

  &:hover {
    cursor: pointer;
  }
`

const getPropsAndChildren = (properties: Property[] = []): any => {
  const props = {} as any
  let children = null

  properties.forEach((property) => {
    const formattedPropertyName = property.propertyName.toLowerCase()

    if (property.visible) {
      if (
        formattedPropertyName === 'children' &&
        property.propertyType.type === 'node' &&
        property.propertyType.defaultValue &&
        property.propertyType.propertyControl
      ) {
        children = createElement(
          property.propertyType.propertyControl,
          [],
          property.propertyType.defaultValue
        )
      } else if (property.propertyType.defaultValue) {
        property.propertyType.defaultValue &&
          (props[property.propertyName.toLowerCase()] = property.propertyType.defaultValue)
      }
    }
  })

  return { props, children }
}

export default function ComponentPreview(): JSX.Element {
  const [visible, setVisible] = useState<boolean>(true)
  const properties = useAppSelector((state) => state.componentSlice.properties)
  const { props, children } = getPropsAndChildren(properties)

  return (
    <Wrapper>
      <Heading>
        <h1>Button</h1>
        <ToggleVisibility visible={visible} onClick={() => setVisible((prev) => !prev)} />
        <StyledGearIcon />
      </Heading>
      <h2>Component Preview</h2>
      <Button {...props}>{children || 'SIGN UP'}</Button>
    </Wrapper>
  )
}
