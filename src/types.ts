import { RouteProps } from "react-router-dom";

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

export type QueryString = string | string[] | null | undefined;

export interface IPasswordReset {
  _user: string;
  validThru: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface IImage {
  _id: string;
  diff: boolean;
  default: string;
  small: string;
  large: string;
  publicId: string;
  name: string;
  env: string;
}

export interface IProject {
  _id: string;
  name: string;
  _createdBy: string;
  apiKey: string;
  createdAt: Date;
  updatedAt: Date;
  images?: IImage[];
  _team?: string;
}
