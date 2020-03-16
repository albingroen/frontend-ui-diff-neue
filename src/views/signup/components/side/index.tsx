import * as React from "react";
import queryString from "query-string";
import { Logo } from "../../../../components";
import { Heading, Flex, Text } from "@primer/components";
import { FormattedMessage } from "react-intl";
import messages from "../../messages";
import { signupMethods, SignupMethod } from "../../signupMethods";
import SignupMethodButton from "./components/signup-method-button";
import styled from "styled-components";
import auth from "../../../../lib/auth";

const Sidebar = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 450px;
  background: ${props => props?.theme?.colors?.white};
  padding: ${props => props?.theme?.space[5]}px;
  border-right: 1px solid ${props => props?.theme?.colors?.border.gray};
`;

const Side = () => {
  React.useEffect(() => {
    const { code, method } = queryString.parse(window.location.search);

    if (code && typeof code === "string") {
      switch (method) {
        case 'github':
          auth.github.signup(code);
          break;
        case 'gitlab':
          auth.gitlab.signup(code);
      }
    }
  }, []);

  return (
    <Sidebar>
      <Logo width="35px" />
      <Heading my={3}>
        <FormattedMessage {...messages.heading} />
      </Heading>
      <hr />
      <Text py={3} as="p" lineHeight={1.5}>
        <FormattedMessage {...messages.lede} />
      </Text>
      <Heading color="green.5" mt={2} fontSize={3}>
        <FormattedMessage {...messages.subHeading} />
      </Heading>

      <Flex my={2} flexDirection="column">
        {signupMethods.map((method: SignupMethod) => (
          <SignupMethodButton
            onClick={() => method.onClick && method.onClick()}
            key={method.name.id}
            method={method}
          />
        ))}
      </Flex>

      <Text lineHeight={1.5} color="gray.5" as="p" my={4} fontSize={1}>
        <FormattedMessage {...messages.policy} />
      </Text>
    </Sidebar>
  );
};

export default Side;
