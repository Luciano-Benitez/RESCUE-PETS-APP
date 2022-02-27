import React, {Fragment, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import {getIdFromShelterAndCity} from '../Redux/Actions'
import {Container,Left, LeftMini, Right ,button1} from '../Styles/StyledDashboard.js';
import Img from "../Icos/house.png";
import Img2 from "../Icos/espe.png";
import Imglist from "../Icos/list.png";
import LogoRefugio from "../Icos/pets.png";
import New from "../Icos/new.png";
import Edad from "../Icos/edad.png";
import Ok from "../Icos/ok.png";
export const Dashboard = () => {

    const idUser = useSelector(state => state.id)

    console.log(idUser)

    const dispatch = useDispatch()

    useEffect(() => {
        console.log("flag idsuer --------->", idUser)
        dispatch(getIdFromShelterAndCity(idUser))
    }, [])

    return (
        <Fragment>
            <br/>
            <Container>
              <Left>
                <img src={LogoRefugio} className="icos20"/> 
              <LeftMini>   <Link to='/dashboard/pets'>Take me to see Pets in Dashboard</Link> </LeftMini> 
              <LeftMini>  <Link to='/dashboard/forms'>Go to Answers Forms</Link></LeftMini> 
              <LeftMini>  <Link to='/dashboard/createForm'>Go to create Forms</Link></LeftMini> 
                </Left> 

                <Right>

                <Link to='/dashboard/profile'> <button className='but'><img src={Img}></img><br/>Mi Refugio</button></Link>
              <button  className='but'> <img src={Img2}></img><br/>Mis mascotas</button>
              <Link to='/dashboard/CreatePets'><button  className='but'> <img src={New}></img><br/>Nueva Mascota</button></Link>
              <Link to='/dashboard/pets/adopted'><button  className='but'> <img src={Imglist}></img><br/>Seguimiento a Mascota</button></Link>
              <Link to='/dashboard/forms'><button  className='but'> <img src={Edad}></img><br/>´Preguntas</button></Link>
              <Link to='/dashboard/createForm'>  <button  className='but'> <img src={Ok}></img><br/>´New Form</button></Link>
                </Right>
            </Container>
        </Fragment>
    )
}

// export const Center = styled.div `
// position: relative;
// min-height: calc(100vh - 170px);
// display: grid;
// `

// export const Container = styled.button`
// position: relative;
// align-self: center;
// justify-self: center;
// font-size: 14px;
// `
