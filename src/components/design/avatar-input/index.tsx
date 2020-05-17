import * as React from 'react'
import { Text, Box, Avatar, Flex } from '@primer/components'

interface IAvatarInputProps {
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  label?: string;
  value?: string;
  ariaLabel?: string;
  error?: string;
  description?: string;
  required?: boolean;
}

export const AvatarInput: React.FC<IAvatarInputProps> = ({
  label,
  error,
  description,
  value,
  ...rest
}) => {
  return (
    <Box>
      {label && (
        <Box mb={1}>
          <Text>{label}</Text>
        </Box>
      )}

      <Flex alignItems="flex-end" mt={2} mb={description ? 1 : 2}>
        <Avatar mr={3} src={value} size={75} />
        <input
          type="file"
          id="avatar"
          name="avatar"
          accept="image/png, image/jpeg"
          {...rest}
        ></input>
      </Flex>

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
