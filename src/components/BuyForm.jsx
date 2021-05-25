import { useDispatch, useSelector } from "react-redux"
import { addAsset, addTransaction, closeFormButton, handleBalance, handleChange,handleInputValue,handleRadio} from "../redux/actions/actions";
import "./styles/BuyFormStyle.css"
export default function BuyForm() {

    let state = useSelector(state => state.form)
    let balance = useSelector(state => state.wallet.balance)
    let currentHolding = useSelector(state =>  state.portfolio.currentHolding);
    let buttonStatus = false;
    



    let dispatch =  useDispatch();
    
    let change = Math.random();
    let {name,price,quantity,work,inputValue} = state
    if(currentHolding){
    if(currentHolding.find(item => item.name === name && item.quantity <= quantity)){
        
    }else{
        
        if(work === "Sell"){
            buttonStatus = true;
        }
    }
    }
    
    let max = balance / price;

    let maxSell = 0

    // if(currentHolding){
    //     let asset = currentHolding.find(item => item.name === name)
    //     console.log(asset,"here")
    //     asset !== undefined ? maxSell = asset.quantity: maxSell = 0; 

    //     console.log(maxSell,"max selling")
    // }



    const handleChangeHere = (e) => {
        dispatch(handleChange({value: e.target.value, max: max}))
    }

    const handleMaxClick = () => {
        dispatch(handleChange({value: max, max: max}))
    }

    const handleRadioBtn = (val) => {
        
        dispatch(handleRadio(val))

    }

    const closeButton = e => {
        e.preventDefault();
        dispatch(closeFormButton())
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // console.log(change,"change",work)
        work === "Buy" ?
        dispatch(addAsset({ name: name,
            quantity: quantity,
            amountPaid: (price-(change*price))*quantity,
            currentValue: price*quantity,
            work: work

        }))
        : dispatch(addAsset({
            name: name,
            quantity: quantity,
            work: work
        }))


        dispatch(addTransaction({
            name: name,
            quantity: quantity,
            amountPaid: (price-(change*price))*quantity,
            currentValue: price*quantity,
            date: new Date().toDateString(),
            work: work
        }))



        dispatch(handleBalance({
            work: work,
            amount: (price-(change*price))*quantity
        }))

        dispatch(handleInputValue())
       
      
    }


    return (
        <div className="form-container">
            <form  className="form" onSubmit={handleSubmit}>
                <div className="top-bar">
                    <h4>Buy { name}</h4>
                    <button className="close" onClick = {closeButton}>x</button>
                </div>
                <div className ="content">
                    
                    <p><label>Current Price: ${price}  </label></p>
                    <div className ="input-area"> <input 
                        type="number" name="qty" 
                        
                        value = {inputValue}
                        onChange = {handleChangeHere}

                        /><span onClick = {handleMaxClick} >Max: {work ==="Buy" ? max : maxSell}</span></div>
                    <h6>{work === "Buy" ? "you will be charged $ ":"you will get $ "} {(price-(change*price))*quantity }</h6>
                    <div>
                    <input type="radio" name="group-1" value="Buy"  checked = {work === "Buy"} onChange = {() =>handleRadioBtn("Buy")} />Buy
                    <input type="radio" name="group-1" value="Sell" checked = {work === "Sell"} onChange = {() =>handleRadioBtn("Sell")}/>Sell
                    </div>
                    <input disabled = {buttonStatus} type="submit" value={work} />
                    </div>
            </form>

        </div>
    )
}