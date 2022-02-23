import React, { useEffect, useState, Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPetsForDashboard } from '../Redux/Actions'
import styled from 'styled-components';
import ReadOnlyRows from './ReadOnlyRows';
import EditableRows from './EditableRows';



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
      

    const [editFormData, seteditFormData] = useState({
      name: '',
      sterilization: '',
      weight: '',
      description: '',
      image: '',
      speciesId: '',
      temperament: '',
      age: '',
      petStatus: ''
    })

    const handleEditFormChange = (event) => {
      event.preventDefault();
      // const fieldName = event.target.getAttribute('name')
      // const fieldValue = event.target.value

      // const newFormData = {... editFormData}
      // newFormData[fieldName] = fieldValue;
      seteditFormData({
        ...editFormData,
        [event.target.name]: event.target.value
      })}



    const [editPetId, seteditPetId] = useState(12)

    const handleEditClick = (event, data) => {
      event.preventDefault();
      seteditPetId(data.id)

      const formValues = {
        name: data.name,
        sterilization: data.sterilization,
        weight: data.weight,
        description: data.description,
        image: data.image,
        speciesId: data.speciesId,
        temperament: data.temperament,
        age: data.age,
        petStatus: data.petStatus
      }

      seteditFormData(formValues)

    }

  return (
    <form>
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
                <th>Acciones</th>
            </tr>
            </thead>
            <tbody>
            {
              data.length? data.map(data => 
                <Fragment>
                  {editPetId === data.id ? (
                    <EditableRows
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                    />
                    ) : (
                    <ReadOnlyRows data={data} handleEditClick={handleEditClick} />
                    )}
                  </Fragment>
                ) : <tr ><td>Loading</td></tr>
              }
            </tbody>
        </Table>
      </Center>
    </form>
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
font-size: 10px;


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
font-size: 12px;
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