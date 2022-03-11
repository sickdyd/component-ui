import DropDown from 'components/form/base/DropDown'
import TextArea from 'components/form/base/TextArea'
import FormElement from 'components/form/FormElement'

export default function NodeOptions(): JSX.Element {
  return (
    <>
      <FormElement label="Property control">
        <DropDown elements={[{ name: 'option1', value: 'option1' }]} />
      </FormElement>
      <FormElement label="Description" vertical>
        <TextArea />
      </FormElement>
    </>
  )
}
