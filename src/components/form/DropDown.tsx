import styled from '@emotion/styled'

const Select = styled.select`
  border: unset;
  color: var(--scorpion);
  font-size: 14px;
  border-bottom: 1px solid var(--mercury);
  min-width: 100px;
`

export default function DropDown({
  selectedValue,
  elements,
  onChange
}: DropDownProps): JSX.Element {
  return (
    <Select onChange={onChange} defaultValue={selectedValue}>
      {elements.map((element, index) => (
        <option key={index} value={element}>
          {element}
        </option>
      ))}
    </Select>
  )
}
