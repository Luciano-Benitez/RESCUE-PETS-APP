import React from 'react'
import styled from 'styled-components'
import {Link} from "react-router-dom"

export const Dashboard = () => {
  return (
    <Center>
      <Container>
        <Link to='/dashboard/pets'>Take me to see Pets in Bashboard</Link>
      </Container>
    </Center>
    
  )
}

export const Center = styled.div`
position: relative;
min-height: calc(100vh - 170px);
display: grid;
`

export const Container = styled.button`
position: relative;
align-self: center;
justify-self: center;
font-size: 14px;
`
