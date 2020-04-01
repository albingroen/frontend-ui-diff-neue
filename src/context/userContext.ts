import { createContext } from 'react'
import { IUser } from '../types'

export const initialUser: IUser = {
  _id: '',
  name: '',
  email: '',
  avatar: '',
  socialId: '',
  createdAt: '',
  updatedAt: ''
}

export type IUserContext = {
  user: IUser;
  setUser: (newUser: IUser) => void;
};

export const UserContext = createContext<IUserContext>({
  user: initialUser,
  setUser: () => {}
})
