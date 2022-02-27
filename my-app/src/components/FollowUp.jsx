import React from 'react'
import styled from 'styled-components'
import {useSelector, useDispatch} from 'react-redux'
import { useEffect } from 'react'
import { getFollowUpsFromShelter } from '../Redux/Actions'

const FollowUP = () => {

  const ShelterAndCityINfo = useSelector(state => state.ShelterAndCityId)
  console.log("ShelterAndCityINfo------------>",ShelterAndCityINfo)
  
  const shelterId = ShelterAndCityINfo.shelterId
  console.log("shelterId------------>",shelterId)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFollowUpsFromShelter(shelterId))
  }, [])
  

  

  return (
    <Center>
        <CenterChild>
        {/* <form onSubmit={handleEditedFormSubmit}> */}
        <form>
          <Table>
              <thead>
              <tr>
                  <th>Estado de seguimiento</th>
                  <th>Nombre de la Mascota</th>
                  <th>Nombre del Adoptante</th>
                  <th>Fecha de seguimiento 1</th>
                  <th>Fecha de seguimiento 2</th>
                  <th>Fecha de seguimiento 3</th>
                  <th>Acciones</th>
              </tr>
              </thead>
              <tbody>
              {/* {
                data.length? data.map(data => 
                  <Fragment>
                    {editPetId === data.id ? (
                      <EditableRows
                        allSpecies={allSpecies}
                        allTemperaments={allTemperaments}
                        allPetStatus={allPetStatus}
                        allAges={allAges}
                        allGenres={allGenres}
                        editFormData={editFormData}
                        handleEditFormChange={handleEditFormChange}
                        handleCancelClick={handleCancelClick}
                        />
                        ) : (
                          <ReadOnlyRows
                          data={data}
                          handleEditClick={handleEditClick}
                          handleDeleteClick={handleDeleteClick}
                          />
                          )}
                    </Fragment>
                  ) : <tr ><td>Loading</td></tr>
                } */}
              </tbody>
          </Table>
      </form>
        </CenterChild>
    </Center>
  )
}

export default FollowUP

export const Center = styled.div`
position: relative;
min-height: calc(100vh - 170px);
display: grid;
`

export const CenterChild = styled.div`
position: relative;
align-self: center;
justify-self: center;
font-size: 10px;
`

export const Table = styled.table`

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