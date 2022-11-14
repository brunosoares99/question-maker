import api from "./api"

export async function signUp({ name, email, password }: { name: string, email: string, password: string }) {
  const response = await api.post('/users', { name, email, password })
  return response.data    
}
