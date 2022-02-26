import axios from "axios";
import store from '../Store/index';
import {fetchConToken, fetchSinToken} from "../../helpers/fetch.js";
import {
    GET_COUNTRIES,
    GET_STATES,
    GET_CITIES,
    CLEAN_STATE_FORM,
    GET_PETS,
    POST_FORM_REGISTER,
    GET_PETS_FILTER,
    authLogin,
    authCheckingFinish,
    GET_TEMPERAMENTS,
    GET_ID_CITY,
    GET_AGES,
    GET_STATUS,
    GET_SEARCH_SHELTERS,
    GET_SPECIES,
    GET_FILTER_SHELTERS,
    GET_FORMS,
    GET_ADOPTIONS,
    GET_PET_ID,
    GET_ID_FROM_SHELTER_AND_CITY,
    GET_SHELTER_DETAIL,
    GET_PETS_BY_SHELTER,
    GET_FORMTYPES,
    GET_PETS_FOR_DASHBOARD,
    POST_CREATE_FORM,
    GET_PETS_SIMILAR,
    GET_ALL_QUESTIONS,
    DELETE_ANSWERFORM,
    GET_INDIVIDUAL_FORM,
    GET_SHELTERS,
    GET_FORM_ADOPTION,
    POST_ADOPTION,
    POST_PETS,
    GETT_TEMPERAMENTS,
    GET_ALL_SPECIES,
    GET_ALL_PET_STATUS,
    GET_ALL_AGES,
    GET_GENRES,
    SEARCH_PET_BY_NAME,
    DELETE_PET,
    EDIT_PET,
    POST_REQUEST_TRANSIT
    } from './types.js'



export const getPets = () => {
    return async function (dispatch) {
        try {
            let json = await axios(`http://localhost:3001/pets`);
            let size = json.data.length / 2;
            let NewPets = function (myArray, Size) {
                var results = [];
                while (myArray.length) {
                    results.push(myArray.splice(0, Size));
                }
                return results;
            };
            let newpets = NewPets(json.data, size);
            console.log([newpets], "Pets sin partir", json, "partido");
            dispatch({type: GET_PETS, payload: newpets[0]});
            // de momento solo muestra el primer array
            // dispatch({type: GET_PETS, payload:json.data}); //Pets sin división
        } catch (error) {
            console.log("ERROR NO DATA", error);
        }
    };
};

export const getCountries = () => {
    return async function (dispatch) {
        let json = await axios(`http://localhost:3001/country`);
        return dispatch({type: GET_COUNTRIES, payload: json.data});
    };
};

export const getStates = (id) => {
    return async function (dispatch) {
        let json = await axios(`http://localhost:3001/states?countryId=${id}`);
        return dispatch({type: GET_STATES, payload: json.data});
    };
};

export const getcities = (id) => {
    return async function (dispatch) {
        let json = await axios(`http://localhost:3001/cities?stateId=${id}`);
        return dispatch({type: GET_CITIES, payload: json.data});
    };
};

export const cleanStateForm = () => {
    return {type: CLEAN_STATE_FORM, payload: []};
};

export const getPetsSimilar = (idShelter, datafilters ) => {
    let resul;
    let datafilters2 = store.getState().petsfilter;
    let OnePet = store.getState().petOne;
    return  function (dispatch) {
        try {
            OnePet= OnePet[0];
           
            console.log("ENVIADOS POR ACTION ",idShelter, datafilters , "TOMADO DESDE STORE" , datafilters2 ,OnePet )
            if (idShelter == undefined )  {   
               resul = datafilters2.filter((el) => el.shelterId === idShelter[0].shelterId || el.species.id === idShelter[0].species.id  || el.ageId === idShelter[0]. ageId && (el.name != OnePet.name));
               resul = resul.splice(0,6);
            }    
            else {
            resul = datafilters.filter((el) => el.shelterId === idShelter[0].shelterId && (el.name != idShelter[0].name));
            resul = resul.splice(0,6);
            } 
            dispatch({type: GET_PETS_SIMILAR, payload: resul});
            console.log("todo", idShelter, resul, " sin el mosmo resul");

        } catch (error) {
           
           
            console.log(error);
        }
    };
};

