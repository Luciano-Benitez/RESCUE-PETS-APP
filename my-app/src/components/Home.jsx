
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
    const pets = useSelector((state) => state.pets);
    const [idcity, setidcity] = useState('')

    useEffect(() => {
        if (!pets.length) {
            dispatch(getPets());
        }
    }, [dispatch]);


    return (<Fragment>
        <Header></Header>


        <Filters idcity={idcity}/>
            <Cards  pets={pets}></Cards>
            <PreFooter/>
            <Modal setidcity={setidcity}/>

        </Fragment>)
}
