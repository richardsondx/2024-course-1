import Btn from '../btn' 
import "./style.css"
export default function Hero({title,content,children,...rest}) {
    return (
    <div className="col-lg-8 offset-lg-2">
        <div className="hero-wrap text-center" {...rest}>
            <h1>{title}</h1>
            <p>{content}</p>
            {children}
        </div>
    </div>
    )
}