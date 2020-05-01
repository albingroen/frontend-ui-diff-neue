import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { Dialog, Flex, Text } from '@primer/components'
import { defineMessage, IntlShape } from 'react-intl'
import { IActiveImages } from '../../../../../types'
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
  dropdownOptions: IOptionGroup[];
}

const Header: React.FC<IHeaderProps> = ({
  activeImages,
  intl,
  dropdownOptions,
  onChangeFromEnv,
  onChangeToEnv
}) => (
  <Dialog.Header>
    <Flex width="100%" alignItems="center" justifyContent="space-between">
      <span>Compare your images</span>
      <Flex alignItems="center" pr={5}>
        <Select
          ariaLabel="from-environment"
          title={
            activeImages?.from?.env ||
            intl.formatMessage(messages.chooseEnvironment)
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
            activeImages?.to?.env ||
            intl.formatMessage(messages.chooseEnvironment)
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
