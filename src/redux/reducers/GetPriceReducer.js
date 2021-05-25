import { GOT_DATA, GET_DATA } from "../actions/action_types";

let initialState = {
    data: [],
    loading: false,
    error: null,
}

export default function GetPriceReducer(state = initialState, action){
    // console.log("state from getprice", state)
    let localData = [...state.data]//JSON.parse(JSON.stringify(state.data));//[...state.data]

    switch(action.type){

        case GOT_DATA: 
            localData.push(action.payload)
            // console.log("local",localData)
            return {...state, loading: false, data: localData}
        
        case GET_DATA: 
            
            return {...state, loading: true}
        default:
            return state;
    }
}