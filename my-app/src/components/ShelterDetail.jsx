import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router";
import {getShelterDetail} from '../Redux/Actions/index.js'

// componentes 
import ShelterInfo from './ShelterInfo.jsx';
import ShelterDetailNav from './ShelterDetailNav'

// estilos
import {StyledDiv} from '../Styles/StyledShelterDetails'

const ShelterDetail = () =>{

    let {id} = useParams();
    const dispatch = useDispatch();
    const Data = useSelector((state) => state.shelterDetail);

    
    useEffect(() => {
        dispatch(getShelterDetail(id));

    }, [dispatch, id]);

    console.log(Data)

    return (
        <StyledDiv>
            <ShelterDetailNav id={id}/>
            <ShelterInfo Data={Data}/>
        </StyledDiv>
    )
}

export default ShelterDetail