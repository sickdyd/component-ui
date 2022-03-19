import Icon from 'components/icons/Icon'
import IconWrapper from 'components/icons/IconWrapper'
import { Tooltip } from 'components/info/Tooltip'

export default function DeleteProperty({ onClick }: { onClick: () => void }): JSX.Element {
  return (
    <Tooltip text="Delete property">
      <IconWrapper onClick={onClick}>
        <Icon src="/assets/icons/trash.svg" alt="Trash icon" />
      </IconWrapper>
    </Tooltip>
  )
}
