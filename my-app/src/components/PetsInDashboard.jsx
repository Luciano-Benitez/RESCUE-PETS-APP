import React, { useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPetsForDashboard } from '../Redux/Actions'
import styled from 'styled-components';


const PetsInDashboard = () => {

    const dispatch = useDispatch()

    const routeInfo = useSelector(state => state.ShelterAndCityId)
    const route = `http://localhost:3001/pets/${routeInfo.cityId}?shelterId=${routeInfo.shelterId}`

    useEffect( async()=>{
      await dispatch(getPetsForDashboard(route))
      },[dispatch])
      const petsFromShelter = useSelector( state => state.petsForDashboard )

      const [data, setData] = useState('')
      
      useEffect(() => {
          setData(petsFromShelter)
      }, [petsFromShelter])
      


  return (
    <Center>
    <Table>
        <thead>
        <tr>
            <th>Nombre</th>
            <th>Esterelization</th>
            <th>Peso</th>
            <th>Descripción</th>
            <th>Imágenes</th>
            <th>Especie</th>
            <th>Temperamento</th>
            <th>Edad</th>
            <th>Estado</th>
        </tr>
        </thead>
        <tbody>
        {
            data.length? data.map(el => 
            <tr key={el.id}>
            <td>{el.name}</td>
            {el.sterilization? <td>True</td> : <td>False</td> }
            <td>{el.weight}</td>
            <td>{el.description}</td>
            <td>{el.image}</td>
            <td>{el.speciesId}</td>
            <td>{el.temperament.temperament}</td>
            <td>{el.age.age}</td>
            <td>{el.petStatus.status}</td>
            </tr>
            ) : <tr ><td>Loading</td></tr>
        }
        </tbody>
    </Table>

    </Center>
  )
}

export default PetsInDashboard

export const Center = styled.div`
position: relative;
min-height: calc(100vh - 170px);
display: grid;
`

export const Table = styled.table`
position: relative;
align-self: center;
justify-self: center;
font-size: 14px;


.app-container {
display: flex;
flex-direction: column;
gap: 10px;
padding: 1rem;
}

table {
border-collapse: collapse;
width: 100%;
}

th,
td {
border: 1px solid #ffffff;
text-align: left;
padding: 8px;
font-size: 16px;
}

th {
background-color: #63ac44;
color: #ffffff;
}

td {
background-color: #ddf4ff;
}

form {
display: flex;
gap: 5px;
}

form td:last-child {
display: flex;
justify-content: space-evenly;
}

form * {
font-size: 28px;
}
`