export const getPetId = (id) => {
    return async function (dispatch) {
        try {
            const Details = await axios("http://localhost:3001/petDetail/" + id);
            dispatch({type: GET_PET_ID, payload: Details.data});
        } catch (error) {
            console.log(error);
        }
    };
};

export const getPetByShelter = (id) => {
    return async function (dispatch) {
        try {
            const Details = await axios(`http://localhost:3001/petDetail?shelterId=${id}`);
            dispatch({type: GET_PETS_BY_SHELTER, payload: Details.data});
        } catch (error) {
            console.log(error);
        }
    };
};

export const postShelter = (payload) => {
    return async function (dispatch) {
        let response = await axios.post(`http://localhost:3001/createShelter`, payload);
        return response;
    };
};

export const getPetsFilter = (link) => {
    return async function (dispatch) {
        try {
            let json = await axios(link);
            return dispatch({type: GET_PETS_FILTER, payload: json.data});
        } catch (error) {
            return error;
        }
    };
};

export const startLogin = (email, password) => {
    return async (dispatch) => {
        const resp = await fetchSinToken("login", {
            email,
            password
        }, "POST");
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem("token", body.token);
            localStorage.setItem("token-init-date", new Date().getTime());
            dispatch(login({id: body.id, email: body.email}));
        } else {
            alert(body.msg);
        }
    };
};

export const startRegister = (name, phoneNumber, description, address, email, password, cityId, role, img) => {
    return async (dispatch) => {
        const resp = await fetchSinToken("createShelter", {
            name,
            phoneNumber,
            description,
            address,
            email,
            password,
            cityId,
            role,
            img
        }, "POST");
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem("token", body.token);
            localStorage.setItem("token-init-date", new Date().getTime());
            dispatch(login({id: body.id, email: body.email}));
        } else {
            alert(body.msg);
        }
    };
};

export const startChecking = () => {
    return async (dispatch) => {
        const resp = await fetchConToken("renew");
        const body = await resp.json();
        if (body.ok) {
            localStorage.setItem("token", body.token);
            localStorage.setItem("token-init-date", new Date().getTime());
            dispatch(login({id: body.id, email: body.email}));
        } else {
            dispatch(checkingFinish());
        }
    };
};

const checkingFinish = () => ({type: authCheckingFinish});

export const login = (user) => ({type: authLogin, payload: user});

export const getTemperaments = () => {
    return {type: GET_TEMPERAMENTS, payload: null};
};

export const getCityId = (id) => {
    return {type: GET_ID_CITY, payload: id};
};

export const getAges = () => {
    return {type: GET_AGES, payload: null};
};

export const getStatus = () => {
    return {type: GET_STATUS, payload: null};
};

export const getSearchShelters = (name) => {
    return async function (dispatch) {
        let json = await axios(`http://localhost:3001/searchShelter?name=` + name);
        return dispatch({type: GET_SEARCH_SHELTERS, payload: json.data});
    };
};

export const getSpecies = () => {
    return {type: GET_SPECIES, payload: null};
};

export const getFilterShelters = () => {
    return {type: GET_FILTER_SHELTERS, payload: null};
};

export const getForms = (userid, formtypeid) => {
    return async function (dispatch) {
        let json = await axios(`http://localhost:3001/forms/${userid}?formtypeid=` + formtypeid);
        return dispatch({type: GET_FORMS, payload: json.data});
    };
};

export const getIdFromShelterAndCity = (userId) => {
    return async function (dispatch) {
        let json = await axios(`http://localhost:3001/sheltercityid/${userId}`);
        return dispatch({type: GET_ID_FROM_SHELTER_AND_CITY, payload: json.data});
    };
};

export const getShelterDetail = (id) => {
    return async function (dispatch) {

        let json = await axios(`http://localhost:3001/shelters/${id}`);
        return dispatch({type: GET_SHELTER_DETAIL, payload: json.data});
    };
};

       

export const getShelters = () => {
    return async function (dispatch) {
        let json = await axios(`http://localhost:3001/shelters`)
        return dispatch({
            type: GET_SHELTERS,
            payload: json.data
        })
    } 
}


