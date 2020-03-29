import * as React from 'react'
import { IProject } from '../../../../../../types'
import { Grid } from '@primer/components'
import Project from '../project'

interface IListProps {
  projects: IProject[];
}

const List: React.FC<IListProps> = ({ projects }) => (
  <Grid mt={3} gridTemplateColumns="repeat(3, auto)" gridGap={3}>
    {projects.map((project: IProject) => (
      <Project key={project._id} {...project} />
    ))}
  </Grid>
)

export default List
