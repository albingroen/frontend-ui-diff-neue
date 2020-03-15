import {
  faGithub,
  IconDefinition,
  faGitlab,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import messages from "./messages";
import { MessageDescriptor } from "react-intl";

export interface SignupMethod {
  name: MessageDescriptor;
  icon: IconDefinition;
}

export const signupMethods: SignupMethod[] = [
  {
    name: messages.github,
    icon: faGithub
  },
  {
    name: messages.gitlab,
    icon: faGitlab
  },
  {
    name: messages.google,
    icon: faGoogle
  },
  {
    name: messages.email,
    icon: faLock
  }
];
