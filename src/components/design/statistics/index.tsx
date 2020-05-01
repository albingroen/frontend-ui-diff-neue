import * as React from 'react'
import { Flex, Box } from '@primer/components'
import { Card } from '../card'

interface IStatisticsProps {
  statistics: IStatistic[];
}

interface IStatistic {
  label: string;
  value: any;
  key: number;
}

export const Statistics: React.FC<IStatisticsProps> = ({ statistics }) => {
  return (
    <Card shadowed>
      <Flex alignItems="center">
        {statistics.map((info: IStatistic, i: number) => {
          const isFirst = i === 0
          const isLast = i === statistics.length - 1

          return (
            <Flex
              style={{ borderRight: isLast ? 'none' : '1px solid #eee' }}
              key={info.key}
              flexDirection="column"
              pr={isLast ? 0 : 5}
              pl={isFirst ? 0 : 5}
            >
              <label>{info.label}</label>
              <Box mt={2}>{info.value}</Box>
            </Flex>
          )
        })}
      </Flex>
    </Card>
  )
}
