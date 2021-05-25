import { useSelector } from "react-redux"
import "./styles/Transactions.css"

export default function PortfolioValue(){

    let state = useSelector(state => state.portfolio);

    let {currentHoldings} = state;
    
    let value = currentHoldings.reduce((acc,item) => acc+item.currentValue,0)

    // console.log(value)
    return <div classname = "center"><h1 className ="one">Portfolio Value: {value.toFixed(2)}</h1></div>
}