import * as React from 'react'
import { Button } from '@primer/components'
import { FormattedMessage } from 'react-intl'
import { SignupMethod } from '../../../../signupMethods'
import { ButtonIcon } from '../../../../../../components'

interface ISignupMethodButtonProps {
  method: SignupMethod;
  onClick: () => void;
}

const SignupMethodButton: React.FC<ISignupMethodButtonProps> = ({
  method,
  onClick
}) => (
  <Button
    disabled={!method.onClick}
    variant="large"
    key={method.name.id}
    my={1}
    style={method.style}
    onClick={onClick}
  >
    <ButtonIcon icon={method.icon} />
    <FormattedMessage {...method.name} />
  </Button>
)

export default SignupMethodButton
