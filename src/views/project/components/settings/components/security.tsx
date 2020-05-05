import * as React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { Box, Text, BorderBox, Flex, Button } from '@primer/components'
import { DEFAULT_SNACKBAR_DURATION } from '../../../../../components/design/snackbar'
import { ProjectsContext } from '../../../../../context/projectsContext'
import { Section, Snackbar } from '../../../../../components'
import { IProject } from '../../../../../types'
import messages from './messages'

interface ISecurityProps {
  project: IProject;
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
      return messages.ctaApiKeyLoading
    default:
      return messages.ctaApiKey
  }
}

const Security: React.FC<ISecurityProps> = ({ project }) => {
  const intl = useIntl()
  const { patchProjectApiKey } = React.useContext(ProjectsContext)
  const [state, dispatch] = React.useReducer(reducer, { status: 'idle' })

  // Runs when submitting form
  const onUpdateApiKey = async () => {
    dispatch({ type: 'SUBMIT' })

    const patchedProject = await patchProjectApiKey(project?._id)
    if (patchedProject && patchedProject._id) {
      dispatch({ type: 'SUCCESS' })
      setTimeout(() => {
        dispatch({ type: 'RESET' })
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
          value={intl.formatMessage(messages.success)}
        />
      )}

      {state.status === 'error' && (
        <Snackbar variant="error" value={intl.formatMessage(messages.error)} />
      )}

      <Section title={messages.securityHeading} lede={messages.securityLede}>
        <BorderBox p={2}>
          <Box mb={2}>
            <Text>
              <FormattedMessage {...messages.labelApiKey} />
            </Text>
          </Box>
          <Flex alignItems="center">
            <code>{project?.apiKey}</code>
            <Button onClick={onUpdateApiKey} ml={2} variant="small">
              <FormattedMessage {...getCtaValue(state.status)} />
            </Button>
          </Flex>
          <Box mt={2}>
            <Text fontSize={1} opacity={0.75}>
              <FormattedMessage {...messages.descriptionApiKey} />
            </Text>
          </Box>
        </BorderBox>
      </Section>
    </div>
  )
}

export default Security
