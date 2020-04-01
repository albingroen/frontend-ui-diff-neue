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
  email: string;
}

const EmailForm: React.FC = () => {
  const intl = useIntl()
  const [error, setError] = React.useState<string | null>()
  const [isLoading, setIsLoading] = React.useState<boolean>()
  const [isSubmitted, setIsSubmitted] = React.useState<boolean>()
  const [formState, { email }] = useFormState<IEmailFormValues>()

  const onSubmit = async (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    const { email } = formState.values

    if (!email) {
      setIsLoading(false)
      return setError('missing-credentials')
    }

    const res = await auth.email.createPasswordReset(formState.values)

    setIsLoading(false)

    if (res instanceof Error) {
      setError(res?.message)
    } else {
      setIsSubmitted(true)
    }
  }

  return isSubmitted ? (
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
        placeholder={intl.formatMessage(messages.placeholderEmail)}
        {...email('email')}
        required
      />

      {error && (
        <Text color="red.5" my={2}>
          {errorMessages[error]}
        </Text>
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
