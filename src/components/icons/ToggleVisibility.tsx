import VisibilityOnIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import IconWrapper from 'components/icons/IconWrapper'
import { Tooltip } from 'components/info/Tooltip'
import { useRef } from 'react'

export default function ToggleVisibility({
  visible = true,
  onClick,
  tooltip
}: {
  visible?: boolean
  onClick: () => void
  tooltip?: string
}): JSX.Element {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <Tooltip text={tooltip}>
      <IconWrapper ref={ref} onClick={onClick}>
        {visible ? <VisibilityOnIcon /> : <VisibilityOffIcon />}
      </IconWrapper>
    </Tooltip>
  )
}
