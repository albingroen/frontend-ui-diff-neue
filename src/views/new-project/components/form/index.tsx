import * as React from 'react'
import { TextInput, Flex, ButtonPrimary } from '@primer/components'
import { Section, Select } from '../../../../components'
import { useIntl, FormattedMessage } from 'react-intl'
import { TeamsContext } from '../../../../context/teamsContext'
import { ITeam, IUser } from '../../../../types'
import { UserContext } from '../../../../context/userContext'
import messages from './messages'

const Form = () => {
  const intl = useIntl()
  const { user } = React.useContext(UserContext)
  const { teamsById } = React.useContext(TeamsContext)

  const teamsAndUserById = {
    ...teamsById,
    [user._id]: user
  }

  // State
  const [chosenTeam, setChosenTeam] = React.useState<string | undefined>()
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
              title={
                chosenTeam ? teamsAndUserById[chosenTeam].name : intl.formatMessage(messages.belongsToTitle)
              }
              options={
                Object.values(teamsAndUserById).map((team: ITeam | IUser) => (
                  { key: team._id, value: team._id, text: team.name }
                ))
              }
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
