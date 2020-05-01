import { TeamsById, ITeam, IUser } from '../../../../types'
import { IntlShape } from 'react-intl'
import messages from './messages'

export const teamsToOptions = (teamsAndUserById: TeamsById) =>
  Object.values(teamsAndUserById).map((team: ITeam | IUser) => ({
    key: team._id,
    value: team._id,
    text: team.name
  }))

export const getDropdownTitle = (
  teamsAndUserById: TeamsById,
  intl: IntlShape,
  chosenTeam?: string
) =>
  chosenTeam
    ? teamsAndUserById[chosenTeam].name
    : intl.formatMessage(messages.belongsToTitle)
