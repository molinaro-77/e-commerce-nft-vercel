// branch

import { GET_ALL_NFTS, GET_NFT_DETAIL, CREATE_NFT, DELETE_NFT, UPDATE_NFT} from "../actions";
//  SEARCH_NFT, RESET_FILTERS, ORDER_NFTS, SELECT_PAGE, SET_NFTS_PER_PAGE, SET_ORDER_TYPE, REVERSE_ORDER, NEXT_PAGE, PREV_PAGE, LOADING,

// import * as controllers from '../../utils'

const initialState = {
  nfts: [], 
  filteredNfts: [], 
  nftDetail: {}, 
  isLoading: false
};

// const initialState = {
//   nfts: [], //guarda una referencia a todos los nft de la base de datos.
//   filteredNfts : [], //los nft que se van a mostrar en el front
//   searchResults: [], //los resultados de la busqueda
//   nftDetail: {}, //el detalle del nft a mostrar
//   orderType: "abc", //el tipo de orden que puede ser alfabetico 'abc' o 'rating', por default ordena por alfabetico
//   order : "asc", //orden 'asc' o 'desc', comienza por default en 'asc'
//   activePage : 1, //pagina activa, default pagina inicial
//   nftsPërPage : 15, //nfts por pagina.
//   isLoading : false //estado de la carga de datos. usado para mostrar una animacion de carga mientras se hace el fetch
// };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading : true } // loading mientras carga la info
    case GET_ALL_NFTS:
      return { ...state, nfts: action.payload, filteredNfts: action.payload, nftDetail: {}, isLoading: false } // reset all
    case GET_NFT_DETAIL:
      return { ...state, nftDetail: action.payload, isLoading : false }
    case CREATE_NFT:
      return { ...state } // no hace nada actualmente
    case DELETE_NFT:
      return { ...state } // no hace nada actualmente
    case UPDATE_NFT:
      return { ...state } // no hace nada actualmente




    //   //aplica la logica de busqueda y resetea la la pagina activa e indica que ya no esta cargando.
    // case SEARCH_NFT:
    //     /*Logica de busqueda */
    //   return {
    //     ...state,
    //     activePage: 1,
    //     isLoading : false
    //   }
    //   // pisa el estado de los filtros colocando todo los juegos de vuelta al estado que se va a mostrar en el front
    // case RESET_FILTERS:
    //     return {
    //       ...state,
    //       filteredNfts : state.nfts,
    //     }
    //     //cambia el tipo de orden, si es por alfabetico o por rating
    // case SET_ORDER_TYPE:
    //   return {
    //     ...state,
    //     orderType: action.payload,
    //     activePage: 1,
    //   }
    //   //revierte el orden de ascendente a descendente y visceversa
    // case REVERSE_ORDER:
    //   let newOrder;
    //   if(action.payload === 'asc'){
    //     newOrder = 'desc';
    //   }else if(action.payload === 'desc'){
    //     newOrder = 'asc'
    //   }
    //   return {
    //     ...state,
    //     order : newOrder,
    //     activePage: 1
    //   }
    //   //ordena el estado que se muestra en el front de por rating o por alfabetico. depende de lo que reciba como payload.
    // case ORDER_NFTS:
    //   if(state.orderType === 'abc'){
    //     state.filteredNfts = controllers.orderNFTByName(state.filteredNfts, state.order);
    //   }else if(state.orderType === 'rating'){
    //     state.filteredNfts = controllers.orderNFTByRating(state.filteredNfts, state.order)
    //   }
    //   return {
    //     ...state,
    //     filteredNfts : state.filteredNfts,
    //     activePage : 1
    //   }
    //   //selecciona cambia el valor de la pagina activa.
    // case SELECT_PAGE:
    //   return {
    //     ...state,
    //     activePage : action.payload
    //   }
    //   //cambia la cantidad de tarjetas que se muestran en pantalla y resetea la pagina a 1
    // case SET_NFTS_PER_PAGE:
    //   return {
    //     ...state,
    //     gamesPerPage : action.payload,
    //     activePage : 1
    //   }
    //   //cambia la pagina activa a la pagina siguiente
    // case NEXT_PAGE:
    //   return {
    //     ...state,
    //     activePage : state.activePage + 1
    //   }
    //   //cambia la pagina activa a la pagina anterior.
    // case PREV_PAGE:
    //   return {
    //     ...state,
    //     activePage : state.activePage - 1
    //   }
    default:
      return {...state}
  }
};

export default rootReducer;
