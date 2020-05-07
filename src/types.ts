/* eslint-disable camelcase */
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
  teams?: ITeam[];
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

export interface ITeamMember {
  _id: string;
  _user: string | IUser;
  role: string;
}

export interface ITeam {
  _id: string;
  name: string;
  members: ITeamMember[];
  createdAt: Date;
  updatedAt: Date;
  logo: string;
}

export type TeamsById = { [key: string]: ITeam | IUser };

export type PrimerTheme = { [key: string]: any };

export interface IActiveImages {
  from?: IImage;
  to?: IImage;
}

export interface ITabItem {
  value: string;
  link: string;
}

export type ImagesByEnvironment = { [env: string]: IImage[] };

export type ImageBrowseDir = 'prev' | 'next';
