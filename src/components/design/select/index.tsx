import * as React from 'react'
import { SelectMenu, Button } from '@primer/components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

interface IOption {
  text: string;
  value: string;
  key: string | number;
}

interface IOptionGroup {
  title: string;
  options: IOption[];
  key: string | number;
}

interface ISelectProps {
  options: IOptionGroup[];
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
  <SelectMenu aria-label={ariaLabel}>
    <Button as="summary">
      {title}{' '}
      <i style={{ marginLeft: '0.75rem' }}>
        <FontAwesomeIcon icon={faCaretDown} />
      </i>
    </Button>
    <SelectMenu.Modal>
      {options.map((optionGroup: IOptionGroup) => (
        <React.Fragment key={optionGroup.key}>
          <SelectMenu.Header>{optionGroup.title}</SelectMenu.Header>
          <SelectMenu.List>
            {optionGroup.options.map((option: IOption) => (
              <SelectMenu.Item
                onClick={() => onChange(option.value)}
                selected={option.value === value}
                key={option.value}
              >
                {option.text}
              </SelectMenu.Item>
            ))}
          </SelectMenu.List>
        </React.Fragment>
      ))}
    </SelectMenu.Modal>
  </SelectMenu>
)
