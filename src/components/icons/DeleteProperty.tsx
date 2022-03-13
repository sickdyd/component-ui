import Delete from '@mui/icons-material/Delete'
import IconWrapper from 'components/icons/IconWrapper'
import { Tooltip } from 'components/info/Tooltip'

export default function DeleteProperty({ onClick }: { onClick: () => void }): JSX.Element {
  return (
    <Tooltip text="Delete property">
      <IconWrapper onClick={onClick}>
        <Delete />
      </IconWrapper>
    </Tooltip>
  )
}
