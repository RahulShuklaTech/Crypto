import {GOT_DATA, GET_DATA, SHOW_BALANCE, SHOW_FORM, HANDLE_CHANGE, HANDLE_RADIO, CLOSE_FORM, ADD_ASSET, HANDLE_BALANCE, HANDLE_INPUTVALUE, ADD_TRANSACTION, SELL_ASSET} from "./action_types";

export let showBalance = () => ({
    type: SHOW_BALANCE
})


export const getData = () => ({
    type: GET_DATA,
   
})

export const gotData = (data) => ({
    type: GOT_DATA,
    payload: data
})

export const showForm = (data) => ({
    type: SHOW_FORM,
    payload: data

})

export const handleChange = (data) => ({
    type: HANDLE_CHANGE,
    payload: data
})

export const handleRadio = (data) => ({
    type: HANDLE_RADIO,
    payload: data
})

export const closeFormButton = () => ({ type: CLOSE_FORM})

export const addAsset = (data) => ({
    type: ADD_ASSET,
    payload: data
})


export const handleBalance = (data) => ({
    type: HANDLE_BALANCE,
    payload: data
})

export const handleInputValue = () => ({
    type: HANDLE_INPUTVALUE
})

export const addTransaction = (data) => ({
    type: ADD_TRANSACTION,
    payload: data
})

export const sellAsset = (data) => ({
    type: SELL_ASSET,
    payload: data
})