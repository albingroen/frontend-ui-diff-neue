import * as React from 'react'
import { useFormState } from 'react-use-form-state'
import { TextInput, ButtonPrimary, Text, BorderBox } from '@primer/components'
import styled from 'styled-components'
import auth from '../../../../../../lib/auth'
import { errorMessages } from '../../../../../../lib'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { ButtonIcon } from '../../../../../../components'
import { FormattedMessage, useIntl } from 'react-intl'
import messages from '../../../../messages'

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export interface IEmailFormValues {
  name: string
  email: string
  password: string
}

const EmailForm: React.FC = () => {
  const intl = useIntl()
  const [submitted, setSubmitted] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string | null>()
  const [formState, { text, email, password }] = useFormState<IEmailFormValues>()

  const onSubmit = async (e: any) => {
    e.preventDefault()
    setError(null)
    const res = await auth.email.signup(formState.values)
    if (res instanceof Error) {
      setError(res?.message)
    } else if (res) {
      setSubmitted(true)
    }
  }

  return submitted ? (
    <BorderBox bg="green.1" p={2}>
      <Text lineHeight={1.5}>
        <FormattedMessage {...messages.confirmation} />
      </Text>
    </BorderBox>
  ) : (
    <Form onSubmit={onSubmit}>
      <TextInput
        variant="large"
        my={2}
        placeholder={intl.formatMessage(messages.placeholderName)}
        {...text('name')}
      />
      <TextInput
        variant="large"
        my={2}
        placeholder={intl.formatMessage(messages.placeholderEmail)}
        required
        {...email('email')}
      />
      <TextInput
        variant="large"
        my={2}
        placeholder={intl.formatMessage(messages.placeholderPassword)}
        required
        {...password('password')}
      />

      {error && (
        <Text color="red.5" my={2}>{errorMessages[error]}</Text>
      )}

      <ButtonPrimary type="submit" variant="large" mt={2}>
        <ButtonIcon icon={faSignInAlt} /> <FormattedMessage {...messages.ctaSignup} />
      </ButtonPrimary>
    </Form>
  )
}

export default EmailForm
