import Btn from '../btn'
import LOGO from '/logo.webp'
import "./style.css"
import { useRef, useState } from 'react'
export default function Header() {
    const [isShowing,setShowing] = useState(false)
    const menuList = useRef()

    function CloseMenu() {
        const all_a = menuList.current.querySelectorAll('li a') 
        all_a.forEach(menu => {
            menu.addEventListener('click', () => { 
                setShowing(false)
            })
        }) 
    }

    const ShowHideMenu = () => {
        setShowing(!isShowing)
        CloseMenu()
    }

    
    return (
        <> 
            <header>
                <div className="top-header text-center">
                    <p>Limited-time offer: Save $500 on bundle with code <b>"BUNDLE2024"</b> at checkout.</p>
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 col-6">
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
                        <div className="col-lg-3 col-6">
                            <div className="header-right">
                                <Btn type={"link"} text={"Get Instant Access"} href={"#pricing"} classes={"grayBtn"}/> 
                                <button type='button' className='forMenu d-block d-lg-none' onClick={ShowHideMenu}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <aside className={isShowing ?  "shownow" : ""}>
                <div>
                    <a href="#" className="logo"><img src={LOGO} alt="" /></a>
                    <button type='button' onClick={ShowHideMenu}>X</button>
                </div>
                <nav>
                    <ul ref={menuList}>
                        <li><a href="#" className='active'>Overview</a></li>
                        <li><a href="#whatisinside">What's Inside</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#testimonial">Testimonials</a></li>
                        <li><a href="#faq">FAQ's</a></li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}