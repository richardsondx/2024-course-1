import Btn from '../btn'
import LOGO from '/logo.webp'
import "./style.css"
export default function Header() {
    return (
        <header>
            <div className="top-header text-center">
                <p>Limited-time offer: Save $500 on bundle with code <b>"BUNDLE2024"</b> at checkout.</p>
            </div>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-9">
                        <div className="header-left">
                            <a href="#" className="logo"><img src={LOGO} alt="" /></a>
                            <nav>
                                <ul>
                                    <li><a href="#" className='active'>Overview</a></li>
                                    <li><a href="#whatisinside">What's Inside</a></li>
                                    <li><a href="#pricing">Pricing</a></li>
                                    <li><a href="#testimonial">Testimonials</a></li>
                                    <li><a href="#faq">FAQ's</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="header-left">
                            <Btn type={"link"} text={"Get Instant Access"} href={"#pricing"} classes={"grayBtn"}/> 
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}