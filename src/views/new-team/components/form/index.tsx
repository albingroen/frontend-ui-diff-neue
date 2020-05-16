import * as React from 'react'
import messages from './messages'
import { Section } from '../../../../components'
import { TeamsContext } from '../../../../context/teamsContext'
import { TextInput, Flex, ButtonPrimary, Text, Box } from '@primer/components'
import { errorMessages } from '../../../../lib'
import { useHistory } from 'react-router-dom'
import { useIntl, FormattedMessage } from 'react-intl'

interface IState {
  name?: string;
  loading?: boolean;
  error?: string;
}

interface IAction {
  type: string;
  payload?: string;
}

function reducer (state: IState, action: IAction): IState {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.payload }
    case 'SUBMIT':
      return { ...state, loading: true }
    case 'SUCCESS':
      return { loading: false }
    case 'FAIL':
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}

const Form = () => {
  const intl = useIntl()
  const history = useHistory()
  const { createTeam } = React.useContext(TeamsContext)

  // State
  const [state, dispatch] = React.useReducer(reducer, {})

  // On submit
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (state.name) {
      dispatch({ type: 'SUBMIT' })

      try {
        const team = await createTeam(state.name)

        if (team) {
          dispatch({ type: 'SUCCESS' })
          history.push(`/teams/${team._id}`)
        }
      } catch (err) {
        dispatch({ type: 'FAIL', payload: err.message })
      }
    } else {
      dispatch({ type: 'FAIL', payload: 'missing-credentials' })
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Section
        title={messages.informationTitle}
        lede={messages.informationLede}
      >
        <Flex alignItems="center">
          <TextInput
            required
            value={state.name || ''}
            onChange={(e) =>
              dispatch({ type: 'CHANGE_NAME', payload: e.target.value })
            }
            placeholder={intl.formatMessage(messages.teamNamePlaceholder)}
          />
        </Flex>
      </Section>

      {state.error && (
        <Box mb={3}>
          <Text color="red.5">
            {errorMessages[state.error] || errorMessages.network}
          </Text>
        </Box>
      )}

      <ButtonPrimary>
        <FormattedMessage
          {...(state.loading ? messages.ctaLoading : messages.cta)}
        />
      </ButtonPrimary>
    </form>
  )
}

export default Form
