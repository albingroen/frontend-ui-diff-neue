import * as React from 'react'
import { Dropdown, TextInput, Flex, ButtonPrimary } from '@primer/components'
import { Section } from '../../../../components'
import messages from './messages'
import { useIntl } from 'react-intl'

const Form = () => {
  const intl = useIntl()

  return (
    <>
      <Section title={messages.ownerNameTitle} lede={messages.ownerNameLede}>
        <Flex alignItems="center">
          <Dropdown
            aria-label="Owner"
            mr={1}
            title={
              intl.formatMessage(messages.belongsToTitle)
            }
          />

          <span>/</span>

          <TextInput
            ml={3}
            placeholder={
              intl.formatMessage(messages.projectNamePlaceholder)
            }
          />
        </Flex>

      </Section>
      <ButtonPrimary>Create project</ButtonPrimary>
    </>
  )
}

export default Form
