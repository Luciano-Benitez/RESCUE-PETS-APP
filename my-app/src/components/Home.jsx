import Filters from "./Filters"
import Header from "./Header";
import Cards from "./Cards";
import PreFooter from "./PreFooter";
import { StyleInput} from '../Styles/StyledSearch'
import { Fragment } from "react";


export function Home(){
    return(
        <Fragment>
            <Header></Header>
           
         
            
            <Filters />
            <Cards></Cards>
            <PreFooter/>
            
            </Fragment>
    )
}
