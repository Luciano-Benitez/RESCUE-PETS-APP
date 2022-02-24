import {
  GET_COUNTRIES,
  GET_STATES,
  GET_CITIES,
  CLEAN_STATE_FORM,
  POST_FORM_REGISTER,
  GET_PETS_FILTER,
  GET_PETS,
  authLogin,
  authCheckingFinish,
  GET_TEMPERAMENTS,
  GET_ID_CITY,
  GET_AGES,
  GET_STATUS,
  GET_SEARCH_SHELTERS,
  GET_SPECIES,
  GET_FORMS,
  GET_PET_ID,
  GET_ID_FROM_SHELTER_AND_CITY,
  GET_SHELTER_DETAIL,
  GET_FILTER_SHELTERS,
  GET_PETS_BY_SHELTER,
  GET_FORMTYPES,
  GET_PETS_FOR_DASHBOARD,
  GET_INDIVIDUAL_FORM,
  POST_PETS,
  GET_SHELTERS,
  GET_FORM_ADOPTION,
  POST_ADOPTION,
  GETT_TEMPERAMENTS,
  GET_ALL_SPECIES,
  GET_ALL_PET_STATUS,
  GET_ALL_AGES,
  GET_GENRES
} from "../Actions/types";

const initialState = {
  countries: [],
  checking: true,
  states: [],
  cities: [],
  petsfilter: [],
  pets: [],
  temperaments: [],
  ttemperaments: [],
  cityId: [],
  ages: [],
  status:[],
  shelter:[],
  Shelters:[],
  forms:[],
  status: [],
  shelter: [],
  Shelters: [],
  petOne: [],
  ShelterAndCityId: {},
  shelterDetail : {},
  petsByShelter: [],
  formtypes: [],
  petsForDashboard: [],
  individualform: [],
  formAdoption:[],
  allspecies: [],
  petStatus: [],
  allAges: [],
  allGenres: []
};

export default function rooReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: payload,
      };

    case GET_STATES:
      return {
        ...state,
        states: payload,
      };

    case GET_PETS:
      return {
        ...state,
        pets: payload,
      };

    case GET_PET_ID:
      return {
        ...state,
        petOne: payload,
      };

    case GET_CITIES:
      return {
        ...state,
        cities: payload,
      };
    case CLEAN_STATE_FORM:
      return {
        ...state,
        states: payload,
        cities: payload,
      };
    case POST_FORM_REGISTER:
      return {
        ...state,
      };

    case GET_PETS_FILTER:
      return {
        ...state,
        petsfilter: payload,
      };

    case authLogin:
      return {
        ...state,
        checking: false,
        ...payload,
      };

    case authCheckingFinish:
      return {
        ...state,
        checking: false,
      };

    case GET_TEMPERAMENTS:
      let filteredTemperaments = [];

      state.petsfilter.map((el) => {
        if (!filteredTemperaments.length)
          return filteredTemperaments.push(el.temperament);
        let temp = el.temperament.id;
        let obj = filteredTemperaments.find(
          (temperamento) => temperamento.id === temp
        );
        if (!obj) return filteredTemperaments.push(el.temperament);
      });
      return {
        ...state,
        temperaments: filteredTemperaments,
      };
    case GET_AGES:
      let filteredAges = [];

      state.petsfilter.map((el) => {
        if (!filteredAges.length) return filteredAges.push(el.age);
        let temp = el.age.id;
        let obj = filteredAges.find((age) => age.id === temp);
        if (!obj) return filteredAges.push(el.age);
      });
      return {
        ...state,
        ages: filteredAges,
      };
    case GET_ID_CITY:
      return {
        ...state,
        cityId: payload,
      };
    case GET_STATUS:
      let filteredStatus = [];

      state.petsfilter.map((el) => {
        if (!filteredStatus.length) return filteredStatus.push(el.petStatus);
        let ele = el.petStatus.id;
        let obj = filteredStatus.find((sta) => sta.id === ele);
        if (!obj) return filteredStatus.push(el.petStatus);
      });
      return {
        ...state,
        status: filteredStatus,
      };

    case GET_SEARCH_SHELTERS:
      return {
        ...state,
        Shelters: payload,
      };

    case GET_SPECIES:
      let filter = [];

      state.petsfilter.map((e) => {
        if (!filter.length) return filter.push(e.species);
        let ele = e.species.id;
        let obj = filter.find((s) => s.id === ele);
        if (!obj) return filter.push(e.species);
      });
      return {
        ...state,
        species: filter,
      };

    case GET_FILTER_SHELTERS:
      let filterShelter = [];
      state.petsfilter.map((e) => {
        if (!filterShelter.length) return filterShelter.push(e.shelter);
        let ele = e.shelter.id;
        let obj = filterShelter.find((s) => s.id === ele);
        if (!obj) return filterShelter.push(e.shelter);
      });
      return {
        ...state,
        shelter: filterShelter,
      };
    case GET_ID_FROM_SHELTER_AND_CITY:
      return {
        ...state,
        ShelterAndCityId: payload,
      };
    case GET_SHELTER_DETAIL:
      return {
        ...state,
        shelterDetail: payload
      }
      case GET_PETS_BY_SHELTER:
        return{
          ...state,
          petsByShelter: payload
        }
      case GET_PETS_FOR_DASHBOARD:
        return {
          ...state,
          petsForDashboard: payload
        }

      case GET_FORMS :
        return {
          ...state,
          forms : payload
        }
        
      case GET_FORMTYPES :
        return {
          ...state,
          formtypes : payload

        }  
        case GET_FORM_ADOPTION:
          return {
            ...state,
           formAdoption: payload
          }

          case POST_ADOPTION:
            return {
              ...state,
            };
        
      case POST_PETS:
        return {
          ...state
        }

        case GET_SHELTERS:
          return {
            ...state,
            Shelters: payload
          };

        case GETT_TEMPERAMENTS:
          return {
            ...state,
            ttemperaments: payload
          }; 


      case GET_INDIVIDUAL_FORM :
        let showranswers = state.forms.filter(e => Number(e.id) === Number(payload.formid))
        showranswers = showranswers[0].answers
        let showquestions = payload.data[0].questions
        let questionANDanswer = []
        showranswers.map(e => {
             showquestions.map(q => {
              if(e.idquestion === q.id){
                questionANDanswer.push({question:q.question,answer:e.answer})
              } 
            })
        })
        
        return {
          ...state,
          individualform : questionANDanswer
        }  
      
          case GET_ALL_SPECIES:
            return {
              ...state,
              allspecies: payload
            };
          
            case GET_ALL_PET_STATUS:
              return {
                ...state,
                petStatus: payload
              };
            
            case GET_ALL_AGES:
              return {
                ...state,
                allAges: payload
              };
        case GET_GENRES:
          return {
            ...state,
            allGenres: payload
          };      
        default:
          return state;
      }
    };

