import {
  faGithub,
  IconDefinition,
  faGitlab,
  faGoogle
} from '@fortawesome/free-brands-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import messages from './messages'
import { MessageDescriptor } from 'react-intl'
import auth from '../../lib/auth'

export interface SignupMethod {
  name: MessageDescriptor;
  icon: IconDefinition;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export const signupMethods = (history: any): SignupMethod[] => [
  {
    name: messages.github,
    icon: faGithub,
    onClick: () => auth.social.signup('github'),
    style: {
      backgroundColor: '#222',
      borderColor: '#222',
      color: 'white'
    }
  },
  {
    name: messages.gitlab,
    icon: faGitlab,
    onClick: () => auth.social.signup('gitlab'),
    style: {
      backgroundColor: '#fb7135',
      borderColor: '#fb7135',
      color: 'white'
    }
  },
  {
    name: messages.google,
    icon: faGoogle,
    onClick: () => auth.social.signup('google'),
    style: {
      backgroundColor: '#4285f5',
      borderColor: '#4285f5',
      color: 'white'
    }
  },
  {
    name: messages.email,
    icon: faLock,
    onClick: () => {
      history.push({
        pathname: '/signup',
        search: '?method=email'
      })
    }
  }
]
