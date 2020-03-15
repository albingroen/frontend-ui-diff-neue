import * as React from "react";
import { getGhAuthUrl } from "../../../../lib/auth";
import { Logo } from "../../../../components";
import { Heading, Flex, Text } from "@primer/components";
import { FormattedMessage } from "react-intl";
import messages from "../../messages";
import { signupMethods, SignupMethod } from "../../signupMethods";
import SignupMethodButton from "./components/signup-method-button";
import styled from "styled-components";

const Sidebar = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 450px;
  background: ${props => props?.theme?.colors?.white};
  padding: ${props => props?.theme?.space[5]}px;
  border-right: 1px solid ${props => props?.theme?.colors?.border.gray};
`;

const Side = () => {
  // Store auth url
  const [ghAuthUrl, setGhAuthUrl] = React.useState();

  // Get gh auth url on mount
  React.useEffect(() => {
    (async () => {
      const newGhAuthUrl = await getGhAuthUrl();
      if (newGhAuthUrl) {
        setGhAuthUrl(newGhAuthUrl);
      }
    })();
  }, []);

  // Navigate to gh auth page
  const handleClickButton = () => {
    if (ghAuthUrl) {
      window.location.replace(ghAuthUrl || "");
    }
  };

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
        {signupMethods.map((method: SignupMethod, i: number) => (
          <SignupMethodButton
            onClick={handleClickButton}
            key={method.name.id}
            method={method}
            index={i}
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
