import * as React from "react";
import { ReactComponent as UIDiffLogo } from "../../static/logo.svg";

interface ILogoProps {
  width: string
}

export const Logo: React.FC<ILogoProps> = ({ width }) => {
  return <UIDiffLogo width={width} height={width} />;
};
