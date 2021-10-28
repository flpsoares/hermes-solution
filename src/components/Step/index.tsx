import React, { useMemo } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { Container } from './style'

interface StepProps {
  stepNumber: string
  content: string
  isAbsolute: boolean
  top?: string
  right?: string
  bottom?: string
  left?: string
  responsive?: Record<number, Partial<Omit<StepProps, 'responsive'>>>
}

export const Step: React.FC<StepProps> = ({ ...props }) => {
  const { screenWidth } = useWindowSize()

  const responsiveProps = useMemo<Omit<StepProps, 'responsive'>>(() => {
    if (!props.responsive) return props

    for (const size of Object.keys(props.responsive)) {
      if (screenWidth <= Number(size)) {
        return { ...props, ...props.responsive[size] }
      }
    }

    return props
  }, [screenWidth, props])

  return (
    <Container
      isAbsolute={responsiveProps.isAbsolute}
      top={responsiveProps.top}
      right={responsiveProps.right}
      bottom={responsiveProps.bottom}
      left={responsiveProps.left}
    >
      <h1>Passo {responsiveProps.stepNumber}</h1>
      <div></div>
      <p>{responsiveProps.content}</p>
    </Container>
  )
}
