import GearIcon from '@mui/icons-material/Settings'
import IconWrapper from 'components/icons/IconWrapper'
import { Tooltip } from 'components/info/Tooltip'

export default function Settings({ onClick }: { onClick: () => void }): JSX.Element {
  return (
    <Tooltip text="Component settings">
      <IconWrapper onClick={onClick}>
        <GearIcon />
      </IconWrapper>
    </Tooltip>
  )
}
