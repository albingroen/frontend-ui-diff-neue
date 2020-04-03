import * as React from 'react'
import { Dropdown } from '@primer/components'

interface IOption {
  text: string
  value: string
  key: string | number
}

interface ISelectProps {
  options: IOption[]
  value?: string
  title: string
  ariaLabel: string
  onChange: (value?: string) => void
}

export const Select: React.FC<ISelectProps> = ({ title, value, ariaLabel, options, onChange }) => (
  <Dropdown
    value={value || ''}
    style={{ minWidth: '125px' }}
    aria-label={ariaLabel}
    title={title}
    key={value}
  >
    <Dropdown.Menu direction="sw">
      {options.map((option: IOption) => {
        const isChosen = option.value === value

        return (
          <Dropdown.Item
            p={1}
            key={option.key}
            value={option.value}
            style={{ cursor: 'pointer' }}
            onClick={() => {
              onChange(isChosen ? undefined : option.value)
            }}
          >
            {option.text}
          </Dropdown.Item>
        )
      })}
    </Dropdown.Menu>
  </Dropdown>
)
