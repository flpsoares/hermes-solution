import React from 'react'
import { FloatImageProps } from '../../@types/floatimage'
import { Container, Image } from './style'

export const FloatImage: React.FC<FloatImageProps> = (props) => {
  return (
    <Container
      top={props.top}
      right={props.right}
      bottom={props.bottom}
      left={props.left}
      rotate={props.rotate}
      zindex={props.zindex}
    >
      <Image
        src={props.src}
        width={props.width}
        height={props.height}
        animation={props.animation}
        brightness={props.brightness}
        inverter={props.inverter}
        alt="float image"
      />
    </Container>
  )
}
