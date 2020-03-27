import React, { useEffect, useState } from 'react'
import { Heading, Text, ButtonPrimary, Button } from '@primer/components'
import styled from 'styled-components'
import { RouteComponentProps, Link } from 'react-router-dom'
import { Loading } from '../../components/design/loading'
import { login } from '../../lib/auth'
import { confirm } from '../../lib/auth/email'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props?.theme?.colors?.black};
  color: ${props => props?.theme?.colors?.white};
`

export const EmailConfirmation = (props: RouteComponentProps) => {
  const { match } = props
  const userId = (match as any).params.userId
  const [isError, setIsError] = useState<boolean>(false)
  const [isSuccess, setIsSucess] = useState<boolean>(false)

  useEffect(() => {
    (async () => {
      if (userId) {
        const res = await confirm(userId)

        if (res) {
          setIsSucess(true)
        } else {
          setIsError(true)
        }
      }
    })()
  }, [userId])

  return isSuccess ? (
    <Container>
      <Heading mt={2}>
        Your email has now been confirmed
      </Heading>
      <Text mt={2}>
        Your email has now been confirmed and your account can now be used!
      </Text>
      <ButtonPrimary
        variant="large"
        my={4}
        onClick={() => login()}
      >
          Log in now
      </ButtonPrimary>
    </Container>
  ) : (
    isError ? (
      <Container>
        <Heading mt={2} color="red.3">
          This link is not valid anymore
        </Heading>
        <Text mt={2}>
          For some reason this link is not valid anymore,
        </Text>
        <Link to="/">
          <Button
            variant="large"
            my={4}
          >
          Go to home
          </Button>
        </Link>
      </Container>
    ) : (
      <Loading />
    )
  )
}
