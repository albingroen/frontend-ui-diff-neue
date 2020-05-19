import { IUser } from '../types'
import { patchUser, deleteUser } from '../lib/user'

export default (user: IUser, setUser: (user: IUser) => void) => ({
  user,
  setUser,
  patchUser: async (userId: string, values: { [key: string]: any }) => {
    const patchedUser = await patchUser(userId, values)
    setUser(patchedUser)
    return patchedUser
  },
  deleteUser: async (userId: string) => {
    const isUserDeleted = await deleteUser(userId)
    return isUserDeleted
  }
})
