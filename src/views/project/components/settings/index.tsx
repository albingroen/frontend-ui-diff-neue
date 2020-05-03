import * as React from 'react'
import { useFormState } from 'react-use-form-state'
import { FormattedMessage, useIntl } from 'react-intl'
import { TextInput, ButtonPrimary } from '@primer/components'
import { DEFAULT_SNACKBAR_DURATION } from '../../../../components/design/snackbar'
import { ProjectsContext } from '../../../../context/projectsContext'
import { Section, Snackbar } from '../../../../components'
import { IProject } from '../../../../types'
import messages from './messages'

interface ISettingsProps {
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
      return messages.ctaLoading
    default:
      return messages.ctaSave
  }
}

const Settings: React.FC<ISettingsProps> = ({ project }) => {
  const intl = useIntl()
  const { patchProject } = React.useContext(ProjectsContext)
  const [state, dispatch] = React.useReducer(reducer, { status: 'idle' })

  // Form state
  const [formState, { text }] = useFormState(
    { name: project?.name },
    { withIds: true }
  )

  // Check wether info has changed
  const isPristine = formState.values.name === project?.name

  // Runs when submitting form
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isPristine) {
      dispatch({ type: 'SUBMIT' })

      const patchedProject = await patchProject(project?._id, formState.values)
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
  }

  // Placeholders
  const placeholders = {
    name: intl.formatMessage(messages.placeholderName)
  }

  return (
    <div>
      {state.status === 'success' && (
        <Snackbar variant="success" value="Saved project settings!" />
      )}

      {state.status === 'error' && (
        <Snackbar variant="error" value="Failed to save project settings" />
      )}

      <Section title={messages.heading} lede={messages.lede}>
        <form onSubmit={onSubmit}>
          <TextInput
            {...text('name')}
            placeholder={placeholders.name}
            width="100%"
          />
          <ButtonPrimary
            type="submit"
            mt={3}
            style={{ width: '100%' }}
            disabled={isPristine}
          >
            <FormattedMessage {...getCtaValue(state.status)} />
          </ButtonPrimary>
        </form>
      </Section>
    </div>
  )
}

export default Settings
