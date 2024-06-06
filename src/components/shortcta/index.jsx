import DefaultItem from "../steps/defaultItem";  
import Btn from "../btn";

export default function ShortCta({title,content}) {
    return (
        <DefaultItem classes={"short-cta"}>
            <h4>{title}</h4>
            <p>{content}</p>
            <Btn type={"link"} href={"#pricing"} text={"Get Instant Access"}/>
        </DefaultItem>
    )
}