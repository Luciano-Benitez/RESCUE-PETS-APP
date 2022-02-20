

import Filters from "./Filters"
import Header from "./Header";
import Cards from "./Cards";
import PreFooter from "./PreFooter";
// import { StyleInput} from '../Styles/StyledSearch'
import {Fragment, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getPets} from "../Redux/Actions";
export function Home() {

    const dispatch = useDispatch();
    const pets = useSelector((state) => state.pets);

    useEffect(() => {
        if (!pets.length) {
            dispatch(getPets());
        }
    }, [dispatch]);


    return (<Fragment>
        <Header></Header>


        <Filters/>
            <Cards  pets={pets}></Cards>
            <PreFooter/>

        </Fragment>)
}
