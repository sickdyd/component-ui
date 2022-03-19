import styled from '@emotion/styled'

const Select = styled.select`
  border: unset;
  color: var(--scorpion);
  font-size: 14px;
  border-bottom: 1px solid var(--mercury);
  width: 118px;
  height: 24px;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  background-position: 100% center !important;
  background: url('/assets/icons/chevron.svg') no-repeat;

  &:focus {
    outline: none;
  }
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
