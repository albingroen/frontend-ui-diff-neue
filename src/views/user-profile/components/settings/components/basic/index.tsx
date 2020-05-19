import * as React from 'react'
import messages from './messages'
import { ButtonPrimary } from '@primer/components'
import { DEFAULT_SNACKBAR_DURATION } from '../../../../../../components/design/snackbar'
import { IUser } from '../../../../../../types'
import {
  Section,
  Input,
  Snackbar,
  AvatarInput
} from '../../../../../../components'
import { UserContext } from '../../../../../../context/userContext'
import { useFormState } from 'react-use-form-state'
import { useIntl, FormattedMessage } from 'react-intl'

interface IBasicProps {
  user: IUser;
}

type StateStatus = 'success' | 'error' | 'idle' | 'loading';

interface IState {
  status: StateStatus;
}

interface IAction {
  type: string;
  payload?: string;
}

function reducer (state: IState, action: IAction): IState {
  switch (action.type) {
    case 'SUBMIT':
      return { status: 'loading' }
    case 'SUCCESS':
      return { status: 'success' }
    case 'FAIL':
      return { status: 'error' }
    case 'RESET':
      return { status: 'idle' }
    default:
      return state
  }
}

const getCtaValue = (status: StateStatus) => {
  switch (status) {
    case 'loading':
      return messages.ctaSaveLoading
    default:
      return messages.ctaSave
  }
}

const Basic: React.FC<IBasicProps> = ({ user }) => {
  const intl = useIntl()
  const { patchUser } = React.useContext(UserContext)
  const [state, dispatch] = React.useReducer(reducer, { status: 'idle' })
  const [formState, { email, text }] = useFormState(
    {
      name: user.name,
      email: user.email
    },
    { withIds: true }
  )

  // Check wether info has changed or form is dirty
  const isPristine =
    !formState.values.avatar &&
    formState.values.name === user.name &&
    formState.values.email === user.email
  const isDirty = Object.values(formState.validity).some(
    (value?: boolean) => value === false
  )

  // Labels
  const labels = {
    name: intl.formatMessage(messages.nameLabel),
    email: intl.formatMessage(messages.emailLabel),
    avatar: intl.formatMessage(messages.avatarLabel)
  }

  // Placeholders
  const placeholders = {
    name: intl.formatMessage(messages.namePlaceholder),
    email: intl.formatMessage(messages.emailPlaceholder)
  }

  // Descriptions
  const descriptions = {
    name: intl.formatMessage(messages.nameDescription),
    email: intl.formatMessage(messages.emailDescription),
    avatar: intl.formatMessage(messages.avatarDescription)
  }

  // Errors
  const errors = {
    name: {
      noEmpty: intl.formatMessage(messages.nameCannotBeEmpty)
    },
    email: {
      noEmpty: intl.formatMessage(messages.emailCannotBeEmpty)
    }
  }

  // Submit function
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isPristine || !isDirty) {
      dispatch({ type: 'SUBMIT' })

      let patchedUser

      if (formState.values.avatar) {
        const formData = new FormData()
        Object.keys(formState.values).forEach((key) => {
          formData.append(
            key === 'avatar' ? 'logo' : key,
            formState.values[key]
          )
        })

        patchedUser = await patchUser(user._id, formData)
        formState.resetField('avatar')
      } else {
        patchedUser = await patchUser(user._id, formState.values)
      }

      if (patchedUser && patchedUser?._id) {
        dispatch({ type: 'SUCCESS' })
      } else {
        dispatch({ type: 'FAIL' })
      }

      formState.clearField('avatar')
      setTimeout(() => {
        dispatch({ type: 'RESET' })
      }, DEFAULT_SNACKBAR_DURATION)
    }
  }

  return (
    <div>
      {state.status === 'success' && (
        <Snackbar
          variant="success"
          value={intl.formatMessage(messages.success)}
        />
      )}

      {state.status === 'error' && (
        <Snackbar variant="error" value={intl.formatMessage(messages.error)} />
      )}

      <Section title={messages.heading} lede={messages.lede}>
        <form onSubmit={onSubmit}>
          <AvatarInput
            value={
              formState.values.avatar
                ? URL.createObjectURL(formState.values.avatar)
                : user.avatar
            }
            label={labels.avatar}
            description={descriptions.avatar}
            onChange={(e) => formState.setField('avatar', e.target.files[0])}
            shape="round"
          />

          <Input
            mt={3}
            mb={3}
            required
            placeholder={placeholders.name}
            label={labels.name}
            description={descriptions.name}
            error={formState.errors.name}
            {...text({
              name: 'name',
              validate: (value: string) => {
                if (!value.length) {
                  return errors.name.noEmpty
                }
              }
            })}
          />
          <Input
            mt={3}
            required
            placeholder={placeholders.email}
            label={labels.email}
            description={descriptions.email}
            error={formState.errors.email}
            {...email({
              name: 'email',
              validate: (value: string) => {
                if (!value.length) {
                  return errors.name.noEmpty
                }
              }
            })}
          />

          <ButtonPrimary disabled={isPristine || isDirty} width="100%" mt={4}>
            <FormattedMessage {...getCtaValue(state.status)} />
          </ButtonPrimary>
        </form>
      </Section>
    </div>
  )
}

export default Basic
