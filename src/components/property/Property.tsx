import styled from '@emotion/styled'
import DropDown from 'components/form/base/DropDown'
import Input from 'components/form/base/Input'
import TextArea from 'components/form/base/TextArea'
import FormElement from 'components/form/FormElement'
import { FormGroup } from 'components/form/FormGroup'
import BooleanOptions from 'components/property/BooleanOptions'
import NodeOptions from 'components/property/NodeOptions'
import OneOfOptions from 'components/property/OneOfOptions'
import { startCase } from 'lodash'
import { ChangeEvent, useState } from 'react'

const Wrapper = styled.div`
  display: flex;
  padding: 1rem;
`

const Name = styled.span`
  width: 30%;
`

const Content = styled.div`
  width: 70%;
`

enum PropertyType {
  Node = 'Node',
  OneOf = 'OneOf',
  Boolean = 'Boolean'
}

const getOptions = (propertyType: string) => {
  switch (propertyType) {
    case PropertyType.OneOf:
      return <OneOfOptions />
    case PropertyType.Node:
      return <NodeOptions />
    case PropertyType.Boolean:
      return <BooleanOptions />
    default:
      return null
  }
}

export function Property(): JSX.Element {
  const [propertyName, setPropertyName] = useState<string>('')
  const [displayName, setDisplayName] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [propertyType, setPropertyType] = useState<PropertyType>(PropertyType.OneOf)

  const handlePropertyTypeChange = ({ target }: ChangeEvent<HTMLSelectElement>) => {
    setPropertyType(target.value as PropertyType)
  }

  return (
    <Wrapper>
      <Name>{propertyName}</Name>
      <Content>
        <FormGroup>
          <FormElement label="Property name" caption="asd">
            <Input value={propertyName} onChange={({ target }) => setPropertyName(target.value)} />
          </FormElement>
          <FormElement label="Display name">
            <Input value={displayName} onChange={({ target }) => setDisplayName(target.value)} />
          </FormElement>
          <FormElement label="Description" vertical>
            <TextArea value={description} onChange={({ target }) => setDescription(target.value)} />
          </FormElement>
          <FormElement label="Property type">
            <DropDown
              onChange={handlePropertyTypeChange}
              elements={Object.keys(PropertyType).map((value) => ({
                value,
                name: startCase(value).toLowerCase()
              }))}
            />
          </FormElement>
          {getOptions(propertyType)}
        </FormGroup>
      </Content>
    </Wrapper>
  )
}
