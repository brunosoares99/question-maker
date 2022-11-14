import api from "./api"

export async function signIn({ email, password }: { email: string, password: string }): Promise<{token: string}> {
  const response = await api.post('/auth', { email, password })
  return response.data    
}