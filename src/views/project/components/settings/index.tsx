import * as React from 'react'
import { useFormState } from 'react-use-form-state'
import { FormattedMessage, useIntl } from 'react-intl'
import { ButtonPrimary } from '@primer/components'
import { DEFAULT_SNACKBAR_DURATION } from '../../../../components/design/snackbar'
import { ProjectsContext } from '../../../../context/projectsContext'
import { Section, Snackbar, Input } from '../../../../components'
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

  // Check wether info has changed or form is dirty
  const isPristine = formState.values.name === project?.name
  const isDirty = Object.values(formState.validity).some(
    (value?: boolean) => !value
  )

  // Runs when submitting form
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isPristine && !isDirty) {
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
          <Input
            placeholder={placeholders.name}
            error={formState.errors.name}
            label={intl.formatMessage(messages.labelName)}
            description={intl.formatMessage(messages.descriptionName)}
            {...text({
              name: 'name',
              validate: (value?: string) => {
                if (!value) {
                  return intl.formatMessage(messages.noEmptyName)
                }
              }
            })}
          />

          <ButtonPrimary
            type="submit"
            style={{ width: '100%' }}
            disabled={isPristine || isDirty}
            mt={4}
          >
            <FormattedMessage {...getCtaValue(state.status)} />
          </ButtonPrimary>
        </form>
      </Section>
    </div>
  )
}

export default Settings
