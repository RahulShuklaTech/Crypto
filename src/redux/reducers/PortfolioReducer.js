import { ADD_ASSET, ADD_TRANSACTION } from "../actions/action_types"

let initialState = {
    value: 0.00,
    currentHoldings: [],
    transactions: []
}

export default function PorfolioReducer(state = initialState, action) {
    let localCurrentHolding = [...state.currentHoldings];
    let localtransaction = [...state.transactions];
    switch (action.type) {
        case ADD_ASSET:
            // console.log(action.payload.name,action.payload.work , "name")
            let isPresent = localCurrentHolding.find(asset => action.payload.name === asset.name);

          

                isPresent === undefined && action.payload.work === "Buy" ?

                    localCurrentHolding.push({
                        name: action.payload.name,
                        quantity: action.payload.quantity,
                        amountPaid: action.payload.amountPaid,
                        currentValue: action.payload.currentValue
                    })
                    : action.payload.work === "Buy" ? isPresent.quantity = Number(isPresent.quantity) + Number(action.payload.quantity)
                    : isPresent.quantity = isPresent.quantity > 0 ?   Number(isPresent.quantity) - Number(action.payload.quantity) : isPresent.quantity; 

                    
            
            return { ...state, currentHoldings: localCurrentHolding }


        case ADD_TRANSACTION: {
            
            localtransaction.push({
                name: action.payload.name,
                quantity: action.payload.quantity,
                amountPaid: action.payload.amountPaid,
                currentValue: action.payload.currentValue,
                date: action.payload.date,
                work: action.payload.work
            })


            return { ...state, transactions: localtransaction }
        }

        default:
            return state;
    }

}