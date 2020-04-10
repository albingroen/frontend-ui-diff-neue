import * as React from 'react'
import { IProject, ITeam } from '../../../../../types'
import { Grid } from '@primer/components'
import Project from '../project'

interface IListProps {
  projects: IProject[];
  teamsById: { [key: string]: ITeam };
}

const List: React.FC<IListProps> = ({ projects, teamsById }) => (
  <Grid mt={3} gridTemplateColumns="repeat(3, auto)" gridGap={3}>
    {projects.map((project: IProject) => (
      <Project key={project._id} project={project} teamsById={teamsById} />
    ))}
  </Grid>
)

export default List
