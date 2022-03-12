import styled from '@emotion/styled'

const Select = styled.select`
  border: unset;
  color: var(--dark-grey);
  font-size: 14px;
  border-bottom: 1px solid var(--light-grey);
  min-width: 100px;
`

export default function DropDown({ selected, elements, onChange }: DropDownProps): JSX.Element {
  return (
    <Select onChange={onChange}>
      {elements.map((element, index) => (
        <option key={index} value={element.value} defaultValue={selected}>
          {element.name}
        </option>
      ))}
    </Select>
  )
}
