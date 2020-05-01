import * as React from 'react'
import { useIntl } from 'react-intl'
import { Flex, Box } from '@primer/components'
import { Card } from '../../../../../../components'
import { IProject } from '../../../../../../types'
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

  return (
    <Card shadowed>
      <Flex>
        {getInformation(project, teamsById, user, intl).map((info: IInfo) => (
          <Flex key={info.key} flexDirection="column" mr={5}>
            <label>{info.label}</label>
            <Box mt={2}>{info.value}</Box>
          </Flex>
        ))}
      </Flex>
    </Card>
  )
}

export default Information
