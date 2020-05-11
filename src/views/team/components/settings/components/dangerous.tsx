import * as React from 'react'
import messages from './messages'
import { Box, Text, BorderBox, ButtonDanger } from '@primer/components'
import { DEFAULT_SNACKBAR_DURATION } from '../../../../../components/design/snackbar'
import { FormattedMessage, useIntl } from 'react-intl'
import { ITeam } from '../../../../../types'
import { Section, Snackbar } from '../../../../../components'
import { TeamsContext } from '../../../../../context/teamsContext'

interface IDangerousProps {
  team: ITeam;
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
      return messages.ctaDeleteTeamLoading
    default:
      return messages.ctaDeleteTeam
  }
}

const Dangerous: React.FC<IDangerousProps> = ({ team }) => {
  const intl = useIntl()
  const { deleteTeam } = React.useContext(TeamsContext)
  const [state, dispatch] = React.useReducer(reducer, { status: 'idle' })

  // Runs when submitting form
  const onDeleteTeam = async () => {
    dispatch({ type: 'SUBMIT' })

    const isTeamDeleted = await deleteTeam(team?._id)
    if (isTeamDeleted) {
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
          value={intl.formatMessage(messages.successDeleteTeam)}
        />
      )}

      {state.status === 'error' && (
        <Snackbar
          variant="error"
          value={intl.formatMessage(messages.errorDeleteTeam)}
        />
      )}

      <Section title={messages.headingDangerous} lede={messages.ledeDangerous}>
        <BorderBox p={2}>
          <Box mb={2}>
            <Text color="red.5">
              <FormattedMessage {...messages.labelDeleteTeam} /> ({team?.name})
            </Text>
          </Box>
          <ButtonDanger onClick={onDeleteTeam}>
            <FormattedMessage {...getCtaValue(state.status)} />
          </ButtonDanger>
          <Box mt={2}>
            <Text fontSize={1} opacity={0.75}>
              <FormattedMessage {...messages.descriptionDeleteTeam} />
            </Text>
          </Box>
        </BorderBox>
      </Section>
    </div>
  )
}

export default Dangerous
