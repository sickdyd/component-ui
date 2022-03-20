import styled from '@emotion/styled'
import Button from '@mui/material/Button'
import Icon from 'components/icons/Icon'
import IconWrapper from 'components/icons/IconWrapper'
import ToggleVisibility from 'components/icons/ToggleVisibility'
import { Tooltip } from 'components/info/Tooltip'
import camelCase from 'lodash/camelCase'
import { createElement, useState } from 'react'
import { useAppSelector } from 'redux/hooks'

const Wrapper = styled.div`
  margin-bottom: 78.5px;
  max-width: 300px;
`

const Heading = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 29.5px;
`

const HeadingText = styled.h1`
  margin: 0;
  font-size: 36px;
  color: var(--mine-shaft);
  line-height: 40px;
  margin-right: 7.5px;
`

const SubHeading = styled.h2`
  margin-bottom: 18px;
`

const getPropsAndChildren = (properties: Property[] = []): any => {
  const props = {} as any
  let children = null

  properties.forEach((property) => {
    const formattedPropertyName = camelCase(property.propertyName)

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
      } else if (formattedPropertyName === 'mini') {
        property.propertyType.defaultValue && (props['mini'] = '')
      } else if (property.propertyType.defaultValue) {
        property.propertyType.defaultValue &&
          (props[formattedPropertyName] = property.propertyType.defaultValue)
      }
    }
  })

  console.log(props)

  return { props, children }
}

export default function ComponentPreview(): JSX.Element {
  const [visible, setVisible] = useState<boolean>(true)
  const properties = useAppSelector((state) => state.componentSlice.properties)
  const { props, children } = getPropsAndChildren(properties)

  return (
    <Wrapper>
      <Heading>
        <HeadingText>Button</HeadingText>
        <ToggleVisibility
          visible={visible}
          tooltip="Toggle component visibility in library"
          onClick={() => setVisible((prev) => !prev)}
        />
        <Tooltip text="Component settings">
          <IconWrapper>
            <Icon src="/assets/icons/gear.svg" alt="Gear icon" />
          </IconWrapper>
        </Tooltip>
      </Heading>
      <SubHeading>Component Preview</SubHeading>
      <Button {...props}>{children}</Button>
    </Wrapper>
  )
}
