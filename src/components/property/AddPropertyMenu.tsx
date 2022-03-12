import styled from '@emotion/styled'
import Button from 'components/form/base/Button'
import PropertyForm from 'components/property/PropertyForm'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { showPropertyForm } from 'redux/slices/componentSlice'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--blue);
  margin-bottom: 1rem;

  h2 {
    margin: 0;
    color: var(--black);
  }
`

export default function AddPropertyMenu(): JSX.Element {
  const dispatch = useAppDispatch()
  const displayAddProperty = useAppSelector((state) => state.componentSlice.displayAddProperty)

  return (
    <>
      <Wrapper>
        <h2>Properties</h2>+
        <Button variant="link" onClick={() => dispatch(showPropertyForm(true))}>
          Add new property
        </Button>
      </Wrapper>
      {displayAddProperty && <PropertyForm />}
    </>
  )
}
