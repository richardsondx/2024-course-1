import Btn from '../btn' 
import "./style.css"
export default function Hero() {
    return (
        <div className="col-lg-8 offset-lg-2">
        <div className="hero-wrap text-center">
            <h1>Build Your Digital Product Business From Scratch</h1>
            <p>Create Once, Sell Forever is a video course where I show you my framework on how to build a $35k/month digital product business from scratch.</p>
            <Btn type={"link"} href={"#pricing"} classes={"largeBtn"} text={"Get Instant Access"} />
            <span>Limited-time offer, the prices will increase soon.</span>
        </div>
      </div>
    )
}