const Paragraph = (props) => {
    return (
        <div className={props.className}>
            <h3 className="paragraph-header">{props.header}</h3>
            {
                props.paragraphs.map((value, index) => {
                    return <p key={index} className={`paragraph ${index === props.paragraphs.length - 1 ? "mb-0" : ""}`}>{value}</p>
                })
            }
        </div>
    )
}

export default Paragraph