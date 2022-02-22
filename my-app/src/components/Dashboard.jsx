import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import { getIdFromShelterAndCity } from '../Redux/Actions'

export const Dashboard = () => {

  const idUser = useSelector(state => state.id)
  console.log(idUser)
  
  const dispatch = useDispatch()

  useEffect(()=>{
    console.log("flag idsuer --------->",idUser)
  dispatch(getIdFromShelterAndCity(idUser))
  },[])

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
