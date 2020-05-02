import * as React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExchangeAlt,
  faAngleLeft,
  faAngleRight,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import {
  Dialog,
  Flex,
  Text,
  Heading,
  ButtonGroup,
  Button,
  Tooltip
} from '@primer/components'
import { defineMessage, IntlShape } from 'react-intl'
import { IActiveImages, ImageBrowseDir } from '../../../../../types'
import { IOptionGroup } from '../../../select'
import { Select } from '../../../..'

export const messages = defineMessage({
  chooseEnvironment: {
    defaultMessage: 'Choose a environment',
    id: 'components.design.image-popup.header.choose-environment'
  },
  chooseBaseEnvironment: {
    defaultMessage: 'Choose the base environment',
    id: 'components.design.image-popup.header.choose-the-base-environment'
  },
  chooseComparisonEnvironment: {
    defaultMessage: 'Choose the environment to compare with',
    id:
      'components.design.image-popup.header.choose-the-comparison-environment'
  },
  clearComparison: {
    defaultMessage: 'Clear comparison',
    id: 'components.design.image-popup.header.clear-comparison'
  }
})

interface IHeaderProps {
  intl: IntlShape;
  activeImages: IActiveImages;
  onChangeFromEnv: (env: string) => void;
  onChangeToEnv: (env: string) => void;
  onBrowse: (dir: ImageBrowseDir) => void;
  onReset: () => void;
  dropdownOptions: IOptionGroup[];
}

const Header: React.FC<IHeaderProps> = ({
  activeImages,
  intl,
  dropdownOptions,
  onChangeFromEnv,
  onChangeToEnv,
  onBrowse,
  onReset
}) => (
  <Dialog.Header>
    <Flex width="100%" alignItems="center" justifyContent="space-between">
      <Flex alignItems="center">
        <Heading fontSize={3} mr={4}>
          {activeImages?.from?.name || activeImages?.to?.name}
        </Heading>
      </Flex>

      <Flex alignItems="center" pr={4}>
        <ButtonGroup>
          <Button onClick={() => onBrowse('prev')}>
            <FontAwesomeIcon icon={faAngleLeft} />
          </Button>
          <Button onClick={() => onBrowse('next')}>
            <FontAwesomeIcon icon={faAngleRight} />
          </Button>
        </ButtonGroup>

        <Flex alignItems="center" px={2}>
          <Tooltip
            aria-label={intl.formatMessage(messages.chooseBaseEnvironment)}
          >
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
          </Tooltip>

          <Text opacity={0.5} px={3}>
            <FontAwesomeIcon icon={faExchangeAlt} />
          </Text>

          <Tooltip
            aria-label={intl.formatMessage(
              messages.chooseComparisonEnvironment
            )}
          >
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
          </Tooltip>
        </Flex>

        {activeImages?.to && (
          <Tooltip aria-label={intl.formatMessage(messages.clearComparison)}>
            <Button onClick={onReset}>
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </Tooltip>
        )}
      </Flex>
    </Flex>
  </Dialog.Header>
)

export default Header
