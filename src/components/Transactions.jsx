import { useSelector } from "react-redux"
import "./styles/Transactions.css"

export default function Transactions(){
    let state = useSelector(state => state.portfolio)
    let {transactions} = state

    // console.log("from current holdings",state)

    if(transactions.length === 0) return <h1>Transactions</h1>

    return (
        <div>
        <h1>Transactions</h1>
            {transactions.map((item,index) => 
               
                <div className = {item.work === "Buy" ? "buy":"sell"} key = {index}> 
                 {/* {console.log(item.work)} */}
                <h3>{item.name} - {item.quantity.to}@${(item.amountPaid/item.quantity).toFixed(4)}</h3>
                <h3>{item.work === "Buy" ? "Paid":"Received"}: ${item.amountPaid.toFixed(2)}</h3>
                <h5>{item.work === "Buy"?"Bought on":"Sold on"}: {item.date}</h5>
            
            </div> )}
           
        
        </div>
    )
}