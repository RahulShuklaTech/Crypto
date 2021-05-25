import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getData, gotData } from "../redux/actions/actions"
import BuyForm from "./BuyForm"
import Currencies from "./Currencies"
import CurrentHoldings from "./CurrentHoldings"
import PortfolioValue from "./PortfolioValue"
import TopBanner from "./TopBanner"
import Transactions from "./Transactions"



const Main = (props) => {

    const dispatch = useDispatch();
    const loading = useSelector(state => state.data.loading)
    const showForm = useSelector(state => state.form.showForm)
   
    
    const getDataPlease = async () => {
        dispatch(getData());
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=bitcoin%2Cethereum%2Cdogecoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=24h";
        const response = await fetch(url);
        const data = await response.json();
        
        dispatch(gotData(data))
        

        
    }
    useEffect(() => {
       
        getDataPlease();

    // eslint-disable-next-line 
    }, [])

    return (
        <div>
        <TopBanner />
        <PortfolioValue />
       
        {showForm  && <BuyForm />}
        {loading ? <h1>Fetching Data...</h1>:
        <div>
        <Currencies />
        
        <div className = "bottom-section">
            <CurrentHoldings />
            <Transactions />
        </div>
        </div>}
        </div>
    )
}


export default Main


//state variables
// wallet, portfolio value currentholding array  tranasctions array 