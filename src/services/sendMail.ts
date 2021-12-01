import { axiosApi } from './axios'

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
    return axiosApi.post('contact', data)
  } catch (error) {
    return error
  }
}
