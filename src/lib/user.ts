import { request } from '.'

export const getUser = async () => {
  const res = await request.get('/users')
  return res?.data?.user
}

export const patchUser = async (
  userId: string,
  values: { [key: string]: any }
) => {
  const res = await request.patch(`/users/${userId}`, values)
  return res.data.user
}

export const deleteUser = async (userId: string) => {
  const res = await request.delete(`/users/${userId}`)
  return res.data.isUserDeleted
}
