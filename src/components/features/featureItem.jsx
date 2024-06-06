export default function FeatureItem({title, content}) {
    return (
        <div className="feature_item">
            <h5>{title}</h5>
            <p>{content}</p>
        </div>
    )
}