import { api } from '@/lib/axios'

export interface GetOrderDetailsParams {
  orderId: string
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const response = await api.get(`/orders/${orderId}`)
  return response.data
}
