import * as React from 'react'
import styled, { css } from 'styled-components'
import { BorderBox, Box } from '@primer/components'

interface IListCardProps {
  items: IItem[];
  children: React.ReactNode;
}

const ListCard: React.FC<IListCardProps> = ({ items, children }) => {
  return items.length ? (
    <BorderBox>{children}</BorderBox>
  ) : (
    <Box>{children}</Box>
  )
}

const ListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  border-radius: 5px;
`

interface IListItemProps {
  isEven: boolean;
  isLast: boolean;
  isFirst: boolean;
}

const ListItem = styled.li`
  list-style-type: none;
  padding: 1rem;
  position: relative;
  background: ${(props: IListItemProps) =>
    !props.isEven ? '#f4f4f4' : 'initial'};
  ${(props: IListItemProps) =>
    props.isFirst &&
    css`
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
    `}
  ${(props: IListItemProps) =>
    props.isLast &&
    css`
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
    `}
`

interface IItem {
  children: React.ReactNode;
  key: string | number;
}

interface IListProps {
  items: IItem[];
}

export const List: React.FC<IListProps> = ({ items }) => (
  <ListCard items={items}>
    <ListWrapper>
      {items?.map((item: IItem, i: number) => (
        <ListItem
          key={item.key}
          isEven={i % 2 === 0}
          isLast={i === items.length - 1}
          isFirst={i === 0}
        >
          {item.children}
        </ListItem>
      ))}
    </ListWrapper>
  </ListCard>
)
