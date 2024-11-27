import { api } from '@/lib/axios'

interface UpdateProfileBody {
  name: string
  description: string
}

export async function updateProfile({ name, description }: UpdateProfileBody) {
  return api.put('/profile', { name, description })
}
