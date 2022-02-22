import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getIdFromShelterAndCity } from '../Redux/Actions'

const PetsInDashboard = () => {

    const idUser = useSelector(state => state.id)
    console.log(idUser)
    
    const dispatch = useDispatch()

    useEffect(()=>{
    dispatch(getIdFromShelterAndCity(idUser))
    },[dispatch])
    
    const shelterData = useSelector(state => state.ShelterAndCityId)
    console.log(shelterData)

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