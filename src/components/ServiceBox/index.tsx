import React, { useState } from 'react'
import { Container, FirstWrapper, SecondWrapper, Title, TwoButtons } from './style'
import { AnimatePresence } from 'framer-motion'
import { LinkButtons } from '../LinkButtons'

interface ServiceBoxProps {
  title: string
  content?: string
  image: string
  link: string
  secondLink?: string
}

export const ServiceBox: React.FC<ServiceBoxProps> = ({
  title,
  content,
  image,
  link,
  secondLink
}) => {
  const [firstWrapperIsVisible, setFirstWrapperIsVisible] = useState(true)
  const [secondWrapperIsVisible, setSecondWrapperIsVisible] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const makeFirstVisible = () => {
    setFirstWrapperIsVisible(true)
    setSecondWrapperIsVisible(false)
    setIsHover(false)
  }

  const makeSecondVisible = () => {
    setSecondWrapperIsVisible(true)
    setFirstWrapperIsVisible(false)
    setIsHover(true)
  }

  return (
    <Container
      isHover={isHover}
      onMouseEnter={makeSecondVisible}
      onMouseLeave={makeFirstVisible}
    >
      <AnimatePresence>
        {firstWrapperIsVisible ? (
          <FirstWrapper
            initial={secondWrapperIsVisible ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            <img src={image} alt="Serviço" />
            <Title>{title}</Title>
          </FirstWrapper>
        ) : (
          <SecondWrapper
            initial={secondWrapperIsVisible ? { opacity: 0 } : { opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          >
            {content ? (
              <>
                <span>{content}</span>
                <LinkButtons size="0" link={link} children="Saiba mais" />
              </>
            ) : (
              <TwoButtons>
                <LinkButtons
                  size="0.1rem"
                  link={link}
                  children="Saiba mais sobre segurança"
                />
                <LinkButtons
                  size="0"
                  link={secondLink}
                  children="Saiba mais sobre B.I"
                />
              </TwoButtons>
            )}
          </SecondWrapper>
        )}
      </AnimatePresence>
    </Container>
  )
}
