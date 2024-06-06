import "./style.css"
export default function Btn({type,text,href,classes}) {
    return(
        <>
            {type === "link" ? <a className={"theme-btn "+ classes} href={href}>{text}</a> : <button className={"theme-btn "+ classes} type={type}>{text}</button>}
        </>
    )
}