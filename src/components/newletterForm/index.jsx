import Btn from "../btn"
import "./style.css" 
export default function NewletterForm() {  
    return (
        <form action="#" className="newsletterform">
            <div>
                <input type="text" placeholder="Enter your email..." id="" />
                <Btn type={"button"} text={"Join 40K+ Readers"}/>
            </div>
            <p>1 email every week. Unsubscribe anytime.</p>
        </form>
    )
}