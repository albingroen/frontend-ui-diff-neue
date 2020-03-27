import * as React from 'react'
import styled from 'styled-components'
import { IHeaderList, IHeaderListItem, Header as IHeader } from './types'

const HeaderRoot = styled.nav`
  background-color: ${(props) => props?.theme?.colors?.black};
  width: 100%;
`

const HeaderListWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const HeaderList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  padding: 0 ${(props) => props?.theme?.space[2]}px;

  &:first-child {
    padding-left: 0px;
  }

  &:last-child {
    padding-right: 0px;
  }
`

interface IHeaderProps {
  lists: IHeader;
}

export const Header: React.FC<IHeaderProps> = ({ lists }) => (
  <HeaderRoot>
    <HeaderListWrapper>
      {lists &&
          lists.map((list: IHeaderList) => (
            <HeaderList key={list.key}>
              {list.items?.map((listItem: IHeaderListItem) => listItem.node)}
            </HeaderList>
          ))}
    </HeaderListWrapper>
  </HeaderRoot>
)
