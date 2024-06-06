import './style.css'
export default function SectionTitle({title,content}) {
    return (
        <div className="section-title">
            <h2>{title}</h2>
            <p>{content}</p> 
        </div>
    )
}