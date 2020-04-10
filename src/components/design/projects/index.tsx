import * as React from 'react'
import { IProject } from '../../../types'
import NewProject from './components/new-project'
import Header from './components/header'
import List from './components/list'

interface IProjectsProps {
  projects: IProject[];
  includeFilter?: boolean;
  includeCreateNew?: boolean;
}

const Projects: React.FC<IProjectsProps> = ({
  projects,
  includeFilter,
  includeCreateNew
}) => {
  const [search, setSearch] = React.useState<string>()

  const filterProjects = (project: IProject) =>
    project?.name?.toLowerCase().includes(search?.toLowerCase() || '')

  return (
    <div>
      {projects?.length > 0 && (
        <>
          {includeFilter && <Header onSearch={setSearch} search={search} />}
          <List
            projects={
              includeFilter ? projects.filter(filterProjects) : projects
            }
          />
        </>
      )}

      {includeCreateNew && <NewProject />}
    </div>
  )
}

export default Projects
