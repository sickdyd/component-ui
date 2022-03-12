import Switch from 'components/form/base/Switch'
import FormElement from 'components/form/FormElement'

export default function BooleanOptions(): JSX.Element {
  return (
    <FormElement label="Description">
      <Switch />
    </FormElement>
  )
}
