import * as React from 'react'
import { SelectMenu, Button } from '@primer/components'

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
  <SelectMenu aria-label={ariaLabel}>
    <Button as="summary">{title}</Button>
    <SelectMenu.Modal>
      <SelectMenu.Header>Teams</SelectMenu.Header>
      <SelectMenu.List>
        {options.map((option: IOption) => (
          <SelectMenu.Item
            onClick={() => onChange(option.value)}
            selected={option.value === value}
            key={option.value}
          >
            {option.text}
          </SelectMenu.Item>
        ))}
      </SelectMenu.List>
    </SelectMenu.Modal>
  </SelectMenu>
)
