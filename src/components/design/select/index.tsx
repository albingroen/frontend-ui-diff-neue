import * as React from 'react'
import { Dropdown, Flex, Text } from '@primer/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

interface IOption {
  text: string;
  value: string;
  key: string | number;
}

interface ISelectProps {
  options: IOption[];
  title: string;
  ariaLabel: string;
  onChange: (value?: string) => void;
  value?: string;
}

export const Select: React.FC<ISelectProps> = ({
  title,
  value,
  ariaLabel,
  options,
  onChange
}) => (
  <Dropdown
    value={value || ''}
    style={{ minWidth: '125px' }}
    aria-label={ariaLabel}
    title={title}
    key={value}
  >
    <Dropdown.Menu direction="sw">
      {options.map((option: IOption, i: number) => {
        const isChosen = option.value === value
        const last = options.length - 1

        return (
          <Dropdown.Item
            key={option.key}
            value={option.value}
            style={{
              cursor: 'pointer',
              borderBottom: i !== last ? '1px solid #eee' : 'none',
              padding: '0.65rem',
              fontSize: '1em'
            }}
            onClick={() => {
              onChange(isChosen ? undefined : option.value)
            }}
          >
            <Flex pl={isChosen ? 0 : 2} alignItems="center">
              <Text fontSize={1} mr={1}>
                {isChosen && <FontAwesomeIcon icon={faCheck} />}
              </Text>
              {option.text}
            </Flex>
          </Dropdown.Item>
        )
      })}
    </Dropdown.Menu>
  </Dropdown>
)
