import styled from '@emotion/styled'
import Icon from 'components/icons/Icon'
import IconWrapper from 'components/icons/IconWrapper'
import { Tooltip } from 'components/info/Tooltip'
import { useRef } from 'react'

const StyledIconWrapper = styled(IconWrapper)`
  margin-top: 2px;
  margin-left: 1px;
`

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
      <StyledIconWrapper ref={ref} onClick={onClick}>
        <Icon
          src={
            visible ? '/assets/icons/visibility-visible.svg' : '/assets/icons/visibility-hidden.svg'
          }
        />
      </StyledIconWrapper>
    </Tooltip>
  )
}
