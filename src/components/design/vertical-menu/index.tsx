import * as React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Card } from '../..'

interface IVerticalMenuSubItem {
  text: string;
  link: string;
}

interface IVerticalMenuItem {
  text: string;
  link: string;
  subItems?: IVerticalMenuSubItem[];
}

interface IVerticalMenuProps {
  items: IVerticalMenuItem[];
}

interface IVerticalMenuItemProps {
  active: boolean;
}

const VerticalMenuItem = styled.div`
  min-width: 225px;
  padding: 0.5rem;
  font-size: 0.875em;
  border-bottom: 1px solid #eee;
  ${(props: IVerticalMenuItemProps) =>
    props.active &&
    css`
      border-left: 2px solid green;
      font-weight: bold;
    `}

  &:hover {
    background: ${(props) => props?.theme?.colors?.bg?.grayLight};
  }
`

const VerticalSubMenuItem = styled.div`
  padding: 0.5rem;
  font-size: 0.75em;
  border-bottom: 1px solid #eee;
  padding-left: 1.5rem;
  background: ${(props) => props?.theme?.colors?.bg?.grayLight};
  ${(props: IVerticalMenuItemProps) =>
    props.active &&
    css`
      font-weight: bold;
    `}

  &:hover {
    background: ${(props) => props?.theme?.colors?.bg?.grayLight};
  }
`

export const VerticalMenu: React.FC<IVerticalMenuProps> = ({ items }) => {
  return (
    <Card bordered withoutPadding>
      {items.map((item: IVerticalMenuItem) => {
        const itemIsActive = window.location.pathname === item.link

        return (
          <>
            <Link to={item.link} key={item.text}>
              <VerticalMenuItem active={itemIsActive}>
                {item.text}
              </VerticalMenuItem>
            </Link>
            {itemIsActive &&
              item.subItems?.map((subItem: IVerticalMenuSubItem) => (
                <Link to={subItem.link} key={subItem.text}>
                  <VerticalSubMenuItem
                    active={
                      window.location.pathname === subItem.link ||
                      window.location.pathname + window.location.hash ===
                        subItem.link
                    }
                  >
                    {subItem.text}
                  </VerticalSubMenuItem>
                </Link>
              ))}
          </>
        )
      })}
    </Card>
  )
}
