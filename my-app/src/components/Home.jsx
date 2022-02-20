
import Modal from "./Modal";
import Filters from "./Filters"
import Header from "./Header";
import Cards from "./Cards";
import PreFooter from "./PreFooter";
// import { StyleInput} from '../Styles/StyledSearch'
import {Fragment, useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getPets} from "../Redux/Actions";
export function Home() {

    const dispatch = useDispatch();
    const pets = useSelector((state) => state.petsfilter);
    const [idcity, setidcity] = useState('')
    const [estadoModal, cambiarEstadoModal] = useState(true);


    useEffect(() => {
        if (!pets.length) {
            dispatch(getPets());
        }
    }, [dispatch]);


    return (<Fragment>
        <Header></Header>

        <Modal setidcity={setidcity} estado={estadoModal} cambiarEstado={cambiarEstadoModal}/>
        <Filters idcity={idcity}/>
            <Cards  pets={pets}></Cards>
            <PreFooter/>
            

        </Fragment>)
}
