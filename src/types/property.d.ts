type PropertyType = 'one of' | 'node' | 'boolean'
type PropertyControl = '' | 'select' | 'textarea'

interface Property {
  propertyName: string
  displayName: string
  description: string
  propertyType: PropertyType
  propertyControl?: PropertyControl
  options?: string
  defaultValue: string | boolean
}
