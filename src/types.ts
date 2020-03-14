import { RouteProps } from "react-router-dom";

export interface NamedRoute extends RouteProps {
  name: string
}