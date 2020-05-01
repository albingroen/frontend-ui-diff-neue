import * as React from 'react'
import { Flex, Box } from '@primer/components'
import { Card } from '../card'
import styled from 'styled-components'
import { PrimerTheme } from '../../../types'

interface IStatisticsProps {
  statistics: IStatistic[];
}

interface IStatistic {
  label: string;
  value: any;
  key: number;
}

interface IStatisticItemProps {
  isLast: boolean;
  isFirst: boolean;
}

const StatisticItem = styled.div`
  border-right-color: ${(props: IStatisticItemProps) =>
    props.isLast
      ? 'white'
      : (themeProps: PrimerTheme) => themeProps?.theme?.colors?.border?.gray};
  padding-right: ${(props: IStatisticItemProps) =>
    props.isLast
      ? 'none'
      : (themeProps: PrimerTheme) => themeProps?.theme?.space[5]}px;
  padding-left: ${(props: IStatisticItemProps) =>
    props.isFirst
      ? 'none'
      : (themeProps: PrimerTheme) => themeProps?.theme?.space[5]}px;
  border-width: 1px;
  border-style: solid;
  border-top: none;
  border-bottom: none;
  border-left: none;
`

export const Statistics: React.FC<IStatisticsProps> = ({ statistics }) => {
  return (
    <Card shadowed>
      <Flex alignItems="center">
        {statistics.map((info: IStatistic, i: number) => (
          <StatisticItem
            isFirst={i === 0}
            isLast={i === statistics.length - 1}
            key={info.key}
          >
            <label>{info.label}</label>
            <Box mt={2}>{info.value}</Box>
          </StatisticItem>
        ))}
      </Flex>
    </Card>
  )
}
