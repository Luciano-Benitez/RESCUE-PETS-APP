import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getPetsForDashboard } from '../Redux/Actions'

const PetsInDashboard = () => {

    const dispatch = useDispatch()

    const routeInfo = useSelector(state => state.ShelterAndCityId)
    const route = `http://localhost:3001/pets/${routeInfo.cityId}?shelterId=${routeInfo.shelterId}`

    useEffect(()=>{
      dispatch(getPetsForDashboard(route))
      },[dispatch])

    const petsFromShelter = useSelector( state => state.petsForDashboard )

  return (
    <Center>
        <Container>Here goes the Pets Table</Container>
        
    </Center>
  )
}

export default PetsInDashboard

export const Center = styled.div`
position: relative;
min-height: calc(100vh - 170px);
display: grid;
`

export const Container = styled.div`
position: relative;
align-self: center;
justify-self: center;
font-size: 14px;
`