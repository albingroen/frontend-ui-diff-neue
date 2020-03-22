import * as React from 'react'
import { useFormState } from 'react-use-form-state'
import { TextInput, ButtonPrimary, Text } from '@primer/components'
import styled from 'styled-components'
import auth from '../../../../../../lib/auth'
import { errorMessages } from '../../../../../../lib'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import ButtonIcon from '../../../../../../components/button-icon'

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
  const [error, setError] = React.useState<string | null>()
  const [formState, { email, password }] = useFormState<IEmailFormValues>()

  const onSubmit = async (e: any) => {
    e.preventDefault()
    setError(null)
    const res = await auth.email.login(formState.values)
    if (res instanceof Error) {
      setError(res?.message)
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <TextInput variant="large" my={2} placeholder="Email *" {...email('email')} required />
      <TextInput variant="large" my={2} placeholder="Password *" {...password('password')} required />
      {error && (
        <Text color="red.5" my={2}>{errorMessages[error]}</Text>
      )}
      <ButtonPrimary type="submit" variant="large" mt={2}>
        <ButtonIcon icon={faSignInAlt} /> Log in
      </ButtonPrimary>
    </Form>
  )
}

export default EmailForm
