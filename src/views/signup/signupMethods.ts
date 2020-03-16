import {
  faGithub,
  IconDefinition,
  faGitlab,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import messages from "./messages";
import { MessageDescriptor } from "react-intl";
import auth from "../../lib/auth";

export interface SignupMethod {
  name: MessageDescriptor;
  icon: IconDefinition;
  onClick?: () => void
}

export const signupMethods: SignupMethod[] = [
  {
    name: messages.github,
    icon: faGithub,
    onClick: () => auth.github.signup()
  },
  {
    name: messages.gitlab,
    icon: faGitlab,
    onClick: () => auth.gitlab.signup()
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
