import { RouteProps } from 'react-router-dom'

export interface NamedRoute extends RouteProps {
  name: string;
}

export type Chunk = string[] | React.ReactElement[];

export interface IUser {
  _id: string;
  name: string;
  email: string;
  avatar: string;
  socialId: string;
  createdAt: string;
  updatedAt: string;
}

export type QueryString = string | string[] | null | undefined

export interface IPasswordReset {
  _user: string
  validThru: Date
  createdAt: Date
  updatedAt: Date
}
