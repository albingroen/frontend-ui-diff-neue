import * as React from "react";
import styled from "styled-components";
import { Button } from "@primer/components";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SignupMethod } from "../../../../signupMethods";

const Icon = styled.div`
  position: absolute;
  right: ${props => props?.theme?.space[2]}px;
  top: 50%;
  transform: translateY(-50%);
`;

interface ISignupMethodButtonProps {
  method: SignupMethod;
  onClick: () => void;
}

const SignupMethodButton: React.FC<ISignupMethodButtonProps> = ({
  method,
  onClick
}) => {
  return (
    <Button
      disabled={!method.onClick}
      variant="large"
      key={method.name.id}
      my={1}
      onClick={onClick}
    >
      <FormattedMessage {...method.name} />
      <Icon>
        <FontAwesomeIcon icon={method.icon} />
      </Icon>
    </Button>
  );
};

export default SignupMethodButton;
