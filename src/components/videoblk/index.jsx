import Img from '/hero-video.png' 
import "./style.css" 
import { useState } from 'react'
 


export default function VideoBlk() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleModal(e) {
      setIsOpen(!isOpen)
    }
    return (
        <>
        <div className="col-lg-8 offset-lg-2">
            <div className="videoblk">
                <img src={Img} alt="" />
                <button type='button' onClick={toggleModal}>
                    <svg width="85" height="85" viewBox="0 0 85 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.5" d="M42.5 85C65.9719 85 85 65.9719 85 42.5C85 19.0279 65.9719 0 42.5 0C19.0279 0 0 19.0279 0 42.5C0 65.9719 19.0279 85 42.5 85Z" fill="black"></path>
                        <path d="M31.875 30.4059C31.875 28.3775 31.875 27.3633 32.2989 26.797C32.6683 26.3036 33.2338 25.9949 33.8486 25.9509C34.5542 25.9006 35.4072 26.449 37.1136 27.5459L57.1761 40.4434C58.6568 41.395 59.3972 41.871 59.6526 42.4762C59.8761 43.0049 59.8761 43.6016 59.6526 44.1303C59.3972 44.7355 58.6568 45.2115 57.1761 46.1631L37.1136 59.0606C35.4072 60.1575 34.5542 60.7062 33.8486 60.6556C33.2338 60.6118 32.6683 60.3028 32.2989 59.8094C31.875 59.2433 31.875 58.2293 31.875 56.2007V30.4059Z" fill="white"></path>
                    </svg>
                </button>
            </div>
        </div>
        {isOpen ?  
            <div className={isOpen ? 'CustomModal showThis' : 'CustomModal'}> 
                <button onClick={toggleModal}><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii00IDAgMTggMTciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxNyI+PGcgdHJhbnNmb3JtPSJyb3RhdGUoNDUpIj48cGF0aCBkPSJtMCAwaDd2LTdoNXY3aDd2NWgtN3Y3aC01di03aC03eiIgb3BhY2l0eT0iLjQiLz48cGF0aCBkPSJtMSAxaDd2LTdoM3Y3aDd2M2gtN3Y3aC0zdi03aC03eiIgZmlsbD0iI2ZmZiIvPjwvZz48L3N2Zz4=" alt="" /></button>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Y7SY1oZ6xYI?si=BEtb5vZuG0XyQyqd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
        : 
        ""
        }
        </>
    )
}