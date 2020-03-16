import * as React from "react";
import { Heading } from "@primer/components";
import { UserContext, IUserContext } from "../../context/userContext";

export const Dashboard: React.FC = () => {
  const { userId } = React.useContext<IUserContext>(UserContext);

  return (
    <div>
      <Heading>Welcome, {userId}</Heading>
    </div>
  );
};
