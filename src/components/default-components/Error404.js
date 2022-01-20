import error404Image from '../../images/Error404.png'

const Error404 = () => {
    return (
        <div className="d-flex justify-content-center align-items-start" style={{height: "100vh"}}>
            <img src={error404Image} className="error-404-image" />
        </div>
    )
}

export default Error404