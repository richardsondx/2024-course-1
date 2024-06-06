import Btn from "../btn"; 
import DefaultItem from "../steps/defaultItem";  
export default function PricingBlk({packageName,packageInfo,price,disc_price,promo_code,children}) {
    return (
        <DefaultItem classes={"pricings"}>
            <h5>{packageName}</h5>
            <p>{packageInfo}</p> 
            <div className="onlyPrices">
                <h2>${price} {disc_price ? <span>$399</span> : ""}</h2>
                <p>One-time payment</p>
                {promo_code ? <span>{promo_code}</span> : ""} 
            </div> 
            {children}
            <Btn type={"link"} text={"Buy Now"} href={"#"}/>
            <span>Prices will increase soon</span>
        </DefaultItem> 
    )
}