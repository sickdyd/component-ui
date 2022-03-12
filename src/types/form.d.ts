interface BaseProps {
  suggestion?: string
}

interface InputProps extends BaseProps {
  onChange?: (event: ChangeEventHandler<HTMLSelectElement | HTMLInputElement>) => void
}

interface DropDownProps extends InputProps {
  elements: string[]
}
