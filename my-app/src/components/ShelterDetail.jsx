import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router";
import {getShelterDetail} from '../Redux/Actions/index.js'

// componentes 
import ShelterInfo from './ShelterInfo.jsx';

const ShelterDetail = () =>{

    let {id} = useParams();
    const dispatch = useDispatch();
    const Data = useSelector((state) => state.shelterDetail);

    
    useEffect(() => {
        dispatch(getShelterDetail(id));

    }, [dispatch, id]);

    console.log(Data)

    return (
        <>
            <ShelterInfo Data={Data}/>
        </>
    )
}

export default ShelterDetail