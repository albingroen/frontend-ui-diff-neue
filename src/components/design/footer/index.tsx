import * as React from 'react'
import styled from 'styled-components'
import { IFooterList, IFooterListItem, IFooterProps } from './types'
import { Flex, Text } from '@primer/components'

const FooterWrapper = styled.footer`
  background-color: ${props => props?.theme?.colors?.black};
`

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: ${(props) => props?.theme?.space[2]}px;
`

const FooterList = styled.ul`
  display: flex;
  flex-direction: row;
`

const FooterListItem = styled.a`
  color: white;
  list-style-type: none;
  padding: ${(props) => `${props?.theme?.space[3]}px ${props?.theme?.space[2]}px`};
  opacity: 0.5;
  cursor: pointer;

  &:first-child {
    padding-left: 0px;
  }

  &:last-child {
    padding-right: 0px;
  }

  &:hover {
    opacity: 1;
  }
`

export const Footer: React.FC<IFooterProps> = ({ lists }) => (
  <FooterWrapper>
    <FooterContent>
      {lists.map((footerList: IFooterList) => (
        <FooterList key={Math.random()}>
          {footerList.items.map((footerItem: IFooterListItem) => (
            <FooterListItem href={footerItem.href} key={Math.random()}>
              {footerItem.text}
            </FooterListItem>
          ))}
        </FooterList>
      ))}

      <Flex py={2}>
        <Text color="white" opacity={0.5}>© 2020 ui-diff</Text>
      </Flex>
    </FooterContent>
  </FooterWrapper>
)
