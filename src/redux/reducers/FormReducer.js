import { CLOSE_FORM, HANDLE_CHANGE, HANDLE_INPUTVALUE, HANDLE_RADIO, SHOW_FORM } from "../actions/action_types";

let initialState = {
    name: "",
    price: 0,
    quantity: 0,
    work: "Buy",
    showForm: false,
    inputValue: 0,
    buyPrice:0,
    sellPrice:0,
    button: false,

}

export default function FormReducer(state = initialState, action){

    switch(action.type){
        case SHOW_FORM:
            return {...state, name: action.payload.name, price: action.payload.price, showForm: true}
        
        case HANDLE_CHANGE: 
            let qty =  action.payload.value > action.payload.max ? action.payload.max : action.payload.value 
            return {...state, inputValue:qty, quantity:qty }
        
        case HANDLE_INPUTVALUE: 
           
            return { ...state, inputValue: "" }

        case HANDLE_RADIO : 

            return {...state, work: action.payload}
        
        case CLOSE_FORM: 
            return {...state, showForm: false}
        default:
            return state
    }

    

}