import * as React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import { Box, Text, BorderBox, ButtonDanger } from '@primer/components'
import { DEFAULT_SNACKBAR_DURATION } from '../../../../../components/design/snackbar'
import { ProjectsContext } from '../../../../../context/projectsContext'
import { Section, Snackbar } from '../../../../../components'
import { IProject } from '../../../../../types'
import messages from './messages'

interface IDangerousProps {
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
      return messages.ctaDeleteProjectLoading
    default:
      return messages.ctaDeleteProject
  }
}

const Dangerous: React.FC<IDangerousProps> = ({ project }) => {
  const intl = useIntl()
  const { deleteProject } = React.useContext(ProjectsContext)
  const [state, dispatch] = React.useReducer(reducer, { status: 'idle' })

  // Runs when submitting form
  const onUpdateApiKey = async () => {
    dispatch({ type: 'SUBMIT' })

    const isProjectDeleted = await deleteProject(project?._id)
    if (isProjectDeleted) {
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
          value={intl.formatMessage(messages.successDeleteProject)}
        />
      )}

      {state.status === 'error' && (
        <Snackbar
          variant="error"
          value={intl.formatMessage(messages.errorDeleteProject)}
        />
      )}

      <Section title={messages.dangerousHeading} lede={messages.dangerousLede}>
        <BorderBox p={2}>
          <Box mb={2}>
            <Text color="red.5">
              <FormattedMessage {...messages.labelDeleteProject} /> (
              {project?.name})
            </Text>
          </Box>
          <ButtonDanger onClick={onUpdateApiKey}>
            <FormattedMessage {...getCtaValue(state.status)} />
          </ButtonDanger>
          <Box mt={2}>
            <Text fontSize={1} opacity={0.75}>
              <FormattedMessage {...messages.descriptionDeleteProject} />
            </Text>
          </Box>
        </BorderBox>
      </Section>
    </div>
  )
}

export default Dangerous
