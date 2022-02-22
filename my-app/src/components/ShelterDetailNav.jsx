import React from 'react'
import {Link} from 'react-router-dom'

const ShelterDetailNav = () => {
  return (
    <nav>
        <Link to='/shelters/:id'>Ver Todas las Mascotas</Link>
        <Link to='/selters/:id/form'>Quiero ser un hogar de Tránsito</Link>
    </nav>
  )
}


export default ShelterDetailNav