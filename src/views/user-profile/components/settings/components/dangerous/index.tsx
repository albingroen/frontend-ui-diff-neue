import * as React from 'react'
import { defineMessage, FormattedMessage, useIntl } from 'react-intl'
import { Section, Snackbar } from '../../../../../../components'
import { IUser } from '../../../../../../types'
import { ButtonDanger, BorderBox, Box, Text } from '@primer/components'
import { UserContext } from '../../../../../../context/userContext'
import { DEFAULT_SNACKBAR_DURATION } from '../../../../../../components/design/snackbar'
import { logout } from '../../../../../../lib/auth'

const messages = defineMessage({
  heading: {
    defaultMessage: 'Dangerous settings',
    id: 'user-profile.settings.dangerous.heading'
  },
  lede: {
    defaultMessage: 'Here you can delete your account if you want to',
    id: 'user-profile.settings.dangerous.lede'
  },
  labelDeleteUser: {
    defaultMessage: 'Delete user',
    id: 'user-profile.settings.dangerous.delete-user.label'
  },
  successDeleteUser: {
    defaultMessage: 'Deleted user successfully',
    id: 'user.settings.success-delete-user'
  },
  errorDeleteUser: {
    defaultMessage: 'Failed to delete user',
    id: 'user.settings.error-delete-user'
  },
  ctaDeleteUser: {
    defaultMessage: 'Delete user',
    id: 'user-settings.sections.general.dangerous.cta-delete-user'
  },
  ctaDeleteUserLoading: {
    defaultMessage: 'Deleting user ...',
    id: 'user-settings.sections.general.dangerous.cta-delete-user-loading'
  },
  descriptionDeleteUser: {
    defaultMessage: 'Please be aware that this action is final',
    id: 'user.settings.description-delete-user'
  }
})

interface IDangerousProps {
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
      return messages.ctaDeleteUserLoading
    default:
      return messages.ctaDeleteUser
  }
}

const Dangerous: React.FC<IDangerousProps> = ({ user }) => {
  const intl = useIntl()
  const { deleteUser } = React.useContext(UserContext)
  const [state, dispatch] = React.useReducer(reducer, { status: 'idle' })

  const onDeleteUser = async () => {
    dispatch({ type: 'SUBMIT' })

    const isTeamDeleted = await deleteUser(user?._id)
    if (isTeamDeleted) {
      dispatch({ type: 'SUCCESS' })
      setTimeout(() => {
        dispatch({ type: 'RESET' })
        logout()
      }, DEFAULT_SNACKBAR_DURATION)
    } else {
      dispatch({ type: 'FAIL' })
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
          value={intl.formatMessage(messages.successDeleteUser)}
        />
      )}

      {state.status === 'error' && (
        <Snackbar
          variant="error"
          value={intl.formatMessage(messages.errorDeleteUser)}
        />
      )}

      <Section title={messages.heading} lede={messages.lede}>
        <BorderBox p={2}>
          <Box mb={2}>
            <Text color="red.5">
              <FormattedMessage {...messages.labelDeleteUser} /> ({user.email})
            </Text>
          </Box>
          <ButtonDanger onClick={onDeleteUser}>
            <FormattedMessage {...getCtaValue(state.status)} />
          </ButtonDanger>
          <Box mt={2}>
            <Text fontSize={1} opacity={0.75}>
              <FormattedMessage {...messages.descriptionDeleteUser} />
            </Text>
          </Box>
        </BorderBox>
      </Section>
    </div>
  )
}

export default Dangerous
