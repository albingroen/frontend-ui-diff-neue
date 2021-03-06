import * as React from 'react'
import styled from 'styled-components'
import { IHeaderList, IHeaderListItem, Header as IHeader } from './types'

const HeaderRoot = styled.nav`
  background-color: #222;
  height: 70px;
`

const HeaderListWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  height: 70px;
  max-width: 1150px;
`

const HeaderList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
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
