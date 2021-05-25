import { useSelector } from "react-redux"
import "./styles/CurrentHoldings.css"

export default function CurrentHoldings(){
    
    let state = useSelector(state => state.portfolio)
    let {currentHoldings} = state

    // console.log("from current holdings",state)

    if(currentHoldings.length === 0) return <h1>Current Holdings</h1>

    return (
        <div>
        <h1>Current Holdings</h1>
            {currentHoldings.map((item,index) => <div className ="holding" key = {index}> 
                <h3>{item.name}: {item.quantity}</h3>
                <h4>Total Paid: {item.amountPaid.toFixed(2)}, CurrentValue: {item.currentValue.toFixed(2)}</h4>
                <h4 className = {item.amountPaid<= item.currentValue ? "green" :"red"}>P/L: ${  (item.currentValue - item.amountPaid).toFixed(3) }</h4>
            
            </div> )}
            {/* // name: {state.currentHoldings[0].name} value: {state.currentHoldings[0].currentValue} amount: {state.currentHoldings[0].amountPaid}  */}
        
        </div>
    )
}