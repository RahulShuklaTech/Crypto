import { HANDLE_BALANCE, SHOW_BALANCE } from  "../actions/action_types.js"
 
let initialState = {
    balance: 100,
    
}

export default function WalletReducer(state = initialState, action){

    switch(action.type){

        case SHOW_BALANCE: 
        return state

        case HANDLE_BALANCE:

            let amt = action.payload.work === "Buy" ? state.balance - action.payload.amount : state.balance + action.payload.amount  
            return { balance: amt}

        default: 
            return state
    }
}