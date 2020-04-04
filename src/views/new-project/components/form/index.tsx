import * as React from 'react'
import { TextInput, Flex, ButtonPrimary } from '@primer/components'
import { Section, Select } from '../../../../components'
import { useIntl, FormattedMessage } from 'react-intl'
import { TeamsContext } from '../../../../context/teamsContext'
import { UserContext } from '../../../../context/userContext'
import { getTeamsAndUserById, getDropdownTitle, teamsToOptions } from './lib'
import messages from './messages'

const Form = () => {
  const intl = useIntl()
  const { user } = React.useContext(UserContext)
  const { teamsById } = React.useContext(TeamsContext)
  const teamsAndUserById = getTeamsAndUserById(user, teamsById)

  // State
  const [chosenTeam, setChosenTeam] = React.useState<string | undefined>(user._id)
  const [name, setName] = React.useState<string>()

  // On submit
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={onSubmit}>
      <Section title={messages.ownerNameTitle} lede={messages.ownerNameLede}>
        <Flex alignItems="center">
          <Flex mr={2}>
            <Select
              ariaLabel="owner"
              onChange={(newValue?: string) => setChosenTeam(newValue)}
              value={chosenTeam}
              title={getDropdownTitle(teamsAndUserById, intl, chosenTeam)}
              options={teamsToOptions(teamsAndUserById)}
            />
          </Flex>

          <span>/</span>

          <TextInput
            ml={3}
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={
              intl.formatMessage(messages.projectNamePlaceholder)
            }
          />
        </Flex>
      </Section>

      <ButtonPrimary>
        <FormattedMessage {...messages.cta} />
      </ButtonPrimary>
    </form>
  )
}

export default Form
