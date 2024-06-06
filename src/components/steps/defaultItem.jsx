import './style.css'
export default function DefaultItem({classes,children}) {
    return (
        <div className={"default_item "+classes}>
            {children}
        </div>
    )
}