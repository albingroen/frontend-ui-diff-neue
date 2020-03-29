import * as React from 'react'
import { Box, Grid, TextInput, Flex, Button } from '@primer/components'
import { IProject } from '../../../../types'
import NewProject from './components/new-project'
import Project from './components/project'
import { Card } from '../../../../components'

interface IProjectsProps {
  projects: IProject[]
}

const Projects: React.FC<IProjectsProps> = ({ projects }) => {
  const [search, setSearch] = React.useState<string>()

  const filterProjects = (project: IProject) => (
    project.name.toLowerCase().includes(search?.toLowerCase() || '')
  )

  return (
    <Box>
      {projects?.length > 0 && (
        <>
          <Card shadowed>
            <Flex alignItems="stretch" justifyContent="space-between">
              <TextInput
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search projects"
              />

              <Button>Create project</Button>
            </Flex>
          </Card>

          <Grid mt={3} gridTemplateColumns="repeat(3, auto)" gridGap={3}>
            {projects.filter(filterProjects).map((project: IProject) => (
              <Project key={project._id} {...project} />
            ))}
          </Grid>
        </>
      )}

      <NewProject />
    </Box>
  )
}

export default Projects
