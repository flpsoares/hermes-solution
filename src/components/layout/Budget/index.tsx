/* eslint-disable array-callback-return */
import React, { useEffect, useState } from 'react'
import { GlobalContainer } from '../../../styles/container'
import {
  Container,
  Title,
  Info,
  Question,
  ProgressBar,
  Progress,
  Grid,
  Quiz,
  Option,
  YesOrNo,
  Other,
  OtherInput,
  SubmitButtons,
  Form,
  Input,
  Label,
  RollbackButton,
  ConcludeButton,
  Calendar,
  FinalMessage
} from './style'

import '@amir04lm26/react-modern-calendar-date-picker/lib/DatePicker.css'
import DatePicker from '@amir04lm26/react-modern-calendar-date-picker'

import questions from '../../../questions.json'
import { useBudget } from '../../../contexts/BudgetContext'
import { FloatImage } from '../../FloatImage'

interface selectedDayProps {
  day: string
  month: string
  year: string
}

export const Budget: React.FC = () => {
  const {
    step,
    progress,
    values,
    increase,
    decrease,
    setCustomerName,
    setCustomerEmail,
    setCustomerCel,
    setCustomerSocialNetwork,
    isSubmited,
    submitForm
  } = useBudget()
  const [otherIsActive, setOtherIsActive] = useState(false)
  const [calendarIsActive, setCalendarIsActive] = useState(true)
  const [otherContent, setOtherContent] = useState('')
  const [date, setDate] = useState('')

  const [selectedDay, setSelectedDay] = useState(null)

  useEffect(() => {
    if (date) {
      increase(date)
    }
  }, [date])

  const getDate = (selectedDay: selectedDayProps) => {
    setDate(`${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`)
  }

  const formatInputValue = () => {
    if (!selectedDay) return 'Selecione uma data'
    return `${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`
  }

  const myCustomLocale = {
    // months list by order
    months: [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ],

    // week days by order
    weekDays: [
      {
        name: 'Domingo', // used for accessibility
        short: 'D', // displayed at the top of days' rows
        isWeekend: true // is it a formal weekend or not?
      },
      {
        name: 'Segunda',
        short: 'S'
      },
      {
        name: 'Terça-feira',
        short: 'T'
      },
      {
        name: 'Quarta-feira',
        short: 'Q'
      },
      {
        name: 'Quinta-feira',
        short: 'Q'
      },
      {
        name: 'Sexta-feira',
        short: 'S'
      },
      {
        name: 'Sábado',
        short: 'S',
        isWeekend: true
      }
    ],

    // just play around with this number between 0 and 6
    weekStartingIndex: 0,

    // return a { year: number, month: number, day: number } object
    getToday(gregorainTodayObject) {
      return gregorainTodayObject
    },

    // return a native JavaScript date here
    toNativeDate(date) {
      return new Date(date.year, date.month - 1, date.day)
    },

    // return a number for date's month length
    getMonthLength(date) {
      return new Date(date.year, date.month, 0).getDate()
    },

    // return a transformed digit to your locale
    transformDigit(digit) {
      return digit
    },

    // texts in the date picker
    nextMonth: 'Próximo mês',
    previousMonth: 'Mês anterior',
    openMonthSelector: 'Abra o seletor de mês',
    openYearSelector: 'Abra o seletor de ano',
    closeMonthSelector: 'Feche o seletor de mês',
    closeYearSelector: 'Feche o seletor de mês',
    defaultPlaceholder: 'Selecione...',

    // for input range value
    from: 'from',
    to: 'to',

    // used for input value when multi dates are selected
    digitSeparator: ',',

    // if your provide -2 for example, year will be 2 digited
    yearLetterSkip: 0,

    // is your language rtl or ltr?
    isRtl: false
  }

  const next = (value: string) => {
    increase(value)
    setOtherIsActive(false)
    setCalendarIsActive(false)
  }

  const rollback = () => {
    decrease()
    setOtherIsActive(false)
    setCalendarIsActive(false)
    setDate(null)
  }

  const getOtherContent = () => {
    increase(otherContent)
    setOtherIsActive(false)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()

    submitForm()
  }

  return (
    <Container id="budget">
      <GlobalContainer>
        <Title>A Hermes otimiza seu tempo</Title>
        <Info>
          <p>
            Faça uma simulação rápida e calcule o{' '}
            <strong>valor do seu projeto</strong>
          </p>
          <p>
            Responda algumas perguntas abaixo e tenha uma idéia real do valor do seu
            projeto e venha conversar conosco
          </p>
        </Info>

        {!isSubmited ? (
          <Quiz onSubmit={handleSubmit}>
            {questions.map((q, index) => {
              if (step === q.id) {
                return <Question key={`question1${index}`}>{q.question}</Question>
              }
            })}
            {step < 7 ? (
              questions.map((q, index) => {
                if (step === q.id && q.hasOption) {
                  return (
                    <div key={`option1${index}`}>
                      {!otherIsActive ? (
                        <Grid>
                          {q.options.map((option, index) => (
                            <Option
                              onClick={() => next(option)}
                              key={`option2${index}`}
                            >
                              {option}
                            </Option>
                          ))}
                          {q.hasOther && (
                            <Option onClick={() => setOtherIsActive(true)}>
                              Outro
                            </Option>
                          )}
                        </Grid>
                      ) : (
                        <Other>
                          <div>
                            <p>Outro: </p>
                            <OtherInput
                              onChange={(e) => setOtherContent(e.target.value)}
                            />
                          </div>
                          <div>
                            <Option onClick={getOtherContent}>Enviar</Option>
                            <Option onClick={() => setOtherIsActive(false)}>
                              Voltar
                            </Option>
                          </div>
                        </Other>
                      )}
                    </div>
                  )
                }
                if (step === q.id && !q.hasOption) {
                  if (!calendarIsActive) {
                    return (
                      <YesOrNo>
                        <Option
                          onClick={() =>
                            step !== 6 ? next('Sim') : setCalendarIsActive(true)
                          }
                        >
                          Sim
                        </Option>
                        <Option onClick={() => next('Não')}>Não</Option>
                      </YesOrNo>
                    )
                  } else {
                    return (
                      <Calendar>
                        <DatePicker
                          value={selectedDay}
                          onChange={setSelectedDay}
                          inputPlaceholder="Selecione uma data"
                          formatInputText={formatInputValue}
                          inputClassName="calendar-input"
                          calendarClassName="calendar"
                          colorPrimary="var(--primary)"
                          shouldHighlightWeekends
                          locale={myCustomLocale}
                        />
                        <div>
                          <Option onClick={() => getDate(selectedDay)}>
                            Enviar
                          </Option>
                          <Option onClick={() => setCalendarIsActive(false)}>
                            Voltar
                          </Option>
                        </div>
                      </Calendar>
                    )
                  }
                }
              })
            ) : (
              <>
                <Form>
                  <div>
                    <Label htmlFor="name">Seu nome completo</Label>
                    <Input
                      required
                      onChange={(e) => setCustomerName(e.target.value)}
                      name="name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Seu principal E-mail</Label>
                    <Input
                      required
                      onChange={(e) => setCustomerEmail(e.target.value)}
                      name="email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cel">Seu Whatsapp</Label>
                    <Input
                      required
                      onChange={(e) => setCustomerCel(e.target.value)}
                      name="cel"
                    />
                  </div>
                  <div>
                    <Label htmlFor="social-network">Rede social (opcional)</Label>
                    <Input
                      onChange={(e) => setCustomerSocialNetwork(e.target.value)}
                      name="social-network"
                    />
                  </div>
                </Form>
              </>
            )}
            <SubmitButtons>
              {step !== 1 ? (
                <RollbackButton onClick={rollback}>Voltar</RollbackButton>
              ) : (
                ''
              )}
              {step === 7 ? (
                <ConcludeButton type="submit">Concluir</ConcludeButton>
              ) : (
                ''
              )}
            </SubmitButtons>
            {values.map((v, index) => {
              return <p key={`v${index}`}>{v}</p>
            })}
            <ProgressBar>
              <Progress progress={progress} step={step} />
            </ProgressBar>
          </Quiz>
        ) : (
          <FinalMessage>
            Obrigado <br /> Entraremos em contato <br /> Hermes Solutions
          </FinalMessage>
        )}
      </GlobalContainer>
      <FloatImage
        src="./assets/chain.png"
        width="90.6rem"
        height="2.6rem"
        top="1.5rem"
        left="-35rem"
        brightness="0.2"
        responsive={{
          1530: { left: '-55rem' },
          1150: { left: '-75rem' },
          730: { display: 'none' }
        }}
      />
      <FloatImage
        src="./assets/broken-circle.png"
        width="36.3rem"
        height="35.9rem"
        top="0rem"
        right="0"
        brightness="0.2"
        responsive={{
          1440: { width: '26.3rem', height: '25.9rem' },
          1220: { width: '16.3rem', height: '15.9rem' },
          960: { width: '16.3rem', height: '15.9rem', brightness: '0.1' },
          600: { display: 'none' }
        }}
      />
    </Container>
  )
}
