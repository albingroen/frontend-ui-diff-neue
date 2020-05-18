import * as React from 'react'
import { useIntl, FormattedMessage } from 'react-intl'
import { Section, Input } from '../../../../../../components'
import { IUser } from '../../../../../../types'
import { useFormState } from 'react-use-form-state'
import { ButtonPrimary } from '@primer/components'
import messages from './messages'

interface IBasicProps {
  user: IUser;
}

interface IFormValues {
  name: string;
  email: string;
}

const Basic: React.FC<IBasicProps> = ({ user }) => {
  const intl = useIntl()
  const [formState, { email, text }] = useFormState<IFormValues>({
    name: user.name,
    email: user.email
  })

  // Check wether info has changed or form is dirty
  const isPristine =
    formState.values.name === user.name &&
    formState.values.email === user.email
  const isDirty = Object.values(formState.validity).some(
    (value?: boolean) => value === false
  )

  // Labels
  const labels = {
    name: intl.formatMessage(messages.nameLabel),
    email: intl.formatMessage(messages.emailLabel)
  }

  // Placeholders
  const placeholders = {
    name: intl.formatMessage(messages.namePlaceholder),
    email: intl.formatMessage(messages.emailPlaceholder)
  }

  // Descriptions
  const descriptions = {
    name: intl.formatMessage(messages.nameDescription),
    email: intl.formatMessage(messages.emailDescription)
  }

  // Errors
  const errors = {
    name: {
      noEmpty: intl.formatMessage(messages.nameCannotBeEmpty)
    },
    email: {
      noEmpty: intl.formatMessage(messages.emailCannotBeEmpty)
    }
  }

  // Submit function
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { email, name } = formState.values

    if (!isPristine || !isDirty) {
      alert(`${email + name}`)
    }
  }

  return (
    <Section title={messages.heading} lede={messages.lede}>
      <form onSubmit={onSubmit}>
        <Input
          mb={3}
          required
          placeholder={placeholders.name}
          label={labels.name}
          description={descriptions.name}
          error={formState.errors.name}
          {...text({
            name: 'name',
            validate: (value: string) => {
              if (!value.length) {
                return errors.name.noEmpty
              }
            }
          })}
        />
        <Input
          mt={3}
          required
          placeholder={placeholders.email}
          label={labels.email}
          description={descriptions.email}
          error={formState.errors.email}
          {...email({
            name: 'email',
            validate: (value: string) => {
              if (!value.length) {
                return errors.name.noEmpty
              }
            }
          })}
        />

        <ButtonPrimary disabled={isPristine || isDirty} width="100%" mt={4}>
          <FormattedMessage {...messages.ctaSave} />
        </ButtonPrimary>
      </form>
    </Section>
  )
}

export default Basic
