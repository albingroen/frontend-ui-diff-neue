import * as React from 'react'
import { Section, Input, AvatarInput } from '../../../../../components'
import { useIntl, FormattedMessage } from 'react-intl'
import { ITeam } from '../../../../../types'
import { ButtonPrimary, Box } from '@primer/components'
import { useFormState } from 'react-use-form-state'
import { TeamsContext } from '../../../../../context/teamsContext'
import {
  DEFAULT_SNACKBAR_DURATION,
  Snackbar
} from '../../../../../components/design/snackbar'
import messages from './messages'

interface IBasicProps {
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
      return messages.ctaLoading
    default:
      return messages.ctaSave
  }
}

const Basic: React.FC<IBasicProps> = ({ team }) => {
  const intl = useIntl()
  const { patchTeam } = React.useContext(TeamsContext)
  const [state, dispatch] = React.useReducer(reducer, { status: 'idle' })

  // Form state
  const [formState, { text }] = useFormState(
    { name: team?.name },
    { withIds: true }
  )

  // Check wether info has changed or form is dirty
  const isPristine =
    formState.values.name === team?.name && !formState.values.logo
  const isDirty = Object.values(formState.validity).some(
    (value?: boolean) => value === false
  )

  // Runs when submitting form
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isPristine && !isDirty) {
      dispatch({ type: 'SUBMIT' })

      let patchedTeam

      if (formState.values.logo) {
        const formData = new FormData()
        Object.keys(formState.values).forEach((key) => {
          formData.append(key, formState.values[key])
        })

        patchedTeam = await patchTeam(team?._id, formData)
      } else {
        patchedTeam = await patchTeam(team?._id, formState.values)
      }

      if (patchedTeam && patchedTeam._id) {
        formState.resetField('logo')
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

      <Section
        id="basic-information"
        title={messages.heading}
        lede={messages.lede}
      >
        <form onSubmit={onSubmit}>
          <Box mb={4}>
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
          </Box>

          <Box mt={4}>
            <AvatarInput
              value={
                formState.values.logo
                  ? URL.createObjectURL(formState.values.logo)
                  : team.logo
              }
              label={intl.formatMessage(messages.labelLogo)}
              description={intl.formatMessage(messages.descriptionLogo)}
              onChange={(e) => formState.setField('logo', e.target.files[0])}
            />
          </Box>

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

export default Basic
