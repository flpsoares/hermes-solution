import { api } from '../services/api'

export const sendMail = async (
  name: string,
  sendermail: string,
  content: string
) => {
  const data = {
    name,
    sendermail,
    content
  }

  try {
    return api.post('contact', data)
  } catch (error) {
    return error
  }
}
