import "../SideBar.css"
import { IsOpenContext } from "../SideBar"

const SideBarMenuItem = (props) => {
    return (
        <IsOpenContext.Consumer>
            {isOpen => {
                return (
                    isOpen ? 
                    <div className="sidebar-menu-item position-relative overflow-hidden" role="button">
                        <img src={props.imageSrc} width="20px" className="mr-3" />
                        <p className="d-inline mr-2">{props.name}</p>
                        { typeof props.notification !== "undefined" ? <span className="badge badge-pill badge-primary">{props.notification}</span> : "" }
                    </div> :
                    <div className="sidebar-menu-item position-relative overflow-hidden d-flex justify-content-center align-items-center" role="button">
                        <img src={props.imageSrc} width="20px" />
                        { typeof props.notification !== "undefined" ? <div className="notify-circle"></div> : "" }
                    </div>
                )
            }}
        </IsOpenContext.Consumer>
    )
}

export default SideBarMenuItem