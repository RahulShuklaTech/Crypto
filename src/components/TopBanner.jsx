import { useSelector } from "react-redux"
import "./styles/TopBannerStyle.css"
export default function TopBanner(){

    let {balance} = useSelector(state => state.wallet) 
    
    return (
        <div className = "top-banner-container">
            <h1>Earn some virtual money 💰</h1>
            <p>To buy virtual food 🍕</p>
            <h3>🏦 Wallet: ${balance}</h3>
        </div>
    )
}