import Btn from '../btn'
import LOGO from '/logo.webp'
import "./style.css"
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Header({menus,btnInfo,children}) {
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
                {children &&
                    <div className="top-header text-center">
                        {children}
                    </div>
                }
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-9 col-6">
                            <div className="header-left">
                                <Link to="/" className="logo"><img src={LOGO} alt="" /></Link>
                                <nav>
                                    <ul>
                                        {menus.map((item,i) => (
                                            <li key={i}><a href={item.href}>{item.value}</a></li>
                                        ))} 
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="header-right">
                                <Btn type={"link"} text={btnInfo.value} href={btnInfo.href} classes={"grayBtn"}/> 
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
                    <button type='button' onClick={ShowHideMenu}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                        </svg>
                    </button>
                </div>
                <nav>
                    <ul ref={menuList}>
                        {menus.map((item,i) => (
                            <li key={i}><a href={item.href}>{item.value}</a></li>
                        ))}
                    </ul>
                </nav>
            </aside>
        </>
    )
}