import * as React from 'react'
import { ITeam } from '../../../../types'
import { Grid } from '@primer/components'
import Team from '../team'

interface IListProps {
  teams: ITeam[];
}

const List: React.FC<IListProps> = ({ teams }) => {
  return (
    <Grid mt={3} gridTemplateColumns="repeat(3, auto)" gridGap={3}>
      {teams.map((team: ITeam) => (
        <Team key={team._id} team={team} />
      ))}
    </Grid>
  )
}

export default List
