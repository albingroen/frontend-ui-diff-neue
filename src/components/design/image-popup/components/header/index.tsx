import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExchangeAlt,
  faAngleLeft,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons'
import {
  Dialog,
  Flex,
  Text,
  Heading,
  ButtonGroup,
  Button
} from '@primer/components'
import { defineMessage, IntlShape } from 'react-intl'
import { IActiveImages, ImageBrowseDir } from '../../../../../types'
import { IOptionGroup } from '../../../select'
import { Select } from '../../../..'

export const messages = defineMessage({
  chooseEnvironment: {
    defaultMessage: 'Choose a environment',
    id: 'components.design.image-popup.header.choose-environment'
  }
})

interface IHeaderProps {
  intl: IntlShape;
  activeImages: IActiveImages;
  onChangeFromEnv: (env: string) => void;
  onChangeToEnv: (env: string) => void;
  onBrowse: (dir: ImageBrowseDir) => void;
  dropdownOptions: IOptionGroup[];
}

const Header: React.FC<IHeaderProps> = ({
  activeImages,
  intl,
  dropdownOptions,
  onChangeFromEnv,
  onChangeToEnv,
  onBrowse
}) => (
  <Dialog.Header>
    <Flex width="100%" alignItems="center" justifyContent="space-between">
      <Flex alignItems="center">
        <Heading fontSize={3} mr={4}>
          {activeImages?.from?.name || activeImages?.to?.name}
        </Heading>

        <ButtonGroup>
          <Button onClick={() => onBrowse('prev')}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
          <Button onClick={() => onBrowse('next')}>
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        </ButtonGroup>
      </Flex>

      <Flex alignItems="center" pr={5}>
        <Select
          ariaLabel="from-environment"
          title={
            activeImages?.from
              ? `${activeImages?.from?.name} (${activeImages?.from?.env})`
              : intl.formatMessage(messages.chooseEnvironment)
          }
          value={activeImages?.from?.env}
          onChange={(env?: string) => {
            if (env) {
              onChangeFromEnv(env)
            }
          }}
          options={dropdownOptions}
        />
        <Text opacity={0.5} px={3}>
          <FontAwesomeIcon icon={faExchangeAlt} />
        </Text>
        <Select
          ariaLabel="to-environment"
          title={
            activeImages?.to
              ? `${activeImages?.to?.name} (${activeImages?.to?.env})`
              : intl.formatMessage(messages.chooseEnvironment)
          }
          value={activeImages?.to?.env}
          onChange={(env?: string) => {
            if (env) {
              onChangeToEnv(env)
            }
          }}
          options={dropdownOptions}
        />
      </Flex>
    </Flex>
  </Dialog.Header>
)

export default Header
