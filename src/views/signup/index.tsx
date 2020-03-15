import * as React from "react";
import styled from "styled-components";
import { Heading, Text, Button, Flex } from "@primer/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signupMethods, SignupMethod } from "./signupMethods";
import { Logo } from "../../components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
`;

const Sidebar = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 450px;
  background: ${props => props?.theme?.colors?.white};
  padding: ${props => props?.theme?.space[4]}px;
  border-right: 1px solid ${props => props?.theme?.colors?.border.gray};
`;

const Other = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props?.theme?.colors?.black};
`;

const Icon = styled.div`
  position: absolute;
  right: ${props => props?.theme?.space[2]}px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Signup: React.FC = () => {
  return (
    <Wrapper>
      <Sidebar>
        <Logo width="35px" />

        <Heading my={3}>Signup to ui-diff</Heading>
        <hr/>
        <Text py={3} as="p" lineHeight={1.5}>
          Start on our free plan which gives you unlimited projects. If you are
          a GitHub user and not ready for private projects, choose public repos.
        </Text>

        <Heading color="green.5" mt={2} fontSize={3}>
          Start testing
        </Heading>

        <Flex my={2} flexDirection="column">
          {signupMethods.map((method: SignupMethod) => (
            <Button key={method.name} my={1}>
              {method.name}
              <Icon>
                <FontAwesomeIcon icon={method.icon} />
              </Icon>
            </Button>
          ))}
        </Flex>

        <Text lineHeight={1.5} color="gray.5" as="p" my={4} fontSize={1}>
          By signing up, you are agreeing to our Terms of Service and Privacy
          Policy. We ask for read/write access to make your experience seamless
          on ui-diff.
        </Text>
      </Sidebar>
      <Other />
    </Wrapper>
  );
};
