import styled, { css, keyframes } from 'styled-components'
import { FloatImageProps } from '../../@types/floatimage'

interface ContainerProps {
  top?: string
  right?: string
  bottom?: string
  left?: string
  rotate?: string
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

  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
`

export const Image = styled.img<FloatImageProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  filter: brightness(${(props) => props.brightness});

  animation: ${(props) =>
    css`
      ${animations[props.animation]} 1.5s infinite
    `};
`