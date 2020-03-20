import * as React from "react";
import { Heading } from "@primer/components";
import { UserContext, IUserContext } from "../../context/userContext";
import { request } from "../../lib";

export const Dashboard: React.FC = () => {
  const { userId } = React.useContext<IUserContext>(UserContext);

  React.useEffect(() => {
    request.get('/users').then((res) => {
      console.log(res)
    })
  }, [])

  return (
    <div>
      <Heading>Welcome, {userId}</Heading>
    </div>
  );
};
