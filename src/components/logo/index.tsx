import * as React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as UIDiffLogo } from "../../static/logo.svg";

interface ILogoProps {
  width: string;
  withLink?: boolean
}

export const Logo: React.FC<ILogoProps> = ({ width, withLink }) => {
  return withLink ? (
    <Link to="/">
      <UIDiffLogo width={width} height={width} style={{ borderRadius: "50%" }} />
    </Link>
  ) : (
    <UIDiffLogo width={width} height={width} style={{ borderRadius: "50%" }} />
  );
};
