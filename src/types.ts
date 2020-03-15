import { RouteProps } from "react-router-dom";

export interface NamedRoute extends RouteProps {
  name: string;
}

export type Chunk = string[] | React.ReactElement[];

export interface IUser {
  name: string
  email: string
}