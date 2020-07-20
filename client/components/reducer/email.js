import axios from 'axios'

export const email = (data) => {
  return async () => {
    try {
      await axios.post('/api/email', {
        name: data.name,
        email: data.email,
        message: data.message,
      })
    } catch (error) {
      console.error(error)
    }
  }
}
