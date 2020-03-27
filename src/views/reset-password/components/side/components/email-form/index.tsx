import * as React from 'react'
import { useFormState } from 'react-use-form-state'
import { TextInput, ButtonPrimary, Text, Button, Flex } from '@primer/components'
import styled from 'styled-components'
import auth from '../../../../../../lib/auth'
import { errorMessages, request } from '../../../../../../lib'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { ButtonIcon, Loading } from '../../../../../../components'
import { FormattedMessage, useIntl } from 'react-intl'
import messages from '../../../../messages'
import { useHistory, Link } from 'react-router-dom'

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

  const [fetchIsLoading, setFetchIsLoading] = React.useState<boolean>(true)
  const [fetchError, setFetchError] = React.useState<string | null>()
  const [postIsLoading, setPostIsLoading] = React.useState<boolean>()
  const [postError, setPostError] = React.useState<string | null>()
  const [formState, { password }] = useFormState<IEmailFormValues>()

  React.useEffect(() => {
    request.get(`/auth/email/reset/${passwordResetId}`)
      .catch(() => {
        setFetchError('link-expired')
      })

    setFetchIsLoading(false)
  }, [passwordResetId])

  const onSubmit = async (e: any) => {
    e.preventDefault()
    setPostIsLoading(true)
    setPostError(null)

    const { newPassword, confirmedPassword } = formState.values

    if (newPassword !== confirmedPassword) {
      setPostIsLoading(false)
      return setPostError('passwords-not-matching')
    }

    const res = await auth.email.resetPassword({ ...formState.values, passwordResetId })

    if (res instanceof Error) {
      setPostIsLoading(false)
      setPostError(res?.message)
    } else {
      history.push({
        pathname: '/login',
        search: '?method=email'
      })
    }
  }

  return fetchIsLoading ? (
    <Loading />
  ) : fetchError ? (
    <Flex flexDirection="column">
      <Text my={2} color="red.5">{errorMessages[fetchError]}</Text>
      <Link to="/reset-password">
        <Button style={{ width: '100%' }} variant="large">Requst a new link</Button>
      </Link>
    </Flex>
  ) : (
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

      {postError && (
        <Text color="red.5" my={2}>{errorMessages[postError]}</Text>
      )}

      <ButtonPrimary type="submit" variant="large" mt={2}>
        <ButtonIcon icon={faSignInAlt} />

        {postIsLoading ? (
          <FormattedMessage {...messages.ctaLoading} />
        ) : (
          <FormattedMessage {...messages.cta} />
        )}
      </ButtonPrimary>
    </Form>
  )
}

export default EmailForm
