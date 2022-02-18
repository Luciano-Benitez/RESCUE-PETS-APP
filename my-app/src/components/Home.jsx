import Filters from "./Filters"
import Header from "./Header";
import Cards from "./Cards";
import PreFooter from "./PreFooter";
import { StyleInput} from '../Styles/StyledSearch'

export function Home(){
    return(
        <div>
            <Header></Header>
           
         
            
            <Filters />
            <Cards></Cards>
            <PreFooter/>
        </div>
    )
}
