import { useDispatch, useSelector } from "react-redux"
import { showForm } from "../redux/actions/actions";
import "./styles/CurrenciesStyle.css"

export default function Currencies() {

    const data = useSelector(state => state.data.data)
    
   
    const dispatch = useDispatch();
  
   
    let bit,eth,dog;
    if(data.length)
        [bit,eth,dog] = data[0];

   
    const handleClick = (name,price,buyPrice,sellPrice) => {
       
        dispatch(showForm({
            name: name,
            price:price,
            buyPrice: buyPrice,
            sellPrice: sellPrice

        }))

    }
    if(!data.length) return null;
    // console.log("latest ",bit.low_24h,bit.high_24h)
    return (

        <div className="currencies-container" >
            <div className="currency" onClick = {() =>handleClick(bit.name,bit.current_price,bit.low_24h,bit.high_24h)}>
                <div className="logo">
                    <img src={bit.image} alt="bitcoin logo" />
                </div>
                <div className ="info" >
                    <h3>$ {bit.current_price}</h3>
                    <h4>{bit.name}</h4>
                    <h5>last 24h: {bit.price_change_percentage_24h}</h5>
                </div>
               
            </div>
            <div className="currency" onClick = {() =>handleClick(eth.name,eth.current_price,eth.low_24h,eth.high_24h)}>
                <div className="logo">
                    <img src={eth.image} alt="bitcoin logo" />
                </div>
                <div className ="info">
                    <h3>$ {eth.current_price}</h3>
                    <h4>{eth.name}</h4>
                    <h5>last 24h: {eth.price_change_percentage_24h}</h5>
                </div>
                
            </div>
            <div className="currency" onClick = {() =>handleClick(dog.name,dog.current_price,dog.low_24h,dog.high_24h)}>
                <div className="logo">
                    <img src={dog.image} alt="bitcoin logo" />
                </div>
                <div className ="info">
                    <h3>$ {dog.current_price}</h3>
                    <h4>{dog.name}</h4>
                    <h5>last 24h: {dog.price_change_percentage_24h}</h5>
                </div>
                
               
            </div>
        </div>
    )

}