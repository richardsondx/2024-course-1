import NewletterForm from "../newletterForm"
import "./style.css" 
export default function Footer() {  
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="footer-form">
                            <h4>Digital Products 101</h4>
                            <p>Sign up for my weekly newsletter to receive 1 email per week on branding, audience building, marketing and more.</p>
                            <NewletterForm />
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="footer-bottom">
                            <div>
                                <ul>
                                    <li><a href="#">Privacy policy</a></li>
                                    <li><a href="#">Terms and conditions</a></li>
                                </ul>
                                <p>© 2024 ModestMitkus. All rights reserved.</p> 
                            </div>
                            <ul>
                                <li>
                                    <a href="#">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1450_16)">
                                            <path d="M23.5057 6.22697C23.2288 5.19897 22.4183 4.38842 21.3904 4.11165C19.5122 3.59766 12 3.59766 12 3.59766C12 3.59766 4.48762 3.59766 2.60954 4.09189C1.60131 4.36866 0.771003 5.19897 0.494233 6.22697C0 8.10504 0 11.9996 0 11.9996C0 11.9996 0 15.9139 0.494233 17.7722C0.771003 18.8002 1.58154 19.6108 2.60954 19.8875C4.50738 20.4015 12 20.4015 12 20.4015C12 20.4015 19.5122 20.4015 21.3904 19.9073C22.4183 19.6305 23.2288 18.82 23.5057 17.792C23.9999 15.9139 23.9999 12.0193 23.9999 12.0193C23.9999 12.0193 24.0196 8.10504 23.5057 6.22697Z" fill="currentColor"></path>
                                            <path d="M16.0967 12.0021L10.1484 8.57617V15.4279L16.0967 12.0021Z" fill="black"></path>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_1450_16">
                                                <rect width="24" height="24" fill="white"></rect>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </li> 
                                <li>
                                    <a href="#">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_1450_10)">
                                            <path d="M14.7738 10.1635L23.7022 0H21.5872L13.8313 8.82305L7.64125 0H0.5L9.86259 13.3433L0.5 24H2.61504L10.8002 14.6806L17.3388 24H24.48M3.3784 1.5619H6.62769L21.5857 22.5149H18.3355" fill="currentColor"></path>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_1450_10">
                                            <rect width="24" height="24" fill="white"></rect>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </li> 
                                <li>
                                    <a href="#">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_865_6)">
                                            <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z" fill="currentColor"></path>
                                            </g>
                                            <defs>
                                            <clipPath id="clip0_865_6">
                                            <rect width="24" height="24" fill="white"></rect>
                                            </clipPath>
                                            </defs>
                                        </svg>
                                    </a>
                                </li> 
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}