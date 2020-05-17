import * as React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as UIDiffLogo } from '../../../static/logo.svg'

interface ILogoProps {
  width: string;
  withLink?: boolean;
  style?: React.CSSProperties;
}

const LogoComponent: React.FC<{
  width: string;
  style?: React.CSSProperties;
}> = ({ width, style }) => (
  <UIDiffLogo
    width={width}
    height={width}
    style={{ borderRadius: '50%', ...style }}
  />
)

export const Logo: React.FC<ILogoProps> = ({ width, withLink, style }) =>
  withLink ? (
    <Link to="/">
      <LogoComponent style={style} width={width} />
    </Link>
  ) : (
    <LogoComponent style={style} width={width} />
  )
