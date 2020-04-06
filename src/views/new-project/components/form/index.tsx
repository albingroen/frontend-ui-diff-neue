import * as React from 'react'
import { TextInput, Flex, ButtonPrimary, Text, Box } from '@primer/components'
import { Section, Select } from '../../../../components'
import { useIntl, FormattedMessage } from 'react-intl'
import { TeamsContext } from '../../../../context/teamsContext'
import { UserContext } from '../../../../context/userContext'
import { getTeamsAndUserById, getDropdownTitle, teamsToOptions } from './lib'
import messages from './messages'
import { ProjectsContext } from '../../../../context/projectsContext'
import { useHistory } from 'react-router-dom'
import { errorMessages } from '../../../../lib'

interface Action {
  type: string;
  payload?: string;
}

interface IState {
  owner?: string;
  name?: string;
  loading?: boolean;
  error?: string;
}

function reducer (state: IState, action: Action): IState {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.payload }
    case 'CHANGE_OWNER':
      return { ...state, owner: action.payload }
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
  const { user } = React.useContext(UserContext)
  const { teamsById } = React.useContext(TeamsContext)
  const { createProject } = React.useContext(ProjectsContext)
  const teamsAndUserById = getTeamsAndUserById(user, teamsById)

  // State
  const [state, dispatch] = React.useReducer(reducer, {})

  // On submit
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (state.owner && state.name) {
      dispatch({ type: 'SUBMIT' })

      try {
        const project = await createProject(state.owner, state.name)

        if (project) {
          dispatch({ type: 'SUCCESS' })
          history.push(`/projects/${project._id}`)
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
      <Section title={messages.ownerNameTitle} lede={messages.ownerNameLede}>
        <Flex alignItems="center">
          <Flex mr={2}>
            <Select
              ariaLabel="owner"
              onChange={(newValue?: string) =>
                dispatch({ type: 'CHANGE_OWNER', payload: newValue })
              }
              value={state.owner}
              title={getDropdownTitle(teamsAndUserById, intl, state.owner)}
              options={teamsToOptions(teamsAndUserById)}
            />
          </Flex>

          <span>/</span>

          <TextInput
            required
            ml={3}
            value={state.name || ''}
            onChange={(e) =>
              dispatch({ type: 'CHANGE_NAME', payload: e.target.value })
            }
            placeholder={intl.formatMessage(messages.projectNamePlaceholder)}
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
