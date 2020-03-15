import * as React from "react";
import { Redirect } from "react-router-dom";
import messages from "./messages";
import styled from "styled-components";
import { Heading, Text, Button, Flex, Box } from "@primer/components";
import { FormattedMessage, MessageDescriptor } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signupMethods, SignupMethod } from "./signupMethods";
import { Logo } from "../../components";
import features from "./features";
import { Chunk } from "../../types";
import { AppContext, IAppContext } from "../../context";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

const Sidebar = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 450px;
  background: ${props => props?.theme?.colors?.white};
  padding: ${props => props?.theme?.space[5]}px;
  border-right: 1px solid ${props => props?.theme?.colors?.border.gray};
`;

const Other = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props?.theme?.colors?.black};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Icon = styled.div`
  position: absolute;
  right: ${props => props?.theme?.space[2]}px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Signup: React.FC = () => {
  const { logIn, loggedIn }: IAppContext = React.useContext(AppContext);

  return !loggedIn ? (
    <Wrapper>
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
            <Button
              onClick={() => logIn()}
              variant="large"
              key={method.name.id}
              my={1}
            >
              <FormattedMessage {...method.name} />
              <Icon>
                <FontAwesomeIcon icon={method.icon} />
              </Icon>
            </Button>
          ))}
        </Flex>

        <Text lineHeight={1.5} color="gray.5" as="p" my={4} fontSize={1}>
          <FormattedMessage {...messages.policy} />
        </Text>
      </Sidebar>

      <Other>
        <Flex maxWidth="400px" flexDirection="column">
          <Heading>Screenshot testing the way it is supposed to be</Heading>
          <Box my={3} maxWidth="300px">
            {features.map((feature: MessageDescriptor) => (
              <Text lineHeight={1.5} as="p" my={2} key={feature.id}>
                <FormattedMessage
                  {...feature}
                  values={{
                    strong: (...chunks: Chunk) => <strong>{chunks}</strong>
                  }}
                />
              </Text>
            ))}
          </Box>
        </Flex>
      </Other>
    </Wrapper>
  ) : (
    <Redirect to="/" />
  );
};
