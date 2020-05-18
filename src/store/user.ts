import { IUser } from '../types'
import { patchUser } from '../lib/user'

export default (user: IUser, setUser: (user: IUser) => void) => ({
  user,
  setUser,
  patchUser: async (userId: string, values: { [key: string]: any }) => {
    const patchedUser = await patchUser(userId, values)
    setUser(patchedUser)
    return patchedUser
  }
})
