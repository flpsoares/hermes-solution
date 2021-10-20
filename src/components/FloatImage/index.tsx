import React, { useMemo } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { Container, Image } from './style'

interface FloatImageProps {
  src: string
  width: string
  height: string
  animation?: 'horizontal' | 'vertical' | undefined
  rotate?: string
  brightness?: string
  top?: string
  right?: string
  bottom?: string
  left?: string
  zindex?: string
  inverter?: string
  display?: string
  responsive?: Record<number, Partial<Omit<FloatImageProps, 'responsive'>>>
}

export const FloatImage: React.FC<FloatImageProps> = ({ ...props }) => {
  const { screenWidth } = useWindowSize()

  const responsiveProps = useMemo<Omit<FloatImageProps, 'responsive'>>(() => {
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
      top={responsiveProps.top}
      right={responsiveProps.right}
      bottom={responsiveProps.bottom}
      left={responsiveProps.left}
      rotate={responsiveProps.rotate}
      zindex={responsiveProps.zindex}
      display={responsiveProps.display}
    >
      <Image
        src={responsiveProps.src}
        width={responsiveProps.width}
        height={responsiveProps.height}
        animation={responsiveProps.animation}
        brightness={responsiveProps.brightness}
        inverter={responsiveProps.inverter}
        alt="float image"
      />
    </Container>
  )
}
