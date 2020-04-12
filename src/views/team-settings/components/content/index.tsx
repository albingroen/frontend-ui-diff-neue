import * as React from 'react'
import { VerticalMenu } from '../../../../components'
import { ITeam } from '../../../../types'

interface IContentProps {
  team: ITeam;
}

const Content: React.FC<IContentProps> = ({ team }) => {
  return (
    <div>
      <VerticalMenu
        items={[
          {
            link: `/teams/${team._id}/settings/general`,
            text: 'General',
            subItems: [
              {
                link: window.location.pathname + '#naming',
                text: 'Naming'
              }
            ]
          },
          {
            link: `/teams/${team._id}/settings/billing`,
            text: 'Billing'
          }
        ]}
      />
    </div>
  )
}

export default Content
