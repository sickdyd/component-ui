interface BaseProps {
  suggestion?: string
}

interface InputProps extends BaseProps {
  onChange?: (event: ChangeEventHandler<HTMLSelectElement | HTMLInputElement>) => void
}

type DropDownElement = {
  value: string
  name: string
}

interface DropDownProps extends InputProps {
  selected?: string
  elements: DropDownElement[]
}
