import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Grid, Heading, Flex, Link as StyledLink } from '@primer/components'
import { RouteComponentProps, Redirect, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faImages, faUsers } from '@fortawesome/free-solid-svg-icons'
import { ProjectsContext } from '../../context/projectsContext'
import { TeamsContext } from '../../context/teamsContext'
import Projects from '../../components/design/projects'
import Header from './components/header'
import { Members } from '../../components'
import { defineMessages, FormattedMessage, useIntl } from 'react-intl'

const messages = defineMessages({
  projects: {
    defaultMessage: 'Projects ({amount})',
    id: 'team.projects'
  },
  members: {
    defaultMessage: 'Members ({amount})',
    id: 'team.members'
  },
  notFound: {
    defaultMessage: 'Team not found...',
    id: 'team.not-found'
  },
  manageMembers: {
    defaultMessage: 'Manage',
    id: 'team.members.manage'
  }
})

export const Team: React.FC<RouteComponentProps> = (props) => {
  const intl = useIntl()
  const { id } = props.match.params as any
  const { teamsById } = React.useContext(TeamsContext)
  const { projectsById, projects } = React.useContext(ProjectsContext)
  const team = teamsById[id]

  // Return if invalid team
  if (teamsById) {
    if (Object.keys(teamsById)?.length) {
      if (!teamsById[id]?._id) {
        return <Redirect to="/teams" />
      }
    }
  }

  // Find team projects
  const teamProjects = projects
    .filter((pId: string) => projectsById[pId]._team === id)
    .map((pId: string) => projectsById[pId])

  return (
    <div>
      <Helmet>
        <title>
          {intl.formatMessage({
            defaultMessage: team?.name ? `${team.name} | ui-diff` : 'ui-diff',
            id: 'team.seo.title'
          })}
        </title>
      </Helmet>

      <Header team={team} />

      <Grid gridTemplateColumns="repeat(2, auto)" gridGap={4}>
        <div>
          <Heading fontSize={2} mb={3}>
            <FontAwesomeIcon icon={faImages} />
            <span style={{ marginLeft: '0.75rem' }}>
              <FormattedMessage
                {...messages.projects}
                values={{ amount: teamProjects?.length || 0 }}
              />
            </span>
          </Heading>
          <Projects
            projects={teamProjects}
            includeCreateNew={!teamProjects.length}
            includeFilter={teamProjects?.length > 0}
          />
        </div>

        <div>
          <Flex alignItems="center" justifyContent="space-between" mb={3}>
            <Heading fontSize={2}>
              <FontAwesomeIcon icon={faUsers} />
              <span style={{ marginLeft: '0.75rem' }}>
                <FormattedMessage
                  {...messages.members}
                  values={{ amount: team?.members?.length || 0 }}
                />
              </span>
            </Heading>
            <Link to={`/teams/${team?._id}/members`}>
              <StyledLink as="p" fontSize={2}>
                <FormattedMessage {...messages.manageMembers} />
              </StyledLink>
            </Link>
          </Flex>
          <Members members={team?.members} />
        </div>
      </Grid>
    </div>
  )
}
