import DropDown from 'components/form/base/DropDown'
import TextArea from 'components/form/base/TextArea'
import FormElement from 'components/form/FormElement'

export default function OneOfOptions(): JSX.Element {
  return (
    <>
      <FormElement label="Property control">
        <DropDown elements={[{ name: 'select', value: 'select' }]} />
      </FormElement>
      <FormElement label="Options" caption="list options separated by comma" vertical>
        <TextArea />
      </FormElement>
      <FormElement label="Default value">
        <DropDown elements={[{ name: 'primary', value: 'primary' }]} />
      </FormElement>
    </>
  )
}
