import {
  faGithub,
  IconDefinition,
  faGitlab,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";

export interface SignupMethod {
  name: string;
  icon: IconDefinition;
}

export const signupMethods: SignupMethod[] = [
  {
    name: "Github",
    icon: faGithub
  },
  {
    name: "Gitlab",
    icon: faGitlab
  },
  {
    name: "Google",
    icon: faGoogle
  },
  {
    name: "Email & password",
    icon: faLock
  }
];
