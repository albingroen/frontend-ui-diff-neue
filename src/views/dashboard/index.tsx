import * as React from "react";
import { Heading, Button } from "@primer/components";
import { UserContext, IUserContext } from "../../context/userContext";
import { logout, login } from "../../lib/auth";

export const Dashboard: React.FC = () => {
  const { userId } = React.useContext<IUserContext>(UserContext);

  return (
    <div>
      <Heading>Welcome, {userId}</Heading>
      <Button
        onClick={async () => {
          if (userId) {
            await logout();
          } else {
            await login();
          }
        }}
      >
        {userId ? "Log out" : "Log in"}
      </Button>
    </div>
  );
};
