import * as React from 'react'
import { IProject, ITeam } from '../../../../../types'
import { Grid } from '@primer/components'
import Project from '../project'

interface IListProps {
  projects: IProject[];
  teamsById: { [key: string]: ITeam };
  includeBelonger?: boolean;
}

const List: React.FC<IListProps> = ({
  projects,
  teamsById,
  includeBelonger
}) => (
  <Grid mt={3} gridTemplateColumns="repeat(2, auto)" gridGap={3} mb={4}>
    {projects.map((project: IProject) => (
      <Project
        key={project._id}
        project={project}
        teamsById={teamsById}
        includeBelonger={includeBelonger}
      />
    ))}
  </Grid>
)

export default List
