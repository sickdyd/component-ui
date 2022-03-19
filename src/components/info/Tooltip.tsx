import styled from '@emotion/styled'
import { ReactNode, useEffect, useRef, useState } from 'react'

const Wrapper = styled.span<{ position?: Position; visible: boolean; leftEdge: boolean }>`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  position: fixed;
  top: ${({ position }) => (position ? `${position.top}px` : 'auto')};
  left: ${({ position }) => (position ? `${position.left}px` : 'auto')};
  color: rgb(205, 205, 205) !important;
  background-color: rgb(36, 36, 36);
  border-radius: var(--border-radius);
  font-size: 12px;
  padding: 0.2rem 0.5rem;
  text-align: center;

  &:before {
    position: absolute;
    height: 0;
    width: 0;
    left: ${({ leftEdge }) => (leftEdge ? '4px' : 'calc(50% - 5px)')};
    top: -10px;
    content: ' ';
    border: 5px solid transparent;
    border-bottom-color: rgb(36, 36, 36);
  }
`

const Elements = styled.div``

type Position = {
  left: number
  top: number
}

export function Tooltip({
  text,
  children
}: {
  text?: string
  children: ReactNode
}): JSX.Element | null {
  const [position, setPosition] = useState<Position>()
  const [visible, setVisible] = useState<boolean>(false)
  const [leftEdge, setLeftEdge] = useState<boolean>(false)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (elementRef?.current && tooltipRef?.current) {
      const { current: element } = elementRef
      const {
        left: elementLeft,
        top: elementTop,
        width: elementWidth,
        height: elementHeight
      } = element.getBoundingClientRect()

      const { current: tooltipElement } = tooltipRef
      const { width: tooltipWidth } = tooltipElement.getBoundingClientRect()

      const computedLeft = elementLeft - tooltipWidth / 2 + elementWidth / 2
      let left = computedLeft

      if (computedLeft <= 11) {
        left = 11
        setLeftEdge(true)
      }

      const top = elementTop + elementHeight + 10

      setPosition({ left, top })

      const onMouseOver = () => setVisible(true)
      element.addEventListener('mouseover', onMouseOver)

      const onMouseLeave = () => setVisible(false)
      element.addEventListener('mouseleave', onMouseLeave)

      return () => {
        element.removeEventListener('mouseover', onMouseOver)
        element.removeEventListener('mouseleave', onMouseLeave)
      }
    }
  }, [visible])

  return (
    <>
      {text && (
        <Wrapper ref={tooltipRef} position={position} visible={visible} leftEdge={leftEdge}>
          {text}
        </Wrapper>
      )}
      <Elements ref={elementRef}>{children}</Elements>
    </>
  )
}
