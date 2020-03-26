import * as React from 'react'
import { useFormState } from 'react-use-form-state'
import { TextInput, ButtonPrimary, Text } from '@primer/components'
import styled from 'styled-components'
import auth from '../../../../../../lib/auth'
import { errorMessages } from '../../../../../../lib'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { ButtonIcon } from '../../../../../../components'
import { FormattedMessage, useIntl } from 'react-intl'
import messages from '../../../../messages'
import { useHistory } from 'react-router-dom'

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export interface IEmailFormValues {
  newPassword: string
  confirmedPassword: string
}

interface IEmailFormProps {
  passwordResetId: string
}

const EmailForm: React.FC<IEmailFormProps> = ({ passwordResetId }) => {
  const intl = useIntl()
  const history = useHistory()

  if (!passwordResetId) {
    history.push('/reset-password')
  }

  const [isLoading, setIsLoading] = React.useState<boolean>()
  const [error, setError] = React.useState<string | null>()
  const [formState, { password }] = useFormState<IEmailFormValues>()

  const onSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const { newPassword, confirmedPassword } = formState.values

    if (newPassword !== confirmedPassword) {
      setIsLoading(false)
      return setError('passwords-not-matching')
    }

    const res = await auth.email.resetPassword({ ...formState.values, passwordResetId })

    if (res instanceof Error) {
      setIsLoading(false)
      setError(res?.message)
    } else {
      history.push({
        pathname: '/login',
        search: '?method=email'
      })
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <TextInput
        variant="large"
        my={2}
        placeholder={intl.formatMessage(messages.placeholderNewPassword)}
        {...password('newPassword')} required
      />
      <TextInput
        variant="large"
        my={2}
        placeholder={intl.formatMessage(messages.placeholderConfirmNewPassword)}
        {...password('confirmedPassword')}
        required
      />

      {error && (
        <Text color="red.5" my={2}>{errorMessages[error]}</Text>
      )}

      <ButtonPrimary type="submit" variant="large" mt={2}>
        <ButtonIcon icon={faSignInAlt} />

        {isLoading ? (
          <FormattedMessage {...messages.ctaLoading} />
        ) : (
          <FormattedMessage {...messages.cta} />
        )}
      </ButtonPrimary>
    </Form>
  )
}

export default EmailForm
