import React, {Fragment, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import styled from 'styled-components'
import {Link} from "react-router-dom"
import {getIdFromShelterAndCity} from '../Redux/Actions'
import {Container,Left, LeftMini, Right ,button1} from '../Styles/StyledDashboard.js';

import LogoRefugio from "../Icos/pets.png";
import DashboardIcos from './DashboardIcos'
import CreatePets from './CreatePets'
// import ShelterProfile from '/ShelterProfile'

export const Dashboard = () => {
    let modaldashboard = useSelector((state) => state.modaldashboard);

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
         
                { modaldashboard ==="CreatePets" ? <CreatePets></CreatePets> :""  }
                <Right>
         

<DashboardIcos></DashboardIcos>
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
