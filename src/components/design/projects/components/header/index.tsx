import * as React from 'react'
import { Flex, TextInput, Button } from '@primer/components'
import { Card } from '../../../..'
import { Link } from 'react-router-dom'

interface IHeaderProps {
  onSearch: (value: string) => void;
  search: string;
}

const Header: React.FC<IHeaderProps> = ({ search, onSearch }) => (
  <Card shadowed>
    <Flex alignItems="stretch" justifyContent="space-between">
      <TextInput
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search projects"
      />

      <Link to="/new-project">
        <Button>Create project</Button>
      </Link>
    </Flex>
  </Card>
)

export default Header
