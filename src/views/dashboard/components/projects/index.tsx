import * as React from 'react'
import { Box } from '@primer/components'
import { IProject } from '../../../../types'
import NewProject from './components/new-project'
import Header from './components/header'
import List from './components/list'

interface IProjectsProps {
  projects: IProject[];
}

const Projects: React.FC<IProjectsProps> = ({ projects }) => {
  const [search, setSearch] = React.useState<string>()

  const filterProjects = (project: IProject) =>
    project?.name?.toLowerCase().includes(search?.toLowerCase() || '')

  return (
    <Box>
      {projects?.length > 0 && (
        <>
          <Header onSearch={setSearch} search={search} />
          <List projects={projects.filter(filterProjects)} />
        </>
      )}

      <NewProject />
    </Box>
  )
}

export default Projects
