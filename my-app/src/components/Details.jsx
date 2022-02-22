import React, {Fragment, useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {StyledDetails, StyledDetailsLeft, StyledDetailsRight} from "../Styles/StyledDetails.js";
import {getPetId} from "../Redux/Actions/index.js";
import {useParams} from "react-router";

const Details = () => {

    let {id} = useParams();
    const dispatch = useDispatch();
    const Datos = useSelector((state) => state.petOne);


    useEffect(() => {
        dispatch(getPetId(id));

    }, [dispatch, id]);


    return (<Fragment>
       {console.log(Datos[0])}
        {Datos.length ? (
            <StyledDetails><br/><br/>

                <StyledDetailsLeft>
                <br/><br/> <br/><br/>
                    <img src={
                         Datos[0].image
                    }/>
                </StyledDetailsLeft>
                <StyledDetailsRight> {
                    <h1>{Datos[0].name}</h1> 
                } </StyledDetailsRight>
   <h1>{Datos[0].name}</h1>
   <h1>{Datos[0].weight }  </h1>
   <h1>{Datos[0].description}</h1>    
   <h1>{Datos[0].age.age}</h1>
   <h1>{Datos[0].temperament.temperament}  </h1>    
   <h1>{Datos[0].vaccines  } </h1>
   <h1> {Datos[0].species.specie  } </h1>
   <h1>{Datos[0].petStatus.status  } </h1>
   <h1>{Datos[0].shelter.name } </h1> 
   
 

            </StyledDetails>
        ) : (<h1> Sin Datos</h1>) }
   
   
       </Fragment> ) 
   

  }
        export default Details;
