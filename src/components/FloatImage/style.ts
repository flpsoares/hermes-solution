import styled, { css, keyframes } from 'styled-components'

interface ContainerProps {
  top?: string
  right?: string
  bottom?: string
  left?: string
  rotate?: string
  zindex?: string
  inverter?: string
  display?: string
}

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
  responsive?: Record<number, Partial<Omit<FloatImageProps, 'responsive'>>>
}

const vertical = keyframes`
  0% {
    transform: translateY(-2px);
  }
  50% {
    transform: translateY(2px);
  }
 
  100% {
    transform: translateY(-2px);
  }
`

const horizontal = keyframes`
  0% {
    transform: translateX(-2px);
  }
  50% {
    transform: translateX(2px);
  }
 
  100% {
    transform: translateX(-2px);
  }
`

const animations = {
  vertical,
  horizontal
}

export const Container = styled.div<ContainerProps>`
  transform: ${(props) => css`rotate(${props.rotate}deg)`};

  position: absolute;

  display: ${(props) => props.display};

  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  z-index: ${(props) => props.zindex};
`

export const Image = styled.img<FloatImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  transform: ${(props) => props.inverter};

  filter: brightness(${(props) => props.brightness});

  animation: ${(props) =>
    css`
      ${animations[props.animation]} 1.5s infinite
    `};
`
