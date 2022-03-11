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
  elements: DropDownElement[]
}
