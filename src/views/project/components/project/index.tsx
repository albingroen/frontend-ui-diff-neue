import * as React from 'react'
import { Section } from '../../../../components'
import messages from './messages'
import { IProject } from '../../../../types'
import { TextInput, ButtonPrimary } from '@primer/components'
import { useFormState } from 'react-use-form-state'
import { ProjectsContext } from '../../../../context/projectsContext'

interface ISettingsProps {
  project: IProject;
}

const Settings: React.FC<ISettingsProps> = ({ project }) => {
  const [formState, { text }] = useFormState(
    { name: project?.name },
    { withIds: true }
  )
  const { patchProject } = React.useContext(ProjectsContext)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    await patchProject(project?._id, formState.values)
  }

  return (
    <Section title={messages.heading} lede={messages.lede}>
      <form onSubmit={onSubmit}>
        <TextInput {...text('name')} placeholder="Name" width="100%" />
        <ButtonPrimary type="submit" mt={3} style={{ width: '100%' }}>
          Save
        </ButtonPrimary>
      </form>
    </Section>
  )
}

export default Settings
