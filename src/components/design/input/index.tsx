import * as React from 'react'
import { Text, Box, TextInput } from '@primer/components'

interface IInputProps {
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  placeholder?: string;
  label?: string;
  value?: string;
  ariaLabel?: string;
  error?: string;
  description?: string;
  type?: string;
  required?: boolean;
}

export const Input: React.FC<IInputProps> = ({
  label,
  error,
  description,
  ...rest
}) => {
  return (
    <Box>
      {label && (
        <Box mb={1}>
          <Text>{label}</Text>
        </Box>
      )}

      <TextInput block variant="large" {...rest} />

      {description && (
        <Box mt={1}>
          <Text fontSize={1} opacity={0.75}>
            {description}
          </Text>
        </Box>
      )}

      {error && (
        <Box mt={1}>
          <Text fontSize={1} color="red.5">
            {error}
          </Text>
        </Box>
      )}
    </Box>
  )
}
