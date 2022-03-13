type PropertyType = 'one of' | 'node' | 'boolean'
type PropertyControlType = '' | 'select' | 'textarea' | 'p'
type PropertyValues = 'propertyName' | 'displayName' | 'description' | 'visible'

interface Property {
  propertyName: string
  displayName: string
  description: string
  propertyType: PropertyControl
  visible: boolean
}

type PropertyTypeOneOf = {
  type: 'one of'
  propertyControl: PropertyControlType
  options: string
  defaultValue: string
}

type PropertyTypeNode = {
  type: 'node'
  propertyControl: PropertyControlType
  defaultValue: string
}

type PropertyTypeBoolean = {
  type: 'boolean'
  defaultValue: boolean
}

type PropertyControl = PropertyTypeOneOf | PropertyTypeNode | PropertyTypeBoolean
