import * as React from 'react'
import { TextInput, Flex, ButtonPrimary } from '@primer/components'
import { Section, Select } from '../../../../components'
import messages from './messages'
import { useIntl } from 'react-intl'
import { TeamsContext } from '../../../../context/teamsContext'
import { ITeam } from '../../../../types'

const Form = () => {
  const intl = useIntl()
  const { teamsById } = React.useContext(TeamsContext)

  // State
  const [chosenTeam, setChosenTeam] = React.useState<string>()

  return (
    <>
      <Section title={messages.ownerNameTitle} lede={messages.ownerNameLede}>
        <Flex alignItems="center">
          <Select
            ariaLabel="owner"
            onChange={(newValue: string) => setChosenTeam(newValue)}
            value={chosenTeam}
            title={
              chosenTeam ? teamsById[chosenTeam].name : intl.formatMessage(messages.belongsToTitle)
            }
            options={
              Object.values(teamsById).map((team: ITeam) => (
                { key: team._id, value: team._id, text: team.name }
              ))
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
