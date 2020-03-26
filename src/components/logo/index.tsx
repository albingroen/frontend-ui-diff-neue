import * as React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as UIDiffLogo } from '../../static/logo.svg'

interface ILogoProps {
  width: string;
  withLink?: boolean
}

const LogoComponent: React.FC<{ width: string }> = ({ width }) => (
  <UIDiffLogo width={width} height={width} style={{ borderRadius: '50%' }} />
)

export const Logo: React.FC<ILogoProps> = ({ width, withLink }) => (withLink ? (
  <Link to="/">
    <LogoComponent width={width} />
  </Link>
) : (
  <LogoComponent width={width} />
))
