

const LinkWithIcon = (props) => {
    return (
        <div 
            className={
                "mb-0 link-with-icon d-flex align-items-center text-decoration-none px-1 px-sm-2 py-2 font-weight-bold " + 
                (props.danger ? 'danger-link' : "") + 
                (typeof props.className !== 'undefined' ? props.className : '')
            } 
            role="button"
        >
            {
                typeof props.iconSrc !== "undefined" ?
                <img src={props.iconSrc} className="mr-2" /> :
                null
            }
            {props.name}
            {props.children}
        </div>
    )
}

export default LinkWithIcon