export const getFormtypes = () => {
    return async function (dispatch) {
        let json = await axios(`http://localhost:3001/formtypes`);
        return dispatch({type: GET_FORMTYPES, payload: json.data});
    };
};

export const getPetsForDashboard = (route) => {
    return async function (dispatch) {
        try {
            let json = await axios(route);
            return dispatch({type: GET_PETS_FOR_DASHBOARD, payload: json.data});
        } catch (error) {
            return error;
        }
    };
};

export const searchPetByName = (payload) => {
    return {type: SEARCH_PET_BY_NAME, payload: payload};
};





export const getIndividualForm = (shelterid,formtypeid,formid) => {
    return async function (dispatch){
        try{
            let json = await axios(`http://localhost:3001/formquestions/${shelterid}?formtypeid=${formtypeid}`)
            return dispatch({
                type: GET_INDIVIDUAL_FORM, payload: {data: json.data, formid: formid}}
            )
        }catch(error){
            return error
        }
    }
}
export const getFormAdoption = (id,formtypeId) => {
    return async function (dispatch) {
        try {
          const Adoption= await axios(`http://localhost:3001/formquestions/${id}?formtypeid=${formtypeId}`);
          dispatch({ type: GET_FORM_ADOPTION, payload:Adoption.data });
        } catch (error) {
          console.log(error);
        
        }
      };
    } 

export const sendAdoption=(payload)=>{
    return async function (dispatch) {
        let response = await axios.post(`http://localhost:3001/sendAdoption`, payload)
        return response
    } 
    }

export function postPets(payload) {
    return async function(dispatch){
        const post = await axios.post('http://localhost:3001/pets', payload);
        return post;
    }   
};

export const gettTemperaments = ()=> {
    return async function(dispatch){
        let json = await axios(`http://localhost:3001/temperaments`)
        return dispatch({
            type: GETT_TEMPERAMENTS,
            payload: json.data
        })
    }
}

export const getAllSpecies = ()=> {
    return async function(dispatch){
        let json = await axios(`http://localhost:3001/species`)
        return dispatch({
            type: GET_ALL_SPECIES,
            payload: json.data
        })
    }
}


export const getAllPetStatus = ()=> {
    return async function(dispatch){
        let json = await axios(`http://localhost:3001/petstatus`)
        return dispatch({
            type: GET_ALL_PET_STATUS,
            payload: json.data
        })
    }
}

export const getAllAges = ()=> {
    return async function(dispatch){
        let json = await axios(`http://localhost:3001/ages`)
        return dispatch({
            type: GET_ALL_AGES,
            payload: json.data
        })
    }
}


export const getGenres = ()=> {
    return async function(dispatch){
        let json = await axios(`http://localhost:3001/genres`)
        return dispatch({
            type: GET_GENRES,
            payload: json.data
        })
    }
}

export const deletePet = (petId) => {
    return async function (dispatch) {
        const deletePet= await axios.delete(`http://localhost:3001/pets/${petId}`);
        return dispatch({ type: DELETE_PET, payload:deletePet });
        // console.log(deletePet)
        // return deletePet
    };
} 

export const editPet = (petId, payload) => {
    return async function (dispatch) {
        const editPet= await axios.put(`http://localhost:3001/pets/${petId}`, payload );
        // return dispatch({ type: EDIT_PET, payload:editPet });
        // console.log(editPet)
        // return editPet
    };
}

export const deleteAnswerForm = (formid,type) => {
    return async function(dispatch){
        await axios.delete(`http://localhost:3001/deleteAnswerForm/${type}?formid=${formid}`)
        return dispatch({type: DELETE_ANSWERFORM})
    }
}

export const postRequestTransit = (payload) => {
    return async function (dispatch) {
        let response = await axios.post(`http://localhost:3001/sendRequest`, payload);
        return response;
    };
};

export const getAllQuestions = () => {
    return async function (dispatch){
        let json = await axios('http://localhost:3001/getAllQuestions')
        return dispatch({type: GET_ALL_QUESTIONS,payload: json.data})
    }
}

export const postCreateForm = (form) => {
    return async function(dispatch){
        let json = await axios.post('http://localhost:3001/createForm',form)
        return json
    }
}