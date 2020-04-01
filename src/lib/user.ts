import { request } from '.'

export const getUser = async () => {
  const res = await request.get('/users')
  return res?.data?.user
}
