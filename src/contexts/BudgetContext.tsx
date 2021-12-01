import { createContext, ReactNode, useContext, useState } from 'react'
import { sendMail } from '../services/sendMail'

interface BudgetContextData {
  progress: number
  step: number
  values: String[]
  customerName: string
  customerEmail: string
  customerCel: string
  customerSocialNetwork: string
  setCustomerName: (name: string) => void
  setCustomerEmail: (email: string) => void
  setCustomerCel: (cel: string) => void
  setCustomerSocialNetwork: (socialNetwork: string) => void
  isSubmited: boolean
  submitForm: () => void
  increase: (value: string) => void
  decrease: () => void
  isLoading: boolean
}

interface BudgetProviderProps {
  children: ReactNode
}

const BudgetContext = createContext({} as BudgetContextData)

export function BudgetProvider({ children }: BudgetProviderProps) {
  const [progress, setProgress] = useState(0)
  const [step, setStep] = useState(1)
  const [values, setValues] = useState([''])

  const [customerName, setCustomerName] = useState('')
  const [customerEmail, setCustomerEmail] = useState('')
  const [customerCel, setCustomerCel] = useState('')
  const [customerSocialNetwork, setCustomerSocialNetwork] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const [isSubmited, setIsSubmited] = useState(false)

  const submitForm = async () => {
    setIsLoading(true)
    if (customerName !== '' && customerEmail !== '' && customerCel !== '') {
      if (values) {
        const emailMessage = `
            Nome: <b>${customerName}</b><br />
            Email: <b>${customerEmail}</b><br />
            WhatsApp: <b>${customerCel}</b><br />
            Rede Social: <b>${
              customerSocialNetwork || 'Não informado'
            }</b><br /><br />
            Qual é o produto/serviço a ser desenvolvido? - <b>${values[1]}</b><br />
            Qual é a sua área de atuação - <b>${values[2]}</b><br />
            Você já possui uma marca - <b>${values[3]}</b><br />
            Você já tem um site - <b>${values[4]}</b><br />
            Possui um canal de vendas para algum produto/serviço - <b>${
              values[5]
            }</b><br />
            Tem prazo para o projeto - <b>${values[6]}</b>
          `
        await sendMail(customerName, customerEmail, emailMessage)
          .then(() => {
            setIsSubmited(true)
          })
          .finally(() => {
            setIsLoading(false)
          })
      }
    }
  }

  const increase = (value: string) => {
    if (progress < 100) {
      setProgress(progress + 16.66666666666667)
      setStep(step + 1)
      if (values !== undefined) {
        setValues((oldValue) => [...oldValue, value])
      }
    }
  }

  const decrease = () => {
    if (progress !== 0) {
      setProgress(progress - 16.66666666666667)
      setStep(step - 1)
      setValues((values) => values.filter((_, i) => i !== values.length - 1)) // remover último item do array
    }
  }

  return (
    <BudgetContext.Provider
      value={{
        progress,
        step,
        increase,
        decrease,
        values,
        customerName,
        customerEmail,
        customerCel,
        customerSocialNetwork,
        setCustomerName,
        setCustomerEmail,
        setCustomerCel,
        setCustomerSocialNetwork,
        isSubmited,
        submitForm,
        isLoading
      }}
    >
      {children}
    </BudgetContext.Provider>
  )
}

export const useBudget = () => {
  return useContext(BudgetContext)
}
