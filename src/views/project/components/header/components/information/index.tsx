import * as React from 'react'
import { useIntl } from 'react-intl'
import { IProject } from '../../../../../../types'
import { Statistics } from '../../../../../../components'
import { UserContext } from '../../../../../../context/userContext'
import { TeamsContext } from '../../../../../../context/teamsContext'
import { getInformation } from './lib'

interface IInformationProps {
  project: IProject;
}

interface IInfo {
  label: string;
  value: any;
  key: number;
}

const Information: React.FC<IInformationProps> = ({ project }) => {
  const intl = useIntl()
  const { user } = React.useContext(UserContext)
  const { teamsById } = React.useContext(TeamsContext)
  const information = getInformation(project, teamsById, user, intl)

  return <Statistics statistics={information} />
}

export default Information
