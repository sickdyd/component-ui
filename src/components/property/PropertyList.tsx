import PropertyShow from 'components/property/PropertyShow'
import { useAppSelector } from 'redux/hooks'

export default function PropertyList(): JSX.Element {
  const properties = useAppSelector((state) => state.componentSlice.properties)

  return (
    <>
      {properties.map((property, index) => (
        <PropertyShow key={index} property={property} index={index} />
      ))}
    </>
  )
